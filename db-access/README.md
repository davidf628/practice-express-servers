# DB-access 

This is a simple script in NodeJS that will connect to a MariaDB, make a query and send the results to a website that will be served. The website will be written in EJS.

This connects to the database 'new_database' on 192.168.1.247 and which contains a few songs, who wrote them, and a made-up rating attribute.

The dependencies here are:

* **express** - for creating the express server
* **ejs** - for inserting the results of the database calls into the html files served to the client
* **mariadb** - for connecting to the server
* **dotenv** - for loading the environment variables stored in .env

Note that the database credentials are stored in the file .env which is not synched to GitHub for security
