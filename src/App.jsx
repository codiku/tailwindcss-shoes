import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";
import { document } from "postcss";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

export function App() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleThemeMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
        ? "true"
        : "false",
    );
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
      {/* Dark mode button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleThemeMode}
          className="bg-night-50 dark:text-night-500 rounded-full px-4 py-2 font-semibold text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="block dark:hidden" />
        </button>
      </div>
    </div>
  );
}
