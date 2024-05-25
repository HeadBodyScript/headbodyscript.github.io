// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// import { initializeApp } from "firebase/app";
// import { GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6i1H967AaI7mmIh8DvAR_GRI3U6O3qdA",
  authDomain: "headbodyscript.firebaseapp.com",
  projectId: "headbodyscript",
  storageBucket: "headbodyscript.appspot.com",
  messagingSenderId: "561751453459",
  appId: "1:561751453459:web:8daaf437c21f3841cff4e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GithubAuthProvider();
const auth = getAuth();

github.addEventListener('click', githubLogin)
function githubLogin(){
    // var auth was here <-
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("test")
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential)
        console.log(token)

        // This one is the one you want "user.uid" "user.providerData[0].displayName" ".providerData[0].photoURL"
        console.log(user)

        localStorage.setItem("user-credential", JSON.stringify(credential));
        localStorage.setItem("user-token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        document.getElementById("user-icon").src=user.providerData[0].photoURL;

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
}

// check
object.onload = function(){
  let userCreds = JSON.parse(localStorage.getItem("user"));
  document.getElementById("user-icon").src=user.providerData[0].photoURL;

};


userLogout.addEventListener('click', logout)
function logout(){
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}