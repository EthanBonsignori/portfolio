require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('./permissions.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL,
});

module.exports = admin.firestore();
