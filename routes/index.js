const express = require('express');
const fcm = require("../lib/fcm-module");
const index = express();

index.post('/ind', (req, res) => {
    res.send("ok")
})

index.post('/oneDevice', (req, res) => {
    fcm.messagingOneDevice(req.body.registrationToken, req.body.payload)
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(error)
        })
})

index.post('/multiDevices', (req, res) => {
    res.send(req.body.registrationToken)
    // fcm.messagingMultiDevice()
    //     .then((result) => {
            
    //     })
    //     .catch((error) => {
            
    //     })
})

index.post('/topic', (req, res) => {
    fcm.messagingTopic()
        .then((result) => {
            
        })
        .catch((error) => {
            
        })
})

index.post('/multiMess', (req, res) => {
    fcm.messagingMultiMess()
        .then((result) => {
            
        })
        .catch((error) => {
            
        })
})

module.exports = index