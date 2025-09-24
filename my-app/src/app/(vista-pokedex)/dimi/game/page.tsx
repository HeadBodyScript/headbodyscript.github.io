import Navbar from '@/components/import/navbar-vista'
import Footer from '@/components/import/footer'
import Vista from "@/components/app/vista-pokedex/dual"
// import Display from "@/components/vista/display"
// import snapshot from '@/components/data.json'
import { getDatabase, ref, get, child } from "firebase/database";
import { app } from "@/config/firebase.config";
import { cookies } from 'next/headers'
export default async function index() {
  let int = 0;
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
        <section>
          {
              item.map((item: any) => (
                <div key={item.id} className='h-full'>
                  <Vista>
                    <data value={int++}></data>
                    <div
                      className='w-full aspect-square rounded-lg'
                      style={{
                        backgroundImage: `${item.url ?? "0"}`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                    <div className="column p-4 w-full">
                      <h1><span>{item.name}</span></h1>
                      <table className='w-full'>
                        <tbody>
                          <tr>
                          <td className='text-left'>
                            <div className='row'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                              </svg>
                              <span>Attack Damage</span>
                            </div>
                          </td>
                          <td className='text-right'>{item.attack ?? "0"}</td>
                        </tr>
                        <tr>
                          <td className='text-left'>
                            <div className='row'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                              </svg>
                              <span>Health</span>
                            </div>
                          </td>
                          <td className='text-right'>{item.health ?? "0"}</td>
                        </tr>
                        <tr>
                          <td className='text-left'>
                            <div className='row'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                              </svg>
                              <span>Physical Armor</span>
                            </div>
                          </td>
                          <td className='text-right'>{item.physical_armor ?? "0"}</td>
                        </tr>
                        <tr>
                          <td className='text-left'>
                            <div className='row'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                              </svg>
                              <span>Magic Armor</span>
                            </div>
                          </td>
                          <td className='text-right'>{item.magic_armor ?? "0"}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </Vista>
                </div>
              ))}
        </section>
      </main>
      </div>
      <Footer/>
      </div>
  );
}
