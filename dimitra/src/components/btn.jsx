"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { getAuth, signInWithRedirect, signInWithPopup , GithubAuthProvider } from "firebase/auth";
import app from "dimi/components/firebase";
const Btn = () => {
  
  const provider = new GithubAuthProvider();
  
  const auth = getAuth(app);
  const { data: session } = useSession();

  function signInWithGitHub(){
    signInWithPopup(auth, provider)
    .then((credentials) => {
        const credential = GithubAuthProvider.credentialFromResult(credentials);
        const token = credential.accessToken;
        const user = credentials.user;
        localStorage.setItem("user-credential", JSON.stringify(credential));
        localStorage.setItem("user-token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userCheck", "true")
        console.log(credentials)
        console.log(credentials.uid)
        // userResetCredentials(credentials.user.uid)
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

  return (
    <div className="btn">
      {session ? (
        <>
          <p>Signed in as {session?.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
          <button onClick={() => signInWithRedirect(auth, provider)} >redirect</button>
        </>
      ) : (
        <>
                  <button onClick={() => signInWithGitHub(auth, provider)} >redirect</button>

                <button onClick={() => signIn()} type="button" id="IDuserGoogle" className="gsi-material-button">
                  <div className="gsi-material-button-state"></div>
                  <div className="gsi-material-button-content-wrapper">
                    <div className="gsi-material-button-icon">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </svg>
                    </div>
                    <span className="gsi-material-button-contents">Continue with Google</span>
                  </div>
                </button>
        </>
      )}
    </div>
  );
}

export default Btn;