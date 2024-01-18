const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appExpress = express();
const port = 3000;
const interest = require('./api-Interest/interest');

/**
 * cors para seguridad 
 */
appExpress.use(cors());
/**
 * ayuda a extraer la data del cuerpo en la peticion http
 */
appExpress.use(bodyParser.json());
/**
 * hace uso del api de interest para que pueda ser usada
 */
appExpress.use('/api',interest);


const server = appExpress.listen(port, () => {
    console.log(`Servidor Express escuchando : ${port}`);
});



