import json
import os
import re
import smtplib
from email.mime.text import MIMEText
import urllib.request
import psycopg2


def send_email_notification(name: str, phone: str, price, days, total_amount, comment: str) -> None:
    sender = os.environ.get('SMTP_EMAIL')
    password = os.environ.get('SMTP_PASSWORD')
    if not sender or not password:
        return
    text = (
        f"Новая заявка с сайта\n\n"
        f"Имя: {name}\n"
        f"Телефон: {phone}\n"
        f"Цена квартиры: {price}\n"
        f"Дней просрочки: {days}\n"
        f"Сумма к взысканию: {total_amount}\n"
        f"Комментарий: {comment}\n"
    )
    recipient = 'succeed2013@yandex.ru'
    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = 'Новая заявка с сайта — точный расчёт'
    msg['From'] = sender
    msg['To'] = recipient

    try:
        with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
            server.login(sender, password)
            server.sendmail(sender, [recipient], msg.as_string())
        print(f'Email notification sent to {recipient}')
    except Exception as e:
        print(f'Email notification failed: {e}')


def send_telegram_notification(name: str, phone: str, price, days, total_amount, comment: str) -> None:
    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if not token or not chat_id:
        return
    text = (
        f"🆕 Новая заявка с сайта\n\n"
        f"Имя: {name}\n"
        f"Телефон: {phone}\n"
        f"Цена квартиры: {price}\n"
        f"Дней просрочки: {days}\n"
        f"Сумма к взысканию: {total_amount}\n"
        f"Комментарий: {comment}"
    )
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({'chat_id': chat_id, 'text': text}).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'}, method='POST')
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            resp.read()
        print('Telegram notification sent')
    except Exception as e:
        print(f'Telegram notification failed: {e}')


def send_notification(name: str, phone: str, price, days, total_amount, comment: str) -> None:
    send_email_notification(name, phone, price, days, total_amount, comment)
    send_telegram_notification(name, phone, price, days, total_amount, comment)


def handler(event: dict, context) -> dict:
    '''Принимает заявки с формы калькулятора компенсации (имя, телефон, данные расчёта) и сохраняет их в БД.
    Args: event с httpMethod, body (JSON: name, phone, price, days, total_amount, comment); context с request_id
    Returns: HTTP response с результатом сохранения заявки
    '''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if method != 'POST':
        return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Invalid JSON'})}

    name = str(body.get('name', '')).strip()
    phone = str(body.get('phone', '')).strip()
    price = body.get('price')
    days = body.get('days')
    total_amount = body.get('total_amount')
    comment = str(body.get('comment', '')).strip()

    if not name or len(name) < 2:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Укажите имя'})}

    phone_digits = re.sub(r'\D', '', phone)
    if len(phone_digits) < 10:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Укажите корректный телефон'})}

    dsn = os.environ['DATABASE_URL']
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor()
        name_escaped = name.replace("'", "''")
        phone_escaped = phone.replace("'", "''")
        comment_escaped = comment.replace("'", "''")
        price_val = 'NULL' if price is None else str(float(price))
        days_val = 'NULL' if days is None else str(int(days))
        total_val = 'NULL' if total_amount is None else str(float(total_amount))
        cur.execute(
            f"""
            INSERT INTO leads (name, phone, price, days, total_amount, comment)
            VALUES ('{name_escaped}', '{phone_escaped}', {price_val}, {days_val}, {total_val}, '{comment_escaped}')
            RETURNING id
            """
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
    finally:
        conn.close()

    send_notification(name, phone, price, days, total_amount, comment)

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'id': new_id}),
    }