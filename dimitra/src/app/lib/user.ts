"use client"
import { getAuth,signOut } from 'firebase/auth';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { app } from "dimi/config/firebase.config";

export async function getUserData() {

      const auth = getAuth(app);
      const user = useAuthState(auth);

    return user
}