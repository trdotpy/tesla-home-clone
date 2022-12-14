import React, { useState } from 'react'
// import Menu from './Menu'
import { GrClose } from 'react-icons/gr'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-6 pt-4 ml-4 cursor-pointer">
        {/* ---LOGO--- */}
        <div className="object-contain mr-24 w-28">
          <a href="/">
            <svg
              class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>

        {/* ---CENTER LINKS--- */}
        <div className="flex no-underline text-[#1C2026] font-medium text-sm gap-x-10 cursor-pointer ">
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Roof</p>
          <p>Solar Panels</p>
        </div>

        {/* ---RIGHT LINKS--- */}
        <div className="flex items-center no-underline text-[#1C2026] font-medium text-sm z-0 relative gap-x-10 cursor-pointer">
          <p>Shop</p>
          <p>Account</p>
          {/* ---MENU DRAWER--- */}
          <p className="cursor-pointer" onClick={() => setMenuOpen(true)}>
            Menu
          </p>
        </div>
      </div>

      {/* Side Menu */}
      {menuOpen && (
        <div className="fixed right-0 bg-white z-10 h-screen w-[300px] shadow-lg">
          <div className="absolute right-0 m-4">
            <GrClose
              className="mt-4 text-base cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col justify-start mt-12 text-sm">
            <ul>
              <li className="px-12 mt-12 list-none text-[#393D41]">
                <a href="/">Existing Inventory</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Used Inventory</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Trade-In</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Test Drive</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Insurance</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Cybertruck</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Roadster</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Semi</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Charging</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Powerwall</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Commercial Energy</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Utilities</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Find Us</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Support</a>
              </li>
              <li className="px-12 mt-4 list-none text-[#393D41]">
                <a href="/">Investor Relations</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
