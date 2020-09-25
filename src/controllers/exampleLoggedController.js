const express = require('express');

//Middlewares auth
const authMiddleware = require('../middlewares/authMiddleware');

//Router
const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    res.send({ok:"ok"})

});

module.exports = app => app.use('/panel', router);