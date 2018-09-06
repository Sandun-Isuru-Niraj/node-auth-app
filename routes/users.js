const express = require('express');
const router = express.Router();

router.get("", function (req,res) {

    res.send("Hello Users")
})

router.post("/register", function (req,res) {

   console.log(req.body)

})

router.get("/login", function (req,res) {

    res.send("Welcome to Register")
})

module.exports = router;
