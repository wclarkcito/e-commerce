 DROP TABLE IF EXISTS ecommerce_db;
    
    CREATE DATABASE ecommerce_db;
    
    USE ecommerce_db;
    
    CREATE TABLE `Category`(
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `category_name` VARCHAR(45) NOT NULL
    );
    CREATE TABLE `Product`(
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `product_name` VARCHAR(45) NOT NULL,
    `price` DECIMAL(4,2) NOT NULL,
    `stock` INTEGER(10) NOT NULL,
    `category_id` INTEGER(10) REFERENCES `Category` (id)
    );
    CREATE TABLE `Tag`(
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `tag_name` VARCHAR(45) NOT NULL
    );
    CREATE TABLE `ProductTag`(
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `product_id` INTEGER(10) REFERENCES `Product` (id),
    `tag_id` INTEGER(10) REFERENCES `Tag` (id)
    );
