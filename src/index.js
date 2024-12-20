const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());

const port = 4002;
server.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})



