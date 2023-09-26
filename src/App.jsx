import { Nav } from "./components/Nav";

import { useState } from "react";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./features/NewArrivalSection";
import { ShoeDetail } from "./features/ShoeDetail";

function App() {
  const [currShoe, setCurrShoe] = useState(SHOE_LIST[0]);

  return (
    <div className="animate-fadeIn 1000 p-4  lg:px-8 xl:px-24">
      <Nav />
      <div className="lg:mt-5 flex lg:flex-row flex-col-reverse">
        <ShoeDetail shoe={currShoe} />
      </div>
      <NewArrivalSection onClickCard={setCurrShoe} />
    </div>
  );
}

export default App;
