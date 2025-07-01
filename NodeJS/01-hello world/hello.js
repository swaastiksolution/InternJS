console.log("hello world!!");

/*
 * Node js is javascript server-side run environment can interact with OS, file system and database, etc.
 * Web have globals like window and document similarily NodeJS has its own set of globals (refer globals.js)
 * web global variables are exclusive to chrome ie document and Window don't exist in NodeJS
*/


// NPM -> Node Package Manager used to add/delete/upgrade dependencies for your projects

// use command `npm init` to initialize a new node js project
// use `npm init -y`  -y flag to use all defaults

// npm init creates a package.json file
//package.json is a critical file used in Node.js projects. It serves as the manifest file that defines the metadata, dependencies, and scripts needed to manage and run a project.

// {
//   "name": "my-app",                              -> Name of the project must be URL friendly
//   "version": "1.0.0",                            -> current version
//   "description": "A simple Node.js app",
//   "main": "index.js",                            -> entry point of your project
//   "scripts": {                                   -> CLI scripts to intreact with your project
//     "start": "node index.js",
//     "test": "jest"
//   },
//   "author": "Your Name",
//   "license": "MIT",
//   "dependencies": {                              -> packages required to run your project in production
//     "express": "^4.18.2"
//   },
//   "devDependencies": {                           -> packages needed only during the development/testing phase
//     "jest": "^29.0.0"
//   }
// }


//BONUS fields
// | Field          | Use                                    |
// | -------------- | -------------------------------------- |
// | **engines**    | Specifies compatible Node.js versions. |
// | **repository** | Link to source code repo.              |
// | **keywords**   | Search terms for npm registry.         |
// | **bugs**       | Where to report issues (URL or email). |
// | **homepage**   | Project website or landing page.       |





//  Common Commands Using package.json
// npm install: Installs all dependencies listed in your projects package.json .

// npm install < package >: Adds a package to dependencies.
//eg  `npm install express` or `npm i cors`

// npm install --save-dev <package>: Adds a package to devDependencies.
//eg npm i --save-dev nodemon

// npm run start: Runs the start script.

// npm test: Runs the test script(or anything defined as "test" in scripts).