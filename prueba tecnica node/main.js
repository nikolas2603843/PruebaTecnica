const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appExpress = express();
const port = 3000;
const interest = require('./api-Interest/interest');

appExpress.use(cors());
appExpress.use(bodyParser.json());
appExpress.use('/api',interest);


const server = appExpress.listen(port, () => {
    console.log(`Servidor Express escuchando : ${port}`);
});



