import { Nav } from "./features/Nav";
import nikeShoeImg from "./assets/nike-big.png";

/*

  

  */
function App() {
  const currentShoe = (
    <div className="hidden xl:block -mt-52   flex-[3.9] z-[-1]  ">
      <div className=" h-[100%] w-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%" />
      <img
        src={nikeShoeImg}
        className="hidden lg:block absolute -mt-[30%] w-[40%] -ml-24 "
      />
    </div>
  );

  const leftBloc = (
    <div className="pl-32  flex-[4.3] space-y-8 mt-10">
      <div className="font-black text-9xl">
        Nike Air
        <br />
        Max 270
      </div>
      <div className="font-medium text-xl ">
        {"Nike's Ist lifestyle Air Max returns with a vibrant color gradient"}
        <br />
        {"that's sure to turn heads."}
      </div>
      <div className="">
        <div className="text-4xl font-extrabold">160 $</div>
      </div>
      <div>
        <button className="hover:bg-gray-900 active:bg-gray-700 flex justify-center items-center h-14 w-44 bg-black text-white">
          Add to bag
        </button>
      </div>
    </div>
  );
  return (
    <div className="">
      <div className="px-8 lg:px-32 py-8">
        <Nav />
      </div>
      <div className="flex">
        {leftBloc}
        {currentShoe}
      </div>
    </div>
  );
}
//

export default App;
