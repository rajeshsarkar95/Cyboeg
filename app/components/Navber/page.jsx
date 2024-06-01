/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

function page(){
  return (
    <>
    <div>
    <nav className="bg-black-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          {/*
      Icon when menu is closed.
      Menu open: "hidden", Menu closed: "block"
    */}
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {/*
      Icon when menu is open.
      Menu open: "block", Menu closed: "hidden"
    */}
          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/logo.png"
            alt="Your Company"
          />
        </div>
        <div className="hidden sm:ml-10  sm:block">
          <div className="flex space-x-10">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <input type="text" id="first_name" class="  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-18 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-1000 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type something" required />
            <Link
              href="/"
              className="active: active rounded-md px-3 text-pink-600 py-2 text-sm font-medium"
            >
               Home
            </Link> 
            
            <a
              href="/components/Details#profile"
              className="text-gray-700  hover:text-#ef4444 rounded-md px-3 py-2 text-sm font-medium"
            >
            details
            </a> 
            <a
              href="components/profile"
              className="text-gray-700  hover:text-red rounded-md px-3 py-2 text-sm font-medium"
            >
              profile
            </a> 
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
        {/* Profile dropdown */}
        <div className="relative ml-3">
          <div>
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
             
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only"></span>
              <div className="flex flex-row bg-pink-500 rounded-full w-30">
              <span className='my-3 m-2 text-bolt' >profile</span> 
              <img
                 href="http://localhost:3000/component/profile"
                className="h-7 w-17 m-2 rounded-full"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/profile-header.jpg"
                alt=""
              />
              </div>
            </button>
          </div>
          {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
        </div>
      </div>
    </div>
  </div>
  {/* Mobile menu, show/hide based on menu state. */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
      <a
        href="#"
        className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
        aria-current="page"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Team
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Projects
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Calendar
      </a>
    </div>
  </div>
</nav>

    </div>
    </>
  )
}

export default page
