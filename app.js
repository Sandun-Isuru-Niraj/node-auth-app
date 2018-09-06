const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const user = require('./routes/users');
const mongoose = require('mongoose');
const config = require("./config/database");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const conn = mongoose.connect(config.database);

if(conn){
    console.log("Database Connected")
}else {
    console.log("errror")
}

app.use(express.static(path.join( __dirname, "public")));

app.listen(port, function () {

    console.log("Listening to Port "+port);
});

app.get("/", function (req,res) {

    res.send("Hello World")
})

app.use('/user', user);