// Firebase scripts for background running
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Aapka Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbHdnVt9ST7vbJpEA1B8f76FglZo5zfav",
    authDomain: "real-astro-c8d6e.firebaseapp.com",
    projectId: "real-astro-c8d6e",
    storageBucket: "real-astro-c8d6e.appspot.com",
    messagingSenderId: "972015683245",
    appId: "1-972015683245-web:f4279a5b783d923of3a824"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background me notification aane par kya dikhana hai
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'acharya.png', // Yeh notification me Acharya ji ki photo dikhayega
        badge: 'acharya.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
