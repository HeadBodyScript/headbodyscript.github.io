"use server"
// import { auth } from '@/config/firebase.config';
// import { signOut } from "firebase/auth";
// import { cookies } from "next/headers";
// import '@/app/spinner.css'

// export default async function signOutPage() {
//   // signOut
//   console.log('step 1');
//    signOut(auth).then(async() => {
//   console.log('step 2');
//     (await cookies()).set('session', 'value', { maxAge: 0 })
//     // cookies().set("session", "", { expires: new Date(0) });
//     console.log('SIGN OUT SUCCESS')
//     // document.cookie = "session"+'=; Max-Age=-99999999;'; 
//   }).catch((error) => {
//     // An error happened.
//     console.log('SIGN OUT ERROR:', error) 
//   })
//   console.log('step 3');

//   return (
//       <main className="center w-dvw h-dvh bg-neutral-300 text-black">
//         <div className='center column shadow p-10 rounded-lg bg-white'>
//           <h1 className="text-3xl text-grey ">
//             Signing Out
//           </h1>
//           <br />
//           <div className="parent">
//             <div className="div1"> </div>
//             <div className="div2"> </div>
//             <div className="div3"> </div>
//             <div className="div4"> </div>
//             <div className="div5"> </div>
//             <div className="div6"> </div>
//             <div className="div7"> </div>
//             <div className="div8"> </div>
//           </div>
//         </div>
//       </main>
//   );
// }

// "use server"
import { auth } from '@/config/firebase.config';
import { signOut } from "firebase/auth";
import { cookies } from "next/headers";
import '@/app/spinner.css'
import { signoutUser } from '@/components/app/auth/signout';

export default async function signOutPage() {

  signoutUser();
  // // signOut
  // console.log('step 1');
  //  signOut(auth).then(async() => {
  // console.log('step 2');
    // (await cookies()).set('session', 'value', { maxAge: 0 })
    // cookies().set("session", "", { expires: new Date(0) });
  //   console.log('SIGN OUT SUCCESS')
    // document.cookie = "session"+'=; Max-Age=-99999999;'; 
  // }).catch((error) => {
  //   // An error happened.
  //   console.log('SIGN OUT ERROR:', error) 
  // })
  // console.log('step 3');

  return (
      <main className="center w-dvw h-dvh bg-neutral-300 text-black">
        <div className='center column shadow p-10 rounded-lg bg-white'>
          <h1 className="text-3xl text-grey ">
            Signing Out
          </h1>
          <br />
          <div className="parent">
            <div className="div1"> </div>
            <div className="div2"> </div>
            <div className="div3"> </div>
            <div className="div4"> </div>
            <div className="div5"> </div>
            <div className="div6"> </div>
            <div className="div7"> </div>
            <div className="div8"> </div>
          </div>
        </div>
      </main>
  );
}
