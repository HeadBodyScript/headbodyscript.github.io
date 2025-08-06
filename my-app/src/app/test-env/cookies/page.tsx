import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "@/config/firebase.config"
;import { cookies } from 'next/headers'
import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'
export default async function Home() {
    const cookieStore = await cookies()
    const user0 = cookieStore.get('user0')
    const user = JSON.parse(user0?.value)
    console.log(user)


    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
        return snapshot.val()
      }
    )

  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  );
}
