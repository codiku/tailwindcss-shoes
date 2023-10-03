import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn, cartItems }) {
  const [theme, setTheme] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(function loadThemeMode() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setTheme(savedTheme);
    }
  }, []);

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
      className={`mb-4 w-full lg:mb-0 lg:block lg:w-auto lg:pl-8 ${
        !showMobileMenu && "hidden"
      }`}
    >
      <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg dark:border-gray-700 dark:bg-gray-800 lg:flex-row  lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0 lg:dark:bg-transparent ">
        {ROUTES.map((route, i) => (
          <li key={route} className="px-5 py-1 [&:nth-child(1)]:text-red-400">
            <a
              href="#"
              className={`${
                i == 0 &&
                "bg-blue-500 text-white lg:bg-transparent lg:text-black"
              }
              ${i > 2 && "lg:text-white"} 
              ${i > 0 && "hover:bg-gray-100 lg:hover:bg-transparent"}
              block rounded py-2 pl-3 pr-4 text-black   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 
              lg:hover:text-blue-700 lg:dark:hover:bg-transparent lg:dark:hover:text-blue-500
`}
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
          {cartItems.length}
        </span>
      </span>
    </div>
  );
  const buttonShopping = (
    <div
      onClick={onClickShoppingBtn}
      className="fixed bottom-4 left-4 mr-8 h-12 w-12 lg:static"
    >
      <div className="anim-click flex-center h-full w-full cursor-pointer rounded-full bg-white shadow-sm ">
        <TbShoppingBag size={15} />
        {cartItems.length > 0 && ping}
      </div>
    </div>
  );

  const logoLink = (
    <a href="#" className="flex items-center">
      <NikeLogo
        className="h-20 w-20"
        fill={theme === "dark" ? "white" : "black"}
      />
    </a>
  );

  const toggleThemeMode = () => {
    if (localStorage.getItem("theme") !== "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }

    // Whenever the user explicitly chooses to respect the OS preference
  };
  return (
    <nav className="relative z-20 flex flex-wrap items-center justify-between">
      {logoLink}
      {buttonBurger}
      {menuList}
      {buttonShopping}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleThemeMode}
          className="rounded-full bg-night-50 px-4 py-2 font-semibold text-white shadow-lg  dark:bg-white dark:text-night"
        >
          {!theme || theme === "light" ? <BiMoon /> : <BiSun />}
        </button>
      </div>
    </nav>
  );
}

/*

 
              */
