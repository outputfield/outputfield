import React, { useState } from 'react'
import Link from 'next/link'
import { useUser } from '../lib/hooks'

export const Navbar = () => {
  // const [user, setUser] = useContext(UserContext);
  const user = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const logout = () => {
    // magic.users.logout().then(() => {
    //   setUser({ user: null });
    //   Router.push('/login');
    // });
    console.log('logout')
  }

  function closeNavbar() {
    console.log('closing nav')
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left w-full m-2">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex justify-center w-full rounded-none border border-black shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true">
            Menu
          {/* <!-- Heroicon name: solid/chevron-down --> */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* <!--
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      --> */}
      <div
        onBlur={closeNavbar}
        className={`origin-top-right ${
          isOpen ? 'absolute' : 'hidden'
        } right-0 mt-2 w-56 rounded-none shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <Link href="/artists" passHref>
            <a
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0">P
              Artists
            </a>
          </Link>
          {user ? (
            <Link href="/account" passHref>
              <a
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0">
                Account
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-1">
                Login
              </a>
            </Link>
          )}
          <button
            // type="submit"
            onClick={logout}
            className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-3">
              Sign out
          </button>
        </div>
      </div>
    </div>
  )
}
