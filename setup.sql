CREATE USER IF not EXISTS 'finalUser'@'localhost';
CREATE DATABASE IF NOT EXISTS finalProject;
use finalProject;
CREATE TABLE IF NOT EXISTS fpUser(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fname varchar(30) not null,
    lname varchar(30) not null,
    birthday date not null,
    email varchar(30) not null,
    userRole enum('teacher','assistant','student') NOT NULL
);
GRANT SELECT,INSERT,UPDATE,DELETE on finalProject.* to finalUser@localhost;


---------
INSERT INTO fpUser(fname,lname,birthday,email,userRole)
VALUES('mohamed','mohamed','2000/10/10','jbf@ds.d','teacher');