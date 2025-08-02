
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//     apiKey: process.env.api_key,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId,
//     measurementId: process.env.measurementId
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app


// 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const clientCredentials = {
    apiKey: process.env.api_key,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

const app = initializeApp(clientCredentials);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

const postsCollection = collection(db, "posts");
const commentsCollection = collection(db, "comments");
const usersCollection = collection(db, "users");

export {
  auth,
  app,
  db,
  storage,
  postsCollection,
  commentsCollection,
  usersCollection,
};