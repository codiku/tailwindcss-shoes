import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button className="h-10 w-10 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={"auto"} />
      </button>

      {/* Menu list */}
      <div className={`mb-4 w-full`}>
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg ">
          {ROUTES.map((route, i) => (
            <li key={route}>
              <a
                href="#"
                className={`${i == 0 && "bg-blue-500 text-white "}
              ${i > 0 && "hover:bg-gray-100"}
              block rounded px-3 py-2`}
              >
                {route}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
