const express = ("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const user = require("../models/user");

router.post("/signup", (req, res, next) =>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
    const newUser = user({
        email: req.body.email,
        password: hash
        });
        user.save()
        .then(result =>{
            res.status(201).json({
                message: "User Created",
                result: result
            });
        });
    }).catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;