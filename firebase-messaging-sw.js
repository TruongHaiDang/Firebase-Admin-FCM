importScripts (' https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js ');
importScripts (' https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js ');

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

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = "Hai Dang";
    const options = {
        body: payload.data.status
    }
    return self.registration.showNotification(title, options)
})