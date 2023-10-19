import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";

export function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
    </div>
  );
}
