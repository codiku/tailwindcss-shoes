import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";

function App() {
  const [currShoe, setCurrShoe] = useState(SHOE_LIST[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(
    function closeSidebarListener() {
      const handleEscapeKey = (event) => {
        if (event.key === "Escape" && isSidebarOpen) {
          setIsSidebarOpen(false);
        }
      };
      window.addEventListener("keydown", handleEscapeKey);
      return () => {
        window.removeEventListener("keydown", handleEscapeKey);
      };
    },
    [isSidebarOpen],
  );

  const removeFromCart = (shoeIndex) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(shoeIndex, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    const existingItemIndex = cartItems.findIndex(
      (c) => c.product.id === product.id,
    );
    const updateCartItems = [...cartItems];
    if (existingItemIndex > -1) {
      updateCartItems[existingItemIndex].qty = qty;
      updateCartItems[existingItemIndex].size = size;
    } else {
      updateCartItems.push({ product, qty: qty, size: size });
    }
    setCartItems(updateCartItems);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="1000 animate-fadeIn p-8 dark:bg-night  xl:px-24">
      <Nav onClickShoppingBtn={toggleSidebar} cartItems={cartItems} />
      <Sidebar onClickClose={toggleSidebar} isOpen={isSidebarOpen}>
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>
      <div className="flex flex-col-reverse lg:mt-5 lg:flex-row">
        <ShoeDetail shoe={currShoe} onClickAdd={addToCart} />
      </div>
      <NewArrivalSection onClickCard={setCurrShoe} />
    </div>
  );
}

export default App;
