const admin = require("firebase-admin");
const {google} = require('googleapis');
const serviceAccount = require("../vendingmachine-f9709-firebase-adminsdk-n8hns-a8226448fc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vendingmachine-f9709.firebaseio.com"
});

const messagingOneDevice = function (registrationToken, payload) {  
    return new Promise((resolve, reject) => {
        var message = {
            data: payload,
            token: registrationToken
        };
        admin.messaging().send(message)
                            .then((response) => {
                                resolve(response);
                            })
                            .catch((error) => {
                                reject(error);
                            });
    })
}

const messagingMultiDevice = function (registrationToken = [], payload) {  
    return new Promise((resolve, reject) => {
        var message = {
            data: payload,
            token: registrationToken = []
        };
        admin.messaging().sendMulticast(message)
                            .then((response) => {
                                resolve(response);
                            })
                            .catch((error) => {
                                reject(error);
                            });
    })
}

const messagingTopic = function (topic, payload) {  
    return new Promise((resolve, reject) => {
        var message = {
            data: payload,
            topic: topic
        };
        admin.messaging().send(message)
                            .then((response) => {
                                resolve(response);
                            })
                            .catch((error) => {
                                reject(error);
                            });
    })
}

const messagingMultiMess = function (topic, payload = []) {  
    return new Promise((resolve, reject) => {
        const messages = [];
        for (idx in payload) {
            messages.push(idx)
        }
        admin.messaging().sendAll(messages)
                            .then((response) => {
                                resolve(response);
                            });
    })
}

module.exports = {
    messagingOneDevice,
    messagingMultiDevice,
    messagingTopic,
    messagingMultiMess
}