const express = require('express');
const app = express();

//grabbing components:
const index = './index.html';
const contact = './contact-me.html';
const about = './about.html';
const notFound = './404.html';

app.get('/', (req, res) => {
    res.send(index);
});

app.get('/contact-me', (req, res) => {
    res.send(contact);
});

app.get('/about', (req, res) => {
    res.send(about);
});

app.get('/404', (req, res) => {
    res.send(404);
});

app.listen(8000, () => {
    console.log(`We're Connected!`);
});