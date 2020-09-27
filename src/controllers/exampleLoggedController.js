const express = require('express');

//Middlewares auth
const authMiddleware = require('../middlewares/authMiddleware');

//Router
const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    res.send({id: req.userId,username: req.userName, email: req.userEmail})

});

module.exports = app => app.use('/panel', router);