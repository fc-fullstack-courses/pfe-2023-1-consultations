CREATE TABLE users (
  full_name TEXT CHECK (full_name != '')
);

SELECT * FROM users
WHERE full_name = 'Test';

DELETE FROM users WHERE full_name = 'Test';