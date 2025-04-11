import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6i1H967AaI7mmIh8DvAR_GRI3U6O3qdA",
  authDomain: "headbodyscript.firebaseapp.com",
  databaseURL: "https://headbodyscript-default-rtdb.firebaseio.com",
  projectId: "headbodyscript",
  storageBucket: "headbodyscript.appspot.com",
  messagingSenderId: "561751453459",
  appId: "1:561751453459:web:8daaf437c21f3841cff4e6",
  measurementId: "G-LKY12PWXSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase Analytics initialized successfully.");