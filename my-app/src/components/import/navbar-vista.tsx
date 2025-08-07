"use client";

import localFont from 'next/font/local'
import Link from 'next/link'
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebase.config';

const headbodyscriptFont = localFont({
  src: '../../app/headbodyscript.woff2'
})  

interface NavbarProps {
   user: any;
}

export default function NavbarVista({user}: NavbarProps) {
    console.log(user)
  const signOutUser = async () => {
    await signOut(auth);
  };

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-gray-500 text-sm" href="/projects"><span className="sr-only">Home</span></Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  {/* <Link className={`text-gray-500 text-[5px]`} href="/">headbodyscript{user?.currency}</Link> */}
                  <Link className={`text-gray-500 text-[5px] ${headbodyscriptFont.className}`} href="/">headbodyscript{user?.currency}</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/vista/pages/index">Home</Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/vista/pages/dual">Dual</Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/vista/pages/store">Store</Link>
                </li>
              </ul>
            </nav>
            <div aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  
                  {!user && 
                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/auth">Login</Link>
                  }
                  {user && 
                    <div className="md:relative md:block group">
                      <img className="size-10 object-cover" src={user?.providerData[0]?.photoURL} alt="" />

                      <div
                        className="hidden group-hover:block absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                        role="menu"
                      >
                        <div className="p-2">
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            My profile
                          </a>

                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Billing summary
                          </a>

                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Team settings
                          </a>
                        </div>

                        <div className="p-2">
                          <form method="POST" action="#">
                            <button onClick={() => signOutUser()} type="submit"  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"  role="menuitem"  > 
                              <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  strokeWidth="1.5"  stroke="currentColor"  className="size-4"  >  <path  strokeLinecap="round"  strokeLinejoin="round"  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"  /></svg>
                              Logout
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  }
                </li>
              </ul>
            </div>
            

            <div className="block md:hidden">
              <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}