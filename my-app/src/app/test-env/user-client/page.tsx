"use client"
import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/config/firebase.config";
export default function Home() {

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid)
    console.log("if")
    document.cookie = `user=${uid}`;
    // ...
  } else {
    console.log("else")
    // User is signed out
    // ...
  }
});
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  );
}
