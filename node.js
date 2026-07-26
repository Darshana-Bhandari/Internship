/*
            NODE.JS NOTES
*/

/*
------------------------------------------
What is Node.js?
------------------------------------------

Node.js is an open-source, cross-platform JavaScript runtime environment
that allows developers to run JavaScript outside the web browser.

It is built on Google's V8 JavaScript Engine, which compiles JavaScript
into machine code for fast execution.
*/

/*
Features of Node.js

- Open-source
- Cross-platform (Windows, macOS, Linux)
- Fast execution using the V8 Engine
- Event-driven architecture
- Non-blocking I/O operations
- Highly scalable
- Ideal for building server-side applications
*/

/*
------------------------------------------
What Can Node.js Do?
------------------------------------------

Node.js is commonly used to build:

- Web servers
- REST APIs
- Real-time applications (Chat Apps, Live Notifications)
- Streaming applications
- Backend services
- Microservices
- Command Line (CLI) applications
- File System operations
- Database applications
*/

/*
Popular Companies Using Node.js

- Netflix
- PayPal
- LinkedIn
- Uber
- Walmart
- Trello
*/

/*
------------------------------------------
How Does Node.js Work?
------------------------------------------

Unlike traditional server technologies such as PHP, Ruby, or Java,
Node.js uses:

- Single-threaded Event Loop
- Non-blocking I/O
- Event-driven architecture
*/

/*
Traditional Server

Client 1 → Thread 1
Client 2 → Thread 2
Client 3 → Thread 3

Every request creates a new thread.
More users = More threads = More memory usage.
*/

/*
Node.js

Request
   ↓
Event Loop
   ↓
Background Task
   ↓
Callback / Promise
   ↓
Response

Node.js uses a single thread and does not wait for long-running tasks.
It continues serving other requests while background operations execute.
*/

/*
------------------------------------------
What is NPM?
------------------------------------------

NPM (Node Package Manager) is the default package manager for Node.js.

It allows developers to:

- Install packages
- Remove packages
- Update packages
- Manage project dependencies
- Run project scripts

NPM contains millions of open-source packages.
*/

/*
------------------------------------------
Common NPM Commands
------------------------------------------
*/
// Install a package
//npm install express

// Shortcut
//npm i express

// Install multiple packages
//npm install express dotenv

// Install development dependency
//npm install --save-dev nodemon

// Shortcut
//npm i -D nodemon

// Install globally
//npm install -g nodemon

// Uninstall package
//npm uninstall express

// Update packages
//npm update

// List installed packages
//npm list

// List global packages
//npm list -g

// Install all dependencies from package.json
//npm install

/*
------------------------------------------
package.json
------------------------------------------

package.json is the main configuration file of every Node.js project.

It stores:

- Project Name
- Version
- Description
- Main File
- Scripts
- Dependencies
- Dev Dependencies
- Author
- License
*/

/*
Create package.json
*/

// Interactive
//npm init

// Default
//npm init -y

/*
------------------------------------------
Dependencies
------------------------------------------

Dependencies are packages required for the application to run.

Example:
*/

//npm install express

/*
Stored inside:

"dependencies": {}
*/

/*
------------------------------------------
Dev Dependencies
------------------------------------------

Development dependencies are required only during development.

Examples:

- nodemon
- eslint
- prettier
*/

//npm install --save-dev nodemon

/*
Stored inside:

"devDependencies": {}
*/

/*
------------------------------------------
Express.js
------------------------------------------

Express.js is a fast, lightweight, and flexible web framework
built on top of Node.js.

It simplifies building web servers and REST APIs.
*/

/*
Why Use Express?

- Less code
- Easy routing
- Middleware support
- Fast API development
- Better project structure
*/

/*
Features of Express.js

- Fast and lightweight
- Easy routing
- Middleware support
- REST API development
- Template Engine support
- Static file serving
- Error handling
- Database integration
*/

/*
Install Express
*/

//npm install express

/*
------------------------------------------
dotenv
------------------------------------------

dotenv loads environment variables from a .env file.
*/

//npm install dotenv

/*
Example (.env)

PORT=5000
DATABASE_URL=mysql://localhost:3306/mydb
*/

/*
Usage
*/

require("dotenv").config();

console.log(process.env.PORT);

/*
------------------------------------------
Nodemon
------------------------------------------

Nodemon automatically restarts the server whenever code changes.
*/

//npm install --save-dev nodemon

// Run with
//npx nodemon index.js

// package.json script
"scripts": {
  "dev": "nodemon index.js"
}

// Run
//npm run dev

/*
------------------------------------------
Node.js Project Structure
------------------------------------------

my-project/
│
├── node_modules/
├── package.json
├── package-lock.json
├── .env
├── .gitignore
├── index.js
└── routes/
*/

/*
------------------------------------------
Summary
------------------------------------------

Node.js     → JavaScript Runtime Environment
NPM         → Package Manager
package.json→ Project Configuration File
Dependencies→ Required to run the application
Dev Dependencies → Required during development
Express.js  → Web Framework
dotenv      → Environment Variable Manager
nodemon     → Auto-restarts the server
*/