import { Nav } from "./components/Nav";
import { useEffect, useState } from "react";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components//ShoeDetail";
import { Sidebar } from "./components/ui/Sidebar";
import { Cart } from "./components/Cart";

function App() {
  const [currShoe, setCurrShoe] = useState(SHOE_LIST[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shoesInCart, setShoesInCart] = useState([]);
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
    const updatedShoesInCart = [...shoesInCart];
    updatedShoesInCart.splice(shoeIndex, 1);
    setShoesInCart(updatedShoesInCart);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="1000 animate-fadeIn p-4  lg:px-8 xl:px-24  ">
      <Nav onClickShoppingBtn={toggleSidebar} cart={shoesInCart} />
      <Sidebar onClickClose={toggleSidebar} isOpen={isSidebarOpen}>
        <Cart cart={shoesInCart} onClickTrash={removeFromCart} />
      </Sidebar>
      <div className="flex flex-col-reverse lg:mt-5 lg:flex-row">
        <ShoeDetail
          shoe={currShoe}
          onClickAddShoe={(shoe) => setShoesInCart([...shoesInCart, shoe])}
        />
      </div>
      <NewArrivalSection onClickCard={setCurrShoe} />
    </div>
  );
}

export default App;
