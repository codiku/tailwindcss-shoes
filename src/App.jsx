import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

export function App() {
  const [currShoe, setCurrShoe] = useState(SHOE_LIST[0]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };
  return (
    <div className="dark:bg-night animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currShoe} />
      <NewArrivalsSection
        items={SHOE_LIST}
        onClickCard={setCurrShoe}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={[]} />
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
