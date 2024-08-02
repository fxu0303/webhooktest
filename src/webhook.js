'use strict';



const express = require('express');

const bodyParser = require('body-parser');

const app = express().use(bodyParser.json()); // creates http server

const token = 'VERIFICATION_TOKEN'; // type your verification token here

app.get('/webhook', (req, res) => {
    if (req.query.token !== token) {
        return res.sendStatus(401); // if not, return unauthorized error
    }
    // return challenge
    return res.end(req.query.challenge);
});

app.post('/webhook', (req, res) => {
    if (req.query.token !== token) {
        return res.sendStatus(401); // if not, return unauthorized error
    }
    return res.end(`Received webhook: ${JSON.stringify(req.body)}`);
});

// app.listen() part should always be located in the last line of your code

app.listen(3000, () => console.log('Webhook is listening'));