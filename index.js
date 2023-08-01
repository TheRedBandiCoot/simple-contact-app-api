const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data.json');
const serverless = require('serverless-http');

app.use(cors());

app.get('/', (req, res) => {
  res.send(
    `<h3 style="color:#777; display:inline-block">API for simple <i style="text-decoration:underline">contact with react</i> project path : </h3>  <a href="/api/users">${'/api/users'.toUpperCase()}</a>`
  );
});

app.get('/api/users', (req, res) => {
  res.send(data);
});

module.exports.handler = serverless(app);
