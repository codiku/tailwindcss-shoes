import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg?react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn, cart }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const buttonBurger = (
    <button
      onClick={() => setShowMobileMenu((prev) => !prev)}
      type="button"
      className="anim-click h-10 w-10 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden "
    >
      <RxHamburgerMenu size={"auto"} />
    </button>
  );

  const menuList = (
    // lg:pl-8 to counter the mr-8 on the shopping button
    <div
      className={` ${
        !showMobileMenu && "hidden"
      } mb-5 w-full lg:block lg:w-auto lg:pl-8`}
    >
      <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg dark:border-gray-700 dark:bg-gray-800 lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0 lg:dark:bg-gray-900">
        {ROUTES.map((route, i) => (
          <li key={route}>
            <a
              href="#"
              className={`block py-2 pl-3 pr-4 text-${
                i > 2 ? "white" : "black"
              } rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:bg-transparent lg:dark:hover:text-blue-500`}
              aria-current="page"
            >
              {route}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const ping = (
    <div className="absolute -right-1 -top-1">
      <span className="relative flex h-6 w-6">
        <span className="opacity-65 absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400"></span>
        <span className="flex-center relative inline-flex h-6 w-6 rounded-full bg-sky-500 text-white">
          {cart.length}
        </span>
      </span>
    </div>
  );
  const buttonShopping = (
    <div
      onClick={onClickShoppingBtn}
      className="mr-8 hidden h-12 w-12 lg:block"
    >
      <div className="anim-click flex-center h-full w-full cursor-pointer rounded-full rounded-full bg-white shadow-sm ">
        <TbShoppingBag size={15} />
        {cart.length > 0 && ping}
      </div>
    </div>
  );

  const logoLink = (
    <a href="#" className="flex items-center">
      <NikeLogo className="h-20 w-20" />
    </a>
  );

  return (
    <nav className="relative z-20 flex flex-wrap items-center justify-between">
      {logoLink}
      {buttonBurger}
      {menuList}
      {buttonShopping}
    </nav>
  );
}
