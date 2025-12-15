import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HeadBodyScript || Game",
  description: "The future of web development starts here.",
};

export default async function index() {

  return (
    <div className='bg-neutral-100 min-h-dvh'>
      <div className='center text-black'>
        <main>
          <div className="center w-fit column 2xl:w-150 xl:w-300 lg:w-250 md:w-200 sm:w-full w-full">
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
          <section className="w-full h-full center">
            <canvas className="w-full"></canvas>
          </section>
          </div>
        </main>
      </div>
      <script src="/game/index.js" type="module"></script>
    </div>
  );
}
