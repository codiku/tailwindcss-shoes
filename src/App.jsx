import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail.jsx";

export default function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
    </div>
  );
}
