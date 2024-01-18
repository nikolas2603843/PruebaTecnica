/**
 * para las rutas y poder darle funcionalidad a los servicios
 */
const express = require('express');
/**
 * obtiene la informacion de la pagina web
 */
const axios = require('axios');
/**
 * el que nos ayuda con el web scraping
 */
const cheerio = require('cheerio');

const router = express.Router();

router.get('/interest/:plazo/:monto', async (req, res) => {
    try {
        /**
         * optiene los path params 
         */
        const plazo = req.params.plazo;
        const monto = req.params.monto;
        /**
         * web scaping
         */
        const link = 'https://www.larepublica.co/indicadores-economicos/bancos/tasa-de-usura';
        const response = await axios.get(link);
        const infoHtml = response.data;
        const $ = cheerio.load(infoHtml);
        const idEtiquetaPrincipal = $('#vue-container > div.InternaIndicadores > div > div.flex-grow-1.wrapContentBody > div > div > div.grid-container > div > div > div.d-flex.CardDetailIndicator.multiple > div > div:nth-child(1) > div.priceIndicator.down > div > div.flex-grow-1 > span.price ');
        const usuryText = idEtiquetaPrincipal.text().trim();
        const usuryNumber = usuryText.replace(',', '.').replace('%', '');
        const rate = parseFloat(usuryNumber);
        /**
         * objeto json a retornar
         */
        const interestJSON = {
            usuryRate: (monto*rate*plazo)/100,
            rate:rate
        }
        /**
         * retorno de objeto json
         */
        return res.status(200).json(interestJSON)
    } catch (error) {
        return res.status(500).json({ error: 'Todo ha fallado exitosamente' });
    }
});

/**
 * exportacion del modulo
 */
module.exports = router;

