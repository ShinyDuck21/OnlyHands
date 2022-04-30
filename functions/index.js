const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Work')
})

exports.app = functions.https.onRequest(app);