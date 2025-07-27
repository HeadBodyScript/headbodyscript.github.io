import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "project.env.NEXT_apiKey",
  authDomain: "project.env.NEXT_authDomain",
  databaseURL: "project.env.NEXT_databaseURL",
  projectId: "project.env.NEXT_projectId",
  storageBucket: "project.env.NEXT_storageBucket",
  messagingSenderId: "project.env.NEXT_messagingSenderId",
  appId: "project.env.NEXT_appId",
  measurementId: "project.env.NEXT_measurementId"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;