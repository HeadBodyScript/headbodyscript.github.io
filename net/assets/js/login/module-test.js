import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://headbodyscript-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeUserData() {
    var uuid = JSON.parse(localStorage.getItem("user"));

    console.log(uuid)
    const db = getDatabase();
    set(ref(db, 'users/' + uuid.uid), {
      username: "Cyan",
      meow: "mew",
      new: "new"
    });
  }

  writeUserData()

// var meoow = localStorage.getItem