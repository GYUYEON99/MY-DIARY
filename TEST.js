var express = require('express');

var app = express();

app.use("/test", (req, res, next) => {
    console.log("I'm test");
    res.send("This is a  test1");

});

router.get('/test', (request, response) => {
    response.json({'result':0 , msg:'SUCCESS'});
});

// this is..

app.listen(1400);

    
