const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const server = express();

require("dotenv").config();

server.use(cors());
server.use(express.json());

async function getDBConnection() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD_DB,
        database: "apariv"
    });
    connection.connect();
    return connection;
}

const port = 4002;
server.listen(port, () => {
})

server.post("/api/dogs", async (req, res) => {
    console.log(req.body);
    const { name, breed, DOB, behaviour } = req.body;
    if (!name || !breed || !DOB || !behaviour) {
        res.status(400).json({
            success: false,
            message: "Missing fields. Please fill them"
         })
    } else {
        const connection = await getDBConnection();
        const query = "INSERT INTO dogs(name, breed, DOB, behaviour) VALUES (?, ?, ?, ?)";
        const [result] = await connection.query(query, [name, breed, DOB, behaviour]);
        connection.end();
        res.status(201).json({
            success: true,
            id: result.insertId 
        });
    }
})

server.get("/api/dogs", async (req, res) => {
    const connection = await getDBConnection();
    const query = "SELECT * FROM dogs";
    const [result] = await connection.query(query);
    connection.end();
    res.status(200).json({
        info: { count: result.length },
        results: result
    })
})

server.patch("/api/dogs/:id", async (req, res) => {
    const id = req.params.id;
    const { name, breed, DOB, behaviour, fk_adopter } = req.body;
    const connection = await getDBConnection();

    let query = "UPDATE dogs SET";
    const params = [];

    if (name){ 
        query = query + " name = ?,"
        params.push(name)
    }
    if (breed){ 
        query = query + " breed = ?,"
        params.push(breed)
    }
    if (DOB){ 
        query = query + " DOB = ?,"
        params.push(DOB)
    }
    if (behaviour){ 
        query = query + " behaviour = ?,"
        params.push(behaviour)
    }
    if (fk_adopter){ 
        query = query + " fk_adopter = ?"
        params.push(fk_adopter)
    }
    query = query + " WHERE id = ?;"

    params.push(req.params.id)
    const [result] = await connection.query(query, params);
    connection.end();
    res.status(200).json({ success: true });
})

server.delete("/api/dogs/:id", async (req, res) => {
    const connection = await getDBConnection();
    const query = "DELETE from dogs WHERE id = ?";
    const [result] = await connection.query(query, [req.params.id]);
    res.status(200).json({ success: true });
})





