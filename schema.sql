DROP DATABASE IF EXISTS christmasApp;
CREATE DATABASE christmasApp;
USE christmasApp;

-- CREATE TABLES

CREATE TABLE ACTOR(
    actor_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL, 
    fName VARCHAR(40),
    LName VARCHAR(40),
    CONSTRAINT pk_actor PRIMARY KEY (actor_id) 
);
CREATE TABLE DIRECTOR(
    director_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    -- director represent the column
    director VARCHAR(40),
    CONSTRAINT pk_director PRIMARY KEY (director_id)
);

CREATE TABLE STREAMING_PLATFORM(
    streamPlat_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    -- streamPlat represent the column
    streamPlat VARCHAR(40), 
    CONSTRAINT pk_stremingPlatform PRIMARY KEY (streamPlat_id)
);

CREATE TABLE PRODUCTION(
    production_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    production VARCHAR(40),
    CONSTRAINT pk_production PRIMARY KEY (production_id)
);

CREATE TABLE PROGRAM(
    program_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(60),
    yr_released YEAR,
    runtime TIME,
    production_id SMALLINT UNSIGNED NOT NULL, 
    format ENUM('animation', 'live action', 'stop motion') default 'animation',
    program_rating ENUM('G', 'TV-G', 'TV-PG', 'TV-14', 'PG', 'PG-13', 'R') default 'PG',
    rating ENUM('1', '2', '3', '4', '5', '6', '7', '8') default '3',
    img VARCHAR(100),
    description MEDIUMTEXT, 
    CONSTRAINT pk_program PRIMARY KEY (program_id),
    CONSTRAINT fk_production_id FOREIGN KEY (production_id) REFERENCES production (production_id)
); 