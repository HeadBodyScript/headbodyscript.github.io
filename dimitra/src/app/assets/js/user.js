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
const providerGitHub = new GithubAuthProvider();
const providerGoogle = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);
IDuserRegister.addEventListener('click', userRegister)
function userRegister(){
    let userNameRegister = document.getElementById('userNameRegister');
    let userEmailRegister = document.getElementById('userEmailRegister');
    let userPasswordRegister = document.getElementById('userPasswordRegister');
    createUserWithEmailAndPassword(auth, userEmailRegister.value, userPasswordRegister.value)
    .then((credentials) => {
        const user = credentials.user;
        userLoginClose()
        userResetCredentials(credentials.user.uid)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
IDuserLogin.addEventListener('click', userLogin)
function userLogin(){
    let userEmailLogin = document.getElementById('userEmailLogin');
    let userPasswordLogin = document.getElementById('userPasswordLogin');
    signInWithEmailAndPassword(auth, userEmailLogin.value, userPasswordLogin.value)
    .then((credentials) => {
        const user = credentials.user;
        userLoginClose()
        userResetCredentials(credentials.user.uid)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
IDuserGitHub.addEventListener('click', userLoginGitHub)
IDuserGitHub0.addEventListener('click', userLoginGitHub)
function userLoginGitHub(){
    signInWithPopup(auth, providerGitHub)
    .then((credentials) => {
        const credential = GithubAuthProvider.credentialFromResult(credentials);
        const token = credential.accessToken;
        const user = credentials.user;
        localStorage.setItem("user-credential", JSON.stringify(credential));
        localStorage.setItem("user-token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userCheck", "true")
        userLoginClose()
        console.log(credentials)
        console.log(credentials.uid)
        userResetCredentials(credentials.user.uid)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log("Code " + errorCode)
        console.log("Email " + errorMessage)
        console.log("More email " + email)
    });
}
IDuserGoogle.addEventListener('click', userLoginGoogle)
IDuserGoogle0.addEventListener('click', userLoginGoogle)
function userLoginGoogle(){
    signInWithPopup(auth, providerGoogle)
    .then((credentials) => {
        const user = credentials.user;
        localStorage.setItem("user", JSON.stringify(user));
        userResetCredentials(credentials.user.uid)
        userLoginClose()
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log("Code " + errorCode)
        console.log("Email " + errorMessage)
        console.log("More email " + email)
    });
}
function checkUser(){
    if ("true" == localStorage.getItem("userCheck")){
        var credentials = JSON.parse(localStorage.getItem("user"))
        userResetCredentials(credentials.uid)
        var edit=document.getElementById("app");"false"==(localStorage.getItem("userCheck"))?edit.setAttribute("userCheck", "false"):edit.setAttribute("userCheck", "true")
    }
}
checkUser()
async function userResetCredentials(credentials){
    const docRef = doc(db, credentials, "user");
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        console.log("Document data:", docSnap.data());
        document.getElementById("displayUserID").innerHTML=docSnap.data().name;
        drawCircle('#555555', options.lineWidth, docSnap.data().experience / 100);
        document.getElementById("perc").innerHTML= docSnap.data().experience + "%";
        document.getElementById("displayLevel").innerHTML="LVL" + docSnap.data().level;
    }else{
        console.log("No such document!");
        await setDoc(doc(db, credentials, "user"), {
            name: "HeadBodyScript",
            level:"1",
            experience: "0"
        });
    }
}
displayUserID.addEventListener('click', userLogout)
function userLogout(){
    signOut(auth).then(() => {
        drawCircle('#555555', options.lineWidth, 0 / 100);
        drawCircle('#efefef', options.lineWidth, 100 / 100);
        document.getElementById("perc").innerHTML= 0 + "%";
        document.getElementById("displayLevel").innerHTML="LVL 0";
        localStorage.removeItem("user");
        localStorage.removeItem("user-credential");
        localStorage.removeItem("user-token");
        localStorage.setItem("userCheck", "false")
        var edit=document.getElementById("app");"false"==(localStorage.getItem("userCheck"))?edit.setAttribute("userCheck", "false"):edit.setAttribute("userCheck", "true")
        document.getElementById("displayUserID").innerHTML="";
      }).catch((error) => {
        console.log("check failed")
        console.log(error)
    });
}