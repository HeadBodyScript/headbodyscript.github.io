Variables = VAR_ + name
HTML ID = NAME[i] + ID
GetElement = name + object/what is the element
On divs innerhtml that run on INIT use INSERT + Name






Icon
Name
Health
Attack


Attack
Quick
Heavy

Dodge
Item:
    Health boost
    Damage boost


Withered Rose
1
20
2

Sky
2
18
2

Ellie
3

???
4


Tech-Girl
5

Vi
6

Dimitra
7
14
5

<!-- database -->
import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "dimi/config/firebase.config";


    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, `characters/`)).then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
        return snapshot.val()
      }
    )
    // console.log(snapshot)