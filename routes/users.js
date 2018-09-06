const express = require('express');
const router = express.Router();

router.get("", function (req,res) {

    res.send("Hello Users")
})

router.get("/register", function (req,res) {

    res.send("Welcome to Register")
})

module.exports = router;
