const logger = require('./modules/logger.js');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    res.json({name: "JVinicius API", version: "1.0.0"});
});

require('./controllers')(app);

// Handle 404
app.use(function(req, res, next) {
    res.removeHeader("X-Powered-By");
    if(res.status(404)) {
        return res.status(404).send({success:false, error: `Controller not found!`});
    }
});

app.listen(process.env.PORT, (err)=>{
    if(err)
        logger.error(err);
    else
        logger.success(`Servidor iniciado na porta ${process.env.PORT}`);
});
