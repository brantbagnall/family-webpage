const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    port = 3005;

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(cors());






app.listen(port, ()=> console.log('Listening on port: ' + port + ', Start Date: ' + Date(Date.now())));