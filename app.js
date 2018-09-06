const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const user = require('./routes/users');
const mongoose = require('mongoose');


app.use(express.static(path.join( __dirname, "public")));

app.listen(port, function () {

    console.log("Listening to Port "+port);
});

app.get("/", function (req,res) {

    res.send("Hello World")
})

app.use('/user', user);