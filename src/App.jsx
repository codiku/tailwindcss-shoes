import { Nav } from "./features/Nav";
import nikeShoeImg from "./assets/nike-big.png";

function App() {
  const currentShoe = (
    <div className="lg:-mt-52 flex-1 z-[-1]  ">
      <div className="flex justify-center items-center h-[100%]  w-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%">
        <img src={nikeShoeImg} />
      </div>
    </div>
  );

  const descriptionBloc = (
    <div className=" flex-[0.98] space-y-8 mt-10">
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
      <div className="">
        <div className="text-xl md:text-4xl font-extrabold">160 $</div>
      </div>
      <div>
        <button className="hover:bg-gray-900 active:bg-gray-700 flex justify-center items-center h-14 w-44 bg-black text-white">
          Add to bag
        </button>
      </div>
    </div>
  );
  return (
    <div className="p-8">
      <div className="lg:px-32 ">
        <Nav />
      </div>
      <div className="lg:pl-32 lg:mt-20 flex lg:flex-row flex-col-reverse   ">
        {descriptionBloc}
        {currentShoe}
      </div>
    </div>
  );
}

export default App;
