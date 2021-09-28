var express = require("express");

var app = express();

//test/1234
//sample
app.use("/test", (req, res, next) => {
    console.log("I'm test");
    res.send("This is test");
    //next();
});

app.use("/", (req, res, next) => {
    console.log(req.path);
    //res.send("This is main");
    res.json({result: 0, msg: 'SUCCESS'});
});






app.listen(1400);