-- види зв'язків
/*
  1 : 1
  1 : n
  n : m
*/
-- n : m
CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  model TEXT
);

CREATE TABLE dealerships (
  id SERIAL PRIMARY KEY,
  "name" TEXT
);

CREATE TABLE cars_to_dealerships (
  car_id INT REFERENCES cars ON DELETE CASCADE ON UPDATE CASCADE,
  dealership_id INT REFERENCES dealerships ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (car_id, dealership_id)
);

INSERT INTO cars
(model)
VALUES
('Toyota Land Cruiser 2019'),
('Toyota Land Cruiser 2020'),
('Toyota Land Cruiser 2021');

INSERT INTO dealerships
("name")
VALUES
('Super Auto Shop'),
('AutoBazar');

INSERT INTO cars_to_dealerships
(car_id, dealership_id)
VALUES 
(1, 1),
(2, 1),
(3,1),
(1, 2);
-- 1 : 1
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  "name" TEXT
  -- employee_id INT REFERENCES employees
);

CREATE TABLE employees(
  id SERIAL PRIMARY KEY,
  work_phone TEXT,
  user_id INT NOT NULL UNIQUE REFERENCES users ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE users
ADD COLUMN employee_id INT UNIQUE REFERENCES employees ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO users
("name")
VALUES
('user 1'),
('user 2');

INSERT INTO employees
(user_id, work_phone)
VALUES
(2, '56465464321');

UPDATE users
SET employee_id = 1
WHERE id = 2;

DELETE FROM users WHERE id = 2;

DROP TABLE users CASCADE;

-- жорсткий варіант 

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  "name" TEXT
  -- employee_id INT REFERENCES employees
);

CREATE TABLE employees(
  id SERIAL PRIMARY KEY,
  work_phone TEXT,
  user_id INT NOT NULL UNIQUE REFERENCES users
  ON DELETE CASCADE ON UPDATE CASCADE  DEFERRABLE INITIALLY DEFERRED,
  company_id INT NOT NULL REFERENCES companies ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name TEXT
);

ALTER TABLE users
ADD COLUMN employee_id NOT NULL INT UNIQUE REFERENCES employees
ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED;

BEGIN;

INSERT INTO users
("name")
VALUES
('user 1'),
('user 2');

INSERT INTO employees
(user_id, work_phone)
VALUES
(2, '56465464321');

UPDATE users
SET employee_id = 1
WHERE id = 2;
COMMIT;