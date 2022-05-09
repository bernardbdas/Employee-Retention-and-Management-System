CREATE EXTENSION pgcrypto;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
INSERT INTO users (email, password) VALUES (
  'bernard@admin.company.com',
  crypt('bernardPassword', gen_salt('bf'))
);
SELECT id 
  FROM users
 WHERE email = 'johndoe@mail.com' 
   AND password = crypt('johnspassword', password);

 id
----
  1
(1 row)


SELECT id 
  FROM users
 WHERE email = 'johndoe@mail.com' 
   AND password = crypt('wrongpassword', password);

 id
----
(0 rows)