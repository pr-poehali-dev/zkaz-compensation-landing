import json
import os
import re
import psycopg2


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

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'id': new_id}),
    }
