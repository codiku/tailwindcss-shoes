import { Nav } from "./features/Nav";
import nikeShoeImg from "./assets/nike-big.png";
import { Select } from "./components/Select";
import { Card } from "./components/Card";
import nike1 from "./assets/nike1.png";
import nike2 from "./assets/nike2.png";
import nike3 from "./assets/nike3.png";
function App() {
  const showImage = (
    <div className="lg:-mt-52 flex-1 z-[-1]  ">
      <div className="flex justify-center items-center h-[100%]  w-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%">
        <img src={nikeShoeImg} />
      </div>
    </div>
  );

  const shoeDetail = (
    <div className=" flex-[0.98] space-y-8 mt-10 lg:mt-0 ">
      <div className="font-black text-5xl md:text-9xl">
        Nike Air
        <br />
        Max 270
      </div>
      <div className="font-medium text-md md:text-xl ">
        {"Nike's Ist lifestyle Air Max returns with a vibrant color gradient"}
        <br />
        {"that's sure to turn heads."}
      </div>
      <div className="flex space-x-6 items-center">
        <div className="text-3xl md:text-6xl font-extrabold">160 $</div>
        <Select title="QTY" options={["1", "2", "3", "4"]} />
        <Select
          title="SIZE"
          options={["41", "42", "43", "44", "45", "46", "47"]}
        />
      </div>
      <div className="flex items-center space-x-10">
        <button className="hover:bg-gray-900 active:bg-gray-700 flex justify-center items-center h-14 w-44 bg-black text-white">
          Add to bag
        </button>
        <a href="#" className=" underline font-bold text-lg underline-offset-4">
          View details
        </a>
      </div>
    </div>
  );

  const listSection = (
    <div className="lg:px-32">
      <div className="flex flex-col items-center justify-center mt-20 ">
        <div className="bg-[url('./assets/lines.png')] bg-[length:500px_40px] bg-center bg-no-repeat text-5xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row  gap-4 mt-10">
        <Card src={nike1} bgColor="bg-[#EEFFA4]" title="Nike Mid Blazer" />
        <Card src={nike2} bgColor="bg-[#DDCEFD]" title="Nike Fly Zoom" />
        <Card src={nike3} bgColor="bg-[#DAFFA2]" title="Nike Air Max" />
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="lg:px-32 ">
        <Nav />
      </div>
      <div className="lg:pl-32 lg:mt-5 flex lg:flex-row flex-col-reverse">
        {shoeDetail}
        {showImage}
      </div>
      {listSection}
    </div>
  );
}

export default App;
