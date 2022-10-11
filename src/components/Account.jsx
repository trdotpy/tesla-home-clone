import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-6 pt-4 ml-4 cursor-pointer">
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
          <Link to="/account">Model S</Link>
          <Link to="/account">Model 3</Link>
          <Link to="/account">Model X</Link>
          <Link to="/account">Model Y</Link>
          <Link to="/account">Solar Roof</Link>
          <Link to="/account">Solar Panels</Link>
        </div>

        {/* ---RIGHT LINKS--- */}
        <div className="flex items-center no-underline text-[#1C2026] font-medium text-sm z-0 relative gap-x-10 cursor-pointer">
          <p>Shop</p>
          <Link to="/account">
            <p>Account</p>
          </Link>
          <Link to="/">
            <p>Sign Out</p>
          </Link>
        </div>
      </div>

      {/* ---ACCOUNT INFO--- */}
      <div className="flex items-center justify-between px-8 pb-8 py-36">
        <div className="text-3xl"></div>
      </div>
      {/* ---VEHICLE--- */}
      <div className="grid place-items-center">
        <h2 className="text-3xl">Tesla Roadster</h2>
        <p className="py-4">
          The quickest car in the world, with record-setting acceleration, range
          and performance.
        </p>
        <div className="object-contain">
          <img
            src="https://res.cloudinary.com/drij60fru/image/upload/v1665427601/Tesla-Roadster-PNG-Clipart_zabeqv.png"
            alt="roadster"
          />
        </div>
        <div className="flex items-center gap-5">
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-y-2">
            <button className="bg-[#3E69DE] text-white text-base w-64  mx-3 px-12 py-3 rounded cursor-pointer mb-28">
              Order
            </button>
            <button className="bg-[#E4E4E2] text-black text-base w-64  mx-3 px-12 py-3 rounded cursor-pointer mb-28">
              Test Drive
            </button>
          </div>
        </div>
        <p className="max-w-sm text-center text-sm leading-6 text-[#393c41]">
          <span className="text-[#3e6be2] cursor-pointer">Request a Call</span>{' '}
          to speak with a product specialist, value your trade-in or apply for
          leasing
        </p>
      </div>
    </div>
  )
}

export default Account
