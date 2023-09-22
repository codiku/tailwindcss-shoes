import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike.svg?react";

export function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const buttonBurger = (
    <button
      onClick={() => setShowMobileMenu((prev) => !prev)}
      type="button"
      className=" p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <RxHamburgerMenu size={"auto"} />
    </button>
  );

  const menuList = (
    <div
      className={`${
        showMobileMenu ? "block" : "hidden"
      }  md:block w-full md:w-auto`}
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          {/* An inline element only takes up as much width as necessary */}
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );

  const buttonShoping = (
    <div className="cursor-pointer hidden md:flex justify-center items-center rounded-full h-12 w-12 bg-white shadow-sm ">
      <TbShoppingBag size={15} />
    </div>
  );

  const logoLink = (
    <a href="#" className="flex items-center">
      <NikeLogo className="h-16 w-16" />
    </a>
  );

  return (
    <nav className="flex flex-wrap items-center justify-between px-8 md:px-32 py-8">
      {logoLink}
      {buttonBurger}
      {menuList}
      {buttonShoping}
    </nav>
  );
}
