import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "@/config/firebase.config"
import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'
;import { cookies } from 'next/headers'

export default async function Home() {


  const cookieStore = await cookies()
    const cookie = cookieStore.get('user0') || {value:""}
    const user = await JSON.parse(cookie.value)
    // console.log(user)


    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
        } else {
          // console.log("No data available");
        }
        return snapshot.val()
      }
    )

      const item = await get(child(dbRef, `characters`)).then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
        } else {
          // console.log("No data available");
        }
        return snapshot.val()
      }
    )

  return (
    <>
      <Navbar user={user}/>
      <div className="grid grid-cols-3 gap-4 text-black">
      {
              
              item.map((item: any) => { 
                // console.log(item.id)
                // console.log(snapshot.characters[item.id])
                if (true == snapshot.characters[item.id])
                {
                                  return (
                <div key={item.id} className="bg-white flex row rounded-lg shadow w-full items-start h-full">
                <div className='h-full'>
                    <div
                      className='w-full aspect-square rounded-lg'
                      style={{
                        backgroundImage: `${item.url}`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                    <div className="column p-4 w-full">
                      <p className='text-left'>Name: <span>{item.name}</span></p>
                      <p className='text-left'>Attack: <span>{item.attack}</span></p>
                      <p className='text-left'>Health: <span>{item.health}</span></p>
                      <p className='text-left'>ID: <span>{item.id}</span></p>
                    </div>
                </div>
                </div>
              )

                }
            }
              )}
              </div>
      <Footer/>
    </>
  );
}
