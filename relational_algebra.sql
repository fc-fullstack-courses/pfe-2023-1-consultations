--
SELECT id FROM cars
UNION
SELECT car_id FROM cars_to_dealerships;
--
SELECT * FROM cars, cars_to_dealerships
WHERE id = car_id;
--
SELECT *
FROM cars
JOIN cars_to_dealerships ON id = car_id;
--
SELECT *
FROM cars c
JOIN cars_to_dealerships ctd ON c.id = ctd.car_id
JOIN dealerships d ON d.id = ctd.dealership_id;
--
INSERT INTO cars
(model)
VALUES
('test');
--
SELECT * FROM cars
CROSS JOIN cars_to_dealerships;
--
SELECT * FROM cars c LEFT JOIN cars_to_dealerships ctd ON c.id = ctd.car_id;
SELECT * FROM cars_to_dealerships ctd RIGHT JOIN cars c ON c.id = ctd.car_id;

SELECT * FROM cars c LEFT JOIN cars_to_dealerships ctd ON c.id = ctd.car_id
WHERE ctd.car_id IS NULL;