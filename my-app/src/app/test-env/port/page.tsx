// app/page.tsx (Next.js 13+ App Router)
import Image from "next/image";
// import { FaHome, FaUser, FaAward, FaTasks, FaComments, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 text-black flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col justify-between shadow hidden md:flex">
        <div>
          {/* Profile */}
          <div className="flex flex-col items-center text-center mb-8">
            <img className="w-32 h-32 rounded-full" src="https://avatars.githubusercontent.com/u/106414989?v=4" alt="" />
            <h2 className="mt-4 text-lg font-semibold">HeadBodyScript</h2>
            <p className="text-sm text-neutral-400">@headbodyscript</p>
          </div>

          {/* Nav Links */}
          <div className="row justify-between">
            <div className="flex rounded-full p-1 shadow w-20">
                <div className="p-2 rounded-full bg-neutral-400">NL</div>
                <div className="p-2">EN</div>
            </div>
            <div className="row rounded-full p-1 shadow w-20">
                {/* <div className="center rounded-full bg-neutral">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                    </svg>
                </div>
                <div className="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                    </svg>
                </div> */}
            </div>
          </div>
          <nav className="space-y-3 border-t-1 border-black pt-4 mt-4">
            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700 hover:text-white shadow" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
               <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
            </svg>
               Home
            </a>
            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700 hover:text-white shadow" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
               About
            </a>
            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700 hover:text-white shadow" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                   <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                </svg>
              Achievements
            </a>
            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700 hover:text-white shadow" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
                </svg>
               Projects
            </a>
            {/* <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700 shadow" href="#">
               Chat Room
            </a> */}
            <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700 hover:text-white shadow" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
               Contact
            </a>
          </nav>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-neutral-500">
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl mb-4 w-full">
            Smart Talk
          </button>
          <p>© 2025 HeadBodyScript. All rights reserved.</p>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-10">
          <div className="block md:hidden mb-4 text-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
            </svg>
        </div>
        <h1 className="text-xl font-bold mb-6">Featured Sections</h1>
        <p className="text-neutral-400 mb-8">
          Explore everything I’ve crafted, contributed, and accomplished.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 transition shadow">
            <h2 className="font-semibold mb-2">Projects Showcase</h2>
            <p className="text-sm text-neutral-400">A selection of real apps built to solve problems.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 transition shadow">
            <h2 className="font-semibold mb-2">About Me</h2>
            <p className="text-sm text-neutral-400">Who I am and what I do.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 transition shadow">
            <h2 className="font-semibold mb-2">Skills & Tools</h2>
            <p className="text-sm text-neutral-400">Covering mobile, web, AI, and UI/UX technologies.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 transition shadow">
            <h2 className="font-semibold mb-2">Achievements</h2>
            <p className="text-sm text-neutral-400">Milestones from programs, projects, and communities.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 transition shadow">
            <h2 className="font-semibold mb-2">Chat Room</h2>
            <p className="text-sm text-neutral-400">Open space to talk and collaborate.</p>
            <button className="mt-4 bg-[#8888ff] px-4 py-2 rounded-lg text-sm">Yes, I built it myself!</button>
          </div>
          <div className="bg-white rounded-2xl p-6 transition shadow">
            <h2 className="font-semibold mb-2">Services</h2>
            <p className="text-sm text-neutral-400">End-to-end solutions in web, mobile, AI, and design.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
