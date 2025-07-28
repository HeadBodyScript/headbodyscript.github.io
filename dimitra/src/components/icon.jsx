"use client"
import { useSession } from "next-auth/react";
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from "dimi/components/firebase";

const Icon = () => {
    // const { data: session } = useSession();
    // console.log(session);


    const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  // console.log(loading);
  // console.log(error);
  // console.log(user);
  
    console.log(user, loading, error);
    console.log("mew")
    return (
      <div>
        {!user && 
          <img className="size-10 object-cover" 
          src="https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/static/img/404-img.webp"
          alt="" />
        }
        {user && 
          <img className="size-10 object-cover" 
          src={user.providerData[0].photoURL}
          alt="" />
        }
      </div>
    );
    
  
}

export default Icon;