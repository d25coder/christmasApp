DROP DATABASE IF EXISTS christmasApp;
CREATE DATABASE christmasApi;
USE christmasApi;

-- CREATE TABLES

CREATE TABLE ACTOR(
    actor_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL, 
    fName VARCHAR(40),
    l0Name VARCHAR(40),
    CONSTRAINT pk_actor PRIMARY KEY (actor_id) 
);
-- Parent Table
CREATE TABLE DIRECTOR(
    director_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    -- director represent the column
    director VARCHAR(40),
    CONSTRAINT pk_director PRIMARY KEY (director_id)
);

-- Parent Table
CREATE TABLE STREAMING_PLATFORM(
    streamPlat_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    -- streamPlat represent the column
    streamPlat VARCHAR(40), 
    CONSTRAINT pk_stremingPlatform PRIMARY KEY (streamPlat_id)
);

-- Parent Table
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

--  PIVOT TABLE
CREATE TABLE PROGRAM_TO_ACTOR(
    -- program_id parent table
    program_id SMALLINT UNSIGNED NOT NULL, 
    actor_id SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_program_actor FOREIGN KEY (program_id) REFERENCES program (program_id),
    CONSTRAINT fk_actor_program FOREIGN KEY (actor_id) REFERENCES actor (actor_id)
);

CREATE TABLE PROGRAM_TO_DIRECTOR(
    program_id SMALLINT UNSIGNED NOT NULL,
    director_id SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_program_director FOREIGN KEY (program_id) REFERENCES program (program_id),
    CONSTRAINT fk_director_program FOREIGN KEY (director_id) REFERENCES director (director_id)
);

CREATE TABLE PROGRAM_TO_STREAMING_PLATFORM(
    program_id SMALLINT UNSIGNED NOT NULL,
    streamplat_id SMALLINT UNSIGNED NOT NULL, 
    CONSTRAINT fk_program_str FOREIGN KEY (program_id) REFERENCES program (program_id),
    CONSTRAINT fk_str_program FOREIGN KEY (streamplat_id) REFERENCES streaming_platform (streamplat_id)
);