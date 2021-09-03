-- In SQL Shell
-- 1. for help -> \?
-- 2. list databases -> \l
-- 3. Create database -> CREATE DATABASE database_name
-- 4. Go to the different database -> \c database_name
-- 5. list all tables -> \d

-- Create Table in a database ->
-- CREATE TABLE products (
--     id INT,
--     name VARCHAR(50),
--     price INT,
--     on_sale boolean
-- );

-- To see the data inside a table -> \d table_name

-- To add a column to a table -> ALTER TABLE table_name ADD COLUMN column_name data_type(VARCHAR(40));

-- To drop a column from a Table -> ALTER TABLE table_name DROP column_name;

-- To Drop a table from the database DROP TABLE table_name;

-- To Drop a database -> DROP DATABASE batabase_name;

-- INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);  //"" dosen't work but '' works for VARCHAR so called string.