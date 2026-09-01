const express = require("express");

const app = express();

app.use(express.json());

const usuarios = [
    {
        id: 1,
        nome: "Carlos"
    },
    {
        id: 2,
        nome: "Ana"
    }
];

app.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando com Jenkins"
    });
});

app.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios);
});

app.get("/status", (req, res) => {
    res.status(200).json({
        status: "online"
    });
});

module.exports = app;