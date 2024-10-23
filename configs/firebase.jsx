// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1OgdFdT9Edtc_sPsB7vbULIFGRBQ6znY",
    authDomain: "aicourse-2e286.firebaseapp.com",
    projectId: "aicourse-2e286",
    storageBucket: "aicourse-2e286.appspot.com",
    messagingSenderId: "706621057697",
    appId: "1:706621057697:web:f9597e852f127121875ee0",
    measurementId: "G-Y0Z87KB3GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)