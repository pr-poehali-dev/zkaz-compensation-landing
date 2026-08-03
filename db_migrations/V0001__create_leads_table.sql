CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    price NUMERIC,
    days INTEGER,
    total_amount NUMERIC,
    comment TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);