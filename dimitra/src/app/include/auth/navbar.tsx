"use client";
import Link from 'next/link';
import firebase from "dimi/components/firebase";

import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from "dimi/components/firebase";

import localFont from 'next/font/local'

const headbodyscriptFont = localFont({
  src: "../assets/font/headbodyscript.woff2"
})
 
export default function Home() {
    const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  // console.log(user, loading, error);
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-gray-500 text-sm" href="#">
              <span className="sr-only">Home</span>
              <div className={`icon ${headbodyscriptFont.className}`}></div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                </li>
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <button type="button" className="overflow-hidden rounded-full border border-gray-300 shadow-inner">
              <span className="sr-only">Toggle dashboard menu</span>
                {!user && 
                  <img className="size-10 object-cover" src="https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/static/img/404-img.webp" alt="" />
                }
                {user && 
                  <img className="size-10 object-cover" src={user.providerData[0].photoURL} alt="" />
                }
              </button>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
