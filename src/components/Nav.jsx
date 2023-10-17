import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {
  return (
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
}
