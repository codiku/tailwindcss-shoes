import { Nav } from "./components/Nav";
import { Select } from "./components/Select";
import { Card } from "./components/Card";
import nike1 from "./assets/n1.png";
import nike2 from "./assets/n2.png";
import nike3 from "./assets/n3.png";
import nike4 from "./assets/n4.png";

import { useState } from "react";

const SHOE_LIST = [
  {
    id: 1,
    src: nike1,
    bgColor: "bg-paleYellow",
    title: "Nike Air Max 270",
    description:
      "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.",
    price: 160,
  },
  {
    id: 2,
    src: nike2,
    bgColor: "bg-lavender",
    title: "Nike Air Vapor",
    description:
      "The Nike Air Vapor is a sleek and stylish shoe that's perfect for any occasion. It's the perfect shoe for any active lifestyle.",
    price: 100,
  },
  {
    id: 3,
    src: nike3,
    bgColor: "bg-paleGreen",
    title: "Nike Air Max 2090",
    description:
      "The Nike Air Max 2090 is a futuristic shoe that's both stylish and comfortable. It's the perfect shoe for any fashion-forward individual.",
    price: 150,
  },
  {
    id: 4,
    src: nike4,
    bgColor: "bg-[#FCC4EA]",
    title: "Nike Air Blazer",
    description:
      "The Nike Air Blazer is a classic shoe that's perfect for any casual occasion. It's the perfect shoe for any laid-back individual.",
    price: 110,
  },
];

function App() {
  const [currShoe, setCurrShoe] = useState(SHOE_LIST[0]);

  const bigShoeImage = (
    <div className=" flex justify-center items-center h-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%">
      <img className="animate-float " src={currShoe.src} />
    </div>
  );

  const shoeDetail = (
    <>
      <div className="pulse font-black text-5xl md:text-9xl">
        {currShoe.title}
      </div>
      <div className="font-medium text-md md:text-xl ">
        {currShoe.description}
      </div>
      <div className="flex space-x-6 items-center">
        <div className="text-3xl md:text-6xl font-extrabold">
          {currShoe.price} $
        </div>
        <Select title="QTY" options={["1", "2", "3", "4"]} />
        <Select
          title="SIZE"
          options={["41", "42", "43", "44", "45", "46", "47"]}
        />
      </div>
      <div className="flex items-center space-x-10">
        <button className="anim-click bg-black hover:bg-gray-900 active:bg-gray-700 flex justify-center items-center h-14 w-44  text-white">
          Add to bag
        </button>

        <a href="#" className=" underline font-bold text-lg underline-offset-4">
          View details
        </a>
      </div>
    </>
  );

  const listSection = (
    <>
      <div className="flex flex-col items-center justify-center mt-20 ">
        <div className="bg-[url('./assets/lines.png')] bg-[length:500px_40px] bg-center bg-no-repeat text-5xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      {/*flex items-center justify-between flex-col xl:flex-row*/}

      <div className="justify-between grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] gap-y-24 gap-x-6 mt-10">
        {SHOE_LIST.map((shoe) => (
          <Card onClick={setCurrShoe} key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </>
  );

  return (
    <div className="animate-fadeIn 1000 p-4  lg:px-8 xl:px-24">
      <Nav />
      <div className=" lg:mt-5 flex lg:flex-row flex-col-reverse">
        <div className=" flex-1 space-y-8 mt-10 lg:mt-0 ">{shoeDetail}</div>
        {/* ml-28 to make it align with the menu */}
        <div className="lg:-mt-52 flex-1 z-[-1] lg:ml-28">{bigShoeImage}</div>
      </div>
      {listSection}
    </div>
  );
}

export default App;
