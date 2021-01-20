$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyCVc4J5R1wJX96V3m495qZmHHaMnx_xKSI",
        authDomain: "vendingmachine-f9709.firebaseapp.com",
        databaseURL: "https://vendingmachine-f9709.firebaseio.com",
        projectId: "vendingmachine-f9709",
        storageBucket: "vendingmachine-f9709.appspot.com",
        messagingSenderId: "599808194350",
        appId: "1:599808194350:web:fa5814e8279dfb973bacbf",
        measurementId: "G-JWJW86LHEW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const messaging = firebase.messaging();
    messaging.requestPermission()
                .then(() => {
                    console.log('Permission successfully')
                    messaging.getToken({vapidKey: "BFkHBaN6jqoQMEhHfFWSsumAM80g3HHnD5cc-pZRLx7OE3lhm108w3RBg_1oN3u6__rwEnsodsa-HYhEW0TFsAg"})
                                .then((currentToken) => {
                                    if (currentToken) {
                                        console.log('currentToken', currentToken)
                                    } else {
                                    console.log('No registration token available. Request permission to generate one.');
                                    }
                                })
                                .catch((err) => {
                                    console.log('An error occurred while retrieving token. ', err);
                                });
                })
                .catch((err) => {
                    console.log('err', err)
                });

    messaging.onMessage(function(payload) {
        console.log('onMessage', payload)
    })
});