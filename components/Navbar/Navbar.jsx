"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {

  

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-[#654C4F] border-gray-200 dark:bg-[#654C4F] flex justify-center items-center flex-col md:flex-row">
      <div className="flex py-5 justify-between items-center w-[90%]">
        <Link
          href={"/"}
          className="self-center text-2xl md:ml-10 font-semibold whitespace-nowrap dark:text-white "
        >
          Travelery
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#654C4F] dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-[90%] pb-2 md:w-auto md:flex md:items-center ${
          isNavbarOpen ? "block" : "hidden"
        }`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-[#654C4F] md:dark:bg-[#654C4F]  dark:border-gray-700 md:mr-10">
          <li>
            <Link
              href="/About"
              className="block py-2 px-3 text-white  rounded md:bg-transparent md:dark:hover:text-[#E9CE2C] dark:hover:bg-[#E9CE2C] md:p-0 dark:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              href="/map"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#E9CE2C] dark:hover:bg-[#E9CE2C] dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Maps
            </Link>
          </li> */}
          <li>
            <Link
              href="/Post"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#E9CE2C] dark:hover:bg-[#E9CE2C] dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Post
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#E9CE2C] dark:hover:bg-[#E9CE2C] dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Login
            </Link>
          </li>
        
          <li>
            <label className="relative inline-flex items-center me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div
                className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-blue-700 ${
                  isChecked
                    ? "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
                    : "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                }`}
              ></div>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
