import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contact",
];
export function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div className="w-full">
        <ul className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 ${
                  i === 0
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
