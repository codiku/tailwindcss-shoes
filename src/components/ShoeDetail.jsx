import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";

export function ShoeDetail() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center  h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={nike1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">
          Nike Air Max 270
        </div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="flex space-x-6">
          <div className=" text-3xl font-extrabold md:text-6xl">
            100 $
          </div>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900  active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
