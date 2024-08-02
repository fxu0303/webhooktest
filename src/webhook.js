'use strict';

const config = require('../config.json')
const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json()); // creates http server
let token = config.token;

app.get('/', (req, res) => {
    if (req.query.token !== token) {
        return res.sendStatus(401);
    }
    return res.end(req.query.challenge);
});

app.post('/', (req, res) => {
    if (req.query.token !== token) {
        return res.sendStatus(401);
    }
    console.log(JSON.stringify(req.body))
    return res.end(`Received webhook: ${JSON.stringify(req.body)}`);
});

app.listen(80, () => console.log('Webhook is listening'));