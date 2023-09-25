import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg?react";

export function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const buttonBurger = (
    <button
      onClick={() => setShowMobileMenu((prev) => !prev)}
      type="button"
      className=" p-2 w-10 h-10 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <RxHamburgerMenu size={"auto"} />
    </button>
  );

  const menuList = (
    // lg:pl-8 to counter the mr-8 on the shopping button
    <div
      className={`${
        showMobileMenu ? "block" : "hidden"
      }  lg:block w-full lg:w-auto lg:pl-8`}
    >
      <ul className="text-lg flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        <li>
          {/* An inline element only takes up as much width as necessary */}
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-black font-extrabold lg:p-0 dark:text-white lg:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 lg:text-white  rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );

  const buttonShoping = (
    <div className="mr-8 cursor-pointer hidden lg:flex justify-center items-center rounded-full h-12 w-12 bg-white shadow-sm ">
      <TbShoppingBag size={15} />
    </div>
  );

  const logoLink = (
    <a href="#" className="flex items-center">
      <NikeLogo className="h-20 w-20" />
    </a>
  );

  return (
    <nav className="flex flex-wrap items-center justify-between z-10">
      {logoLink}
      {buttonBurger}
      {menuList}
      {buttonShoping}
    </nav>
  );
}
