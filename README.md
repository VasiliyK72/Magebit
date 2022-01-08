# Magebit
 Web Developers position 
Source codes of the project, according to the assignment.
Author, Vasily Krasnoborodko +37126785118

To install a website on a web server, you need to download the archive of all files and unzip them in the root directory of your server.

MySQL
We go to the server using the SSH protocol.
Enter your username:
Vasily
and password:
****

If you are not root, then enter the command:
sudo su -

Connecting to MySQL Server:
mysql -u root -p

Create database:
create database magebit;
use magebit;

CREATE TABLE `subscribing` (   `id` int NOT NULL auto_increment,   `time` int NOT NULL,   `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,   `email` varchar(200) NOT NULL, primary key (id));

You can see what happened using the following commands:
 SHOW TABLES;
DESCRIBE subscribing;

Create user 'user_magebit', Come up with a password:
 CREATE USER user_magebit@localhost IDENTIFIED BY 'www123';
 GRANT ALL PRIVILEGES ON magebit.* TO 'user_magebit'@'localhost';

Let's check your user for privileges:
show grants for user_magebit@localhost;


Enter all these values into the file: config.php

After that, import the database from the file: subscribing.sql

Everything worked out successfully. The website should start up.
The main page of the site is available, this is: index.html
And a page for the administrator: list.html

On the list.html page I made sorting emails by date, name and gmail domain.

