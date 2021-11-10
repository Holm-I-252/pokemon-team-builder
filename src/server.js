const express = require("express");
const axios = require("axios");
const path = require("path");
const { Client } = require("pg");

const app = express();

app.use(express.json());

const client = new Client({
  host: "ec2-107-20-127-127.compute-1.amazonaws.com",
  user: "cztcbltljuswke",
  port: 5432,
  password: "8d7321da5a384eff4ddc288cb5c01763e343a085974c6cce90916347518cae51",
  database: "dk5or80r8sd7n",
});

client.connect();

app.get("/api/signIn", (req, res) => {
  console.log("hit");
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Up and running on ${port}`);
});
