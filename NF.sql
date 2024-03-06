-- 2 NF

CREATE TABLE cars_to_dealerships (
  car_id INT REFERENCES cars ON DELETE CASCADE ON UPDATE CASCADE,
  dealership_id INT REFERENCES dealerships ON DELETE CASCADE ON UPDATE CASCADE,
  -- car_color TEXT,
  -- dealership_address TEXT,
  PRIMARY KEY (car_id, dealership_id)
);
-- 3 NF
-- id > attr1 > attr2
CREATE TABLE departaments (
  id SERIAL PRIMARY KEY,
  "departament" TEXT,
  "departament_phone" TEXT
);

CREATE TABLE workers (
  id SERIAL PRIMARY KEY,
  "name" TEXT,
  departament_id INT REFERENCES departaments
  --   "departament" TEXT,
  -- "departament_phone" TEXT
);

