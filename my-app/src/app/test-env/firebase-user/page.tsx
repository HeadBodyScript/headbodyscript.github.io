// import { signInWithPopup , GithubAuthProvider, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth, app } from '@/config/firebase.config';
import { getAuth, updateProfile } from "firebase/auth";

export default async function Home() {
  // const email = "headbodyscript@gmail.com"
  // console.log('auth', auth)
// const auth = getAuth();
// const user = auth.currentUser;
// console.log('user', user)
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });
  return (
    <>

    </>
  );
}
