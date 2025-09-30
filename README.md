Flight Booking System Backend

A server-side application that powers a modern flight booking platform, built with a RESTful API design. It manages all core functionalities, including user authentication, flight search, and reservation handling, with a focus on a clean architecture and exceptional reliability.

`Features`

User Management: Secure user registration and authentication using JWT (JSON Web Tokens) for protected API access.
Flight Search: Enables users to search for available flights based on various parameters such as origin, destination, and dates.
Booking Management: Allows users to create, view, and manage flight reservations.
Robust Error Handling: A centralized error-handling middleware ensures predictable and consistent error responses for both expected and unexpected issues.
Database ORM: Utilizes the Sequelize ORM to provide an elegant, promise-based interface for interacting with a SQL database, abstracting complex raw queries.
Data Validation: Implements data validation on all incoming requests to maintain data integrity and prevent errors.
Airport Management (Admin): Provides an administrative interface for managing airport information, including adding new airports and updating details.
Airplane Management (Admin): Offers tools for administrators to manage airline fleet data, including adding, updating, and removing airplanes.

`Technology Stack`

Backend: Node.js, Express.js
ORM: Sequelize
Database: SQL
Authentication: JSON Web Tokens (JWT)





`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

`config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the server-config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

`routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

`middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

`controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

`repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

`services` -> contains the buiness logic and interacts with repositories for data from the database

`utils` -> contains helper methods, error classes etc.

Setup the project
Download this template from github and open it in your favourite text editor.
Go inside the folder path and execute the following command:
npm install
In the root directory create a .env file and add the following env variables
```
    PORT=<port number of your choice>
```
ex:
```
    PORT=3000
```
go inside the src folder and execute the following command:
```
  npx sequelize init
```
By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

To run the server execute
```
npm run dev
```
