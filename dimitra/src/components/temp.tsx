"use client"
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
console.log("cleint" + user)
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
  console.log(displayName)
  console.log(uid)
}
// User.getToken()


const Meow = () => {
 return (
      <div>
      </div>
  )
}
export default Meow;