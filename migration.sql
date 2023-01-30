DROP TABLE IF EXISTS food;

CREATE TABLE food (
    id SERIAL,
    food_name varchar,
    carbs integer,
    fats integer,
    protein integer,
    calories integer
)