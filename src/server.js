const express = require("express");
const path = require("path");
const { Client } = require("pg");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Maybe work out another solution for this before hosting
  next();
});

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Arsenal@25",
  database: "pokemon-team",
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

let rows = [];
let error = [];

app.get("/api/signIn", async (req, res) => {
  client.query(`SELECT * FROM users;`, (err, res) => {
    if (!err) {
      rows = res.rows;
    } else {
      console.log(err.message);
      error = err.message;
    }
  });

  if (rows !== []) {
    res.status(200).send(rows);
  } else {
    res.status(400).send(error);
  }
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Up and running on ${port}`);
});
