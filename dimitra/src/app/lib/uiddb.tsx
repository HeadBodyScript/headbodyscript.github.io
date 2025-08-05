// "use client"
// import { useState, useEffect } from 'react';
import { getAuth,signOut } from 'firebase/auth';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "dimi/config/firebase.config";

export default function Uiddb(id: string) {


;

      console.log(id)

            console.log("mew")
            const dbRef = ref(getDatabase(app));
            const meow = get(child(dbRef, `users/${id[0]?.uid}`)).then((snapshot) => {
                // console.log(snapshot.val())
                // const meow = snapshot.val()
            }
        )
        return meow

}
