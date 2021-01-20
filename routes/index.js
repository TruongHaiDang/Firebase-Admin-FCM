const express = require('express');
var admin = require("firebase-admin");
var serviceAccount = require("../vendingmachine-f9709-firebase-adminsdk-n8hns-a8226448fc.json");
const index = express();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vendingmachine-f9709.firebaseio.com"
});

index.post('/ind', (req, res) => {
    res.send("ok")
})

module.exports = index