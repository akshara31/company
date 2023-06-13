create database crud;
use crud;

drop table employee;

create table employee(
ID INT(8) PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(20),
Email VARCHAR(30),
Age INT(3),
Role VARCHAR(20),
Salary INT(8)
);

insert into employee values
(1, "akshara", "aksh@email.com", 20, "employee", 20000);
insert into employee values
(2, "akash", "akash@email.com", 20, "employee", 25000);
insert into employee values
(3, "anu", "anu@email.com", 21, "employee", 30000);
insert into employee values
(4, "roshan", "rosh@email.com", 30, "admin", 10000);
insert into employee values
(5, "rohan", "roh@email.com", 32, "admin", 10000);
insert into employee values
(6, "adhi", "adhi@email.com", 50, "org", 350000);



create table team(
Employee_ID INT(8),
Team_ID INT(8) PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(10),
Department VARCHAR(20),
YearsOfExperience INT(3),
Skills VARCHAR(20),
FOREIGN KEY(Employee_ID) REFERENCES employee(ID));

drop table team; 

insert into team values
(1, 1, "R&D", "PM", 2, "Communication");
insert into team values
(2, 2, "Server Des", "PM", 4, "Backend Dev");
insert into team values
(3, 3, "Support", "PM", 5, "Communication");
insert into team values
(4, 4, "Admin", "IT", 10, "Technical/Debugging");
insert into team values
(5, 5, "Admin", "IT", 11, "Technical/Debugging");
insert into team values
(6, 6, "Org", "IT", 30, "Management");

delete from employee;
delete from team;

SELECT e.ID, e.Name, e.Email, e.Age, e.Salary, t.Team_ID, t.Name, t.Department, t.YearsOfExperience, t.Skills FROM employee e INNER JOIN Team t ON e.ID = t.Employee_ID;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql';

select * from employee;
select * from team;

drop table login;

create table login(
username varchar(25),
password varchar(25),
role varchar(10),
ID INT(8) NULL
);

insert into login values
("admin1", "admin1", "admin", 4);

insert into login values
("akshara", "akshara123", "employee", 1);

insert into login values
("akash", "akash123", "employee", 2);

update login set username="roshan" where username="admin1";

insert into login values
("johndoe", "johndoe123", "client", 1);
insert into login values
("janedoe", "janedoe123", "client", 2);

insert into login values
("adhi","adhi123","org",6);

delete from login where username="akash123";

select * from login;

create table client(
ID INT(8) PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(20),
Email VARCHAR(30),
Age INT(3)
);

insert into client values
(1, "john doe", "john@email.com", 20);
insert into client values
(2, "jane doe", "jane@email.com", 20);

select * from client;
