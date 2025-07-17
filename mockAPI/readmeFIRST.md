# 📦 Express Mock API

This is a basic mock REST API built with **Node.js** and **Express.js** that stores and serves user data from a local `MOCK_DATA.json` file.

disclaimer: 
    cloning/download this code will get you a package.json, to work just run the command  "npm i" to install dependencies as mentioned in package.json

---

## 📁 Folder Structure
```bash
your-project-name/
├── MOCK_DATA.json # Contains JSON user data
├── .env # Environment variables (e.g. PORT)
├── index.js # Main server code
├── package.json
└── readmeFIRST.md # This file
```

### steps to create

### 1. Initialize the project

```bash
npm init -y
```

### 2. Install the required Packages and dev dependencies

```bash
npm install express dotenv

npm install --save-dev nodemon
```

### 3. Add define the moduling system in package.json and write scripts

```bash
package.json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
}
```

### 4. Create a file named .env and add:

```bash
PORT=3000
```

### 4. create the file index.js and write

```bash
//1.1 import the required modules

import express from "express";
import dotenv from "dotenv";
import fs from "fs/promises";

// 1.2 load the environment variables
dotenv.config();

// 1.3 create an express app
const app = express();


//1.4 add middleware support parsing incoming requests
app.use(express.json());  // parses incoming json request ie whose content-type in headers is set to 'application/json'
app.use(express.urlencoded({ extended: true })); //parses URL-encoded form data from HTML

// 1.5 setting up the port 
const port = process.env.PORT || 3000;


// 1.6  starting up the server
app.listen(port, () => {
    console.log("server started at PORT", port)
})

```
