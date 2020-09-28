const { SSL_OP_SINGLE_DH_USE } = require('constants');
const express = require('express');
const path = require('path');
const { DEFAULT_ECDH_CURVE } = require('tls');
const app = express();

//grabbing components:
// const index = require('./index.html');
// const contact = require('./contact-me.html');
// const about = require('./about.html');
// const notFound = require('./404.html');

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../first_app')
    });
});



app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', {
        root: path.join(__dirname, '../first_app')
    });
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', {
        root: path.join(__dirname, '../first_app')
    });
});

app.get('/404', (req, res) => {
    res.sendFile('404.html', {
        root: path.join(__dirname, '../first_app')
    });
});

app.listen(8000, () => {
    console.log(`We're Connected!`);
});