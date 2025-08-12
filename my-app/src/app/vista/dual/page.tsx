import Navbar from '@/components/import/navbar-vista'
import Footer from '@/components/import/footer'
import Vista from "@/components/vista/dual"
// import Display from "@/components/vista/display"
// import snapshot from '@/components/data.json'
import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "@/config/firebase.config";
import { cookies } from 'next/headers'
export default async function index() {
    const cookieStore = await cookies()
    const cookie = cookieStore.get('user0') || {value:""}
    const userCookie = await JSON.parse(cookie.value)

    const dbRef = ref(getDatabase(app));
    const item = await get(child(dbRef, `characters/`)).then((snapshot) => {
      return snapshot.val()
    })
    const userData = await get(child(dbRef, `users/${userCookie.uid}/`)).then((snapshot) => {
      return snapshot.val()
    })
var int = 0;
  return (
    <div className='bg-neutral-100 min-h-dvh'>
      <Navbar userCookie={userCookie} userData={userData} />
      <div className='center text-black'>
        <main className="center w-fit row 2xl:w-150 xl:w-300 lg:w-250 md:w-200 sm:w-full w-full">
        <section className='w-full sm:w-full px-2 py-4'>
          <div className="bg-white rounded-lg shadow p-4 h-fit">
            <form action="" className="row search">
              <input type="text" placeholder="Enter lobby code!" />
              <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </label>
            </form>
          </div>
        </section>
        <section className='w-full sm:w-full px-2 py-4'>
          <div className="bg-white rounded-lg shadow p-2 h-fit">
            <div className='shadow p-2 rounded-lg hover:bg-gray-200'>Create Lobby</div>
          </div>
        </section>
      </main>
      </div>
      <Footer/>
      </div>
  );
}
