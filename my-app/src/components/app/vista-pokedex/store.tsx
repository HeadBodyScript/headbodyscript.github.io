"use client"
import { SessionProviderProps} from "next-auth/react";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "@/config/firebase.config";

interface NavbarProps {
   userCookie: any;
}

const DisplayStore = ({userCookie}: NavbarProps, {children}: SessionProviderProps) => {


const fetcher = async () => {
      // console.log(userCookie)
      // console.log(children[0].props)
      // console.log(children[0].props.value)
        // const dbRef = ref(getDatabase(app));
        // const item = await get(child(dbRef, `characters/${children[0].props.value}`)).then((snapshot) => {
        //     if (snapshot.exists()) {
        //       // console.log(snapshot.val());
        //     } else {
        //       console.log("No data available");
        //     }
        //     return snapshot.val()
        //   }
        // )
        // console.log(item)
        // const UserStuff = await get(child(dbRef, `users/${userCookie.uid ?? 0}`)).then((snapshot) => {
        //     if (snapshot.exists()) {
        //       // console.log(snapshot.val());
        //     } else {
        //       console.log("No data available");
        //     }
        //     return snapshot.val()
        //   }
        // )
// check what id is clicked, check if price < currency
    
  };
  return (
      <button type="button" onClick={() => { fetcher(); console.log("Buy") }} className="bg-white flex row rounded-lg shadow w-full items-start h-full">
        {children}
      </button>
  )
}
export default DisplayStore;