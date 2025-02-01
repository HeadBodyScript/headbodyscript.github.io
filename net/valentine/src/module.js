import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyB7q3xgnjvk_U0qfEBFMSkf4enrQ4P2M6E",
  authDomain: "leet-handbook.firebaseapp.com",
  projectId: "leet-handbook",
  storageBucket: "leet-handbook.appspot.com",
  messagingSenderId: "616773243997",
  appId: "1:616773243997:web:d6dbdc4a5fc059b5f269b4",
  measurementId: "G-7LDFYJJD34"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



var thisOnePlease1ID = document.getElementById('thisOnePlease1ID')
thisOnePlease1ID.addEventListener('click', thisOnePlease1)
async function thisOnePlease1(){

    await setDoc(doc(db, "BUNNY", "ID"), {
        type: "1"
    });
    window.location.href = 'success.html';

}
var thisOnePlease2ID = document.getElementById('thisOnePlease2ID')
thisOnePlease2ID.addEventListener('click', thisOnePlease2)
async function thisOnePlease2(){

    await setDoc(doc(db, "BUNNY", "ID"), {
        type: "2"
    });
    window.location.href = 'success.html';

}
var thisOnePlease3ID = document.getElementById('thisOnePlease3ID')
thisOnePlease3ID.addEventListener('click', thisOnePlease3)
async function thisOnePlease3(){

    await setDoc(doc(db, "BUNNY", "ID"), {
        type: "3"
    });
    window.location.href = 'success.html';

}
var thisOnePlease4ID = document.getElementById('thisOnePlease4ID')
thisOnePlease4ID.addEventListener('click', thisOnePlease4)
async function thisOnePlease4(){

    await setDoc(doc(db, "BUNNY", "ID"), {
        type: "4"
    });
    window.location.href = 'success.html';

}