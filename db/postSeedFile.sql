CREATE TABLE IF NOT EXISTS posts(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    message TEXT,
    img TEXT
)