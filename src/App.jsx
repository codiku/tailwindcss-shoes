import { useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { CartItem } from "./components/CartItem";

export function App() {
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
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[2]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
      </Sidebar>
    </div>
  );
}
