import Navbar from 'dimi/app/include/navbar-vista'
import Footer from 'dimi/app/include/footer'
// import Shop from "dimi/components/shop"
import "dimi/app/assets/css/app.css";
import "dimi/app/assets/css/pokedex.css";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "dimi/components/firebase";



import { getAuth, onAuthStateChanged } from "firebase/auth";


export default async function store() {

    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, `characters/`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
        return snapshot.val()
      }
    )
    // console.log(snapshot)
  return (
    <div id="container">
      <Navbar/>
      <div className='center text-black'>
        <main className="min-h-dvh w-fit row 2xl:w-350 xl:w-300 lg:w-250 md:w-200 sm:w-full w-full">
        <section className='w-full md:w-[calc(100%_-_298px)] sm:w-full px-2 py-4'>
          <div className="bg-white rounded-lg shadow p-4 h-fit">
            <form action="" className="row search">
              <input type="text" placeholder="Search your fighter!" />
              <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </label>
            </form>
          </div>
            <div className="bg-white rounded-lg shadow p-2 column h-fit mt-4 mb-4">
              <div className="row grid gap-2">
                <div className="row rounded-lg shadow p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                  </svg>
                  <div className='ml-2'>Alphabetical</div>
                  </div>
                <div className="row rounded-lg shadow p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-box-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                  </svg>
                  <div className='ml-2'>Attack</div>
                  </div>
                <div className="row rounded-lg shadow p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bluesky" viewBox="0 0 16 16">
                    <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
                  </svg>
                  <div className='ml-2'>Health</div>
                </div>
                <div className="row rounded-lg shadow p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bluesky" viewBox="0 0 16 16">
                    <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
                  </svg>
                  <div className='ml-2'>Physical Armor</div>
                </div>
                <div className="row rounded-lg shadow p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bluesky" viewBox="0 0 16 16">
                    <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
                  </svg>
                  <div className='ml-2'>Magic Armor</div>
                </div>
                <div className="row rounded-lg shadow p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                  <div className='ml-2'>Id</div>
                  </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
{
              
              snapshot.map((item: any) => (
                <div key={item.id} className='h-full bg-white'>
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
              ))}
            </div>
        </section>

      </main>
      </div>
      <Footer/>
      </div>
  );
}
