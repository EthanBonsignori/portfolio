const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors({ origin: true }));
app.use('/api', routes);

exports.app = functions.https.onRequest(app);
