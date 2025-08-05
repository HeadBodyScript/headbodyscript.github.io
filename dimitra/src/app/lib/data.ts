import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "dimi/config/firebase.config";

export async function getUser(id: string) {
//   var res = await fetch(`https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/${id}/src/app/vista/pages/data.json`)
//   return res.json();

    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, `${id}/`)).then((snapshot) => {
        if (snapshot.exists()) {
        //   console.log(snapshot.val());
                  return snapshot.val()
        } else {
          console.log("No data available");
        }
        return snapshot.val()
      }
    )
    // console.log(snapshot)
    return snapshot
}
