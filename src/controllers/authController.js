const express = require('express');
const bcrypt = require('bcryptjs');

//Modules
const logger = require('../modules/logger');
const validEmail = require('../modules/validEmail');
const jwtokenGenerate = require('../modules/generateJwt');

//Models
const User = require('../models/userModel');

//Router
const router = express.Router();


router.post('/register', async (req, res) => {

    try {
        const { email } = req.body;

        if (!validEmail.validate(email)) return res.status(400).send({ success: false, error: "Invalid Email!" });

        let userCheck = await User.findOne({ email: email });
        if (userCheck) return res.status(400).send({ success: false, error: "User already exists!" });

        const userCreate = await User.create(req.body);

        return res.status(201).send({ success: true, error: "User successfully registered!", token: jwtokenGenerate({ id: userCreate.id, email: userCreate.email, name: userCreate.name }) });
    } catch (err) {
        logger.error(err)

        return res.status(400).send({ success: false, error: "Registration failed!" });
    }
});

router.post('/authenticate', async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!validEmail.validate(email)) return res.status(400).send({ success: false, error: "Invalid Email!" });
        const userLogin = await User.findOne({ email }).select("+password");

        if (!userLogin) return res.status(400).send({ success: false, error: "User not found!" });

        if (!await bcrypt.compare(password, userLogin.password)) return res.status(400).send({ success: false, error: "Invalid password!" });

        userLogin.password = undefined;
        userLogin.__v = undefined;

        return res.status(201).send({ success: true, error: "Login successfully!", token: jwtokenGenerate({ id: userLogin.id, email: userLogin.email, name: userLogin.name }) });
    } catch (errorx) {
        return res.status(400).send({ success: false, error: 'Some parameter is missing or an internal error is occurring!' });
    }
});

module.exports = app => app.use('/auth', router);