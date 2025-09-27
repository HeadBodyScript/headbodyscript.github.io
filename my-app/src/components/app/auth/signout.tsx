// import { auth } from '@/config/firebase.config';
// import { signOut } from "firebase/auth";
// // import { cookies } from "next/headers";
// // import "../../../app/spinner.css";

//  export async function signOutUser() {
//  signOut(auth).then(async() => {
//   // (await cookies()).set('name', 'value', { maxAge: 0 })
//   // cookies().set("session", "", { expires: new Date(0) });
//   console.log('SIGN OUT SUCCESS')
//   // document.cookie = "session"+'=; Max-Age=-99999999;'; 
// }).catch((error) => {
//   // An error happened.
//   console.log('SIGN OUT ERROR:', error) 
// })};
import { cookies } from "next/headers";

export async function signoutUser() {


  // Create the session
  const expires = new Date(Date.now()); // 10 days
  // const session = await encrypt({ user, expires });

  // Save the session in a cookie
    // cookies().set("session", session, { expires, httpOnly: true });
    // (await cookies()).set("user0", JSON.stringify(user), { expires, httpOnly: true });
    (await cookies()).set("session", "session", { expires, httpOnly: true });
    console.log('SIGN OUT - COOKIE CLEARED')
    // document.cookie = `user0=`+JSON.stringify(user.proactiveRefresh.user);
}