var express = require("express");

var controller = require("mdController");

var app = express();

app.use((request, response, next) => {
    console.log();

    next();
});

app.post("/login", controller.login);

app.use((request, response) => {
    response.status(404).send("Not Found");
});

app.listen(1400);
