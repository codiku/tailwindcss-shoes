import { Select } from "../components/Select";

export const ShoeDetail = ({ shoe }) => {
  const shoeImage = (
    <div className=" flex justify-center items-center h-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%">
      <img className="animate-float " src={shoe.src} />
    </div>
  );

  const shoeDescription = (
    <>
      <div className="pulse font-black text-5xl md:text-9xl">{shoe.title}</div>
      <div className="font-medium text-md md:text-xl ">{shoe.description}</div>
      <div className="flex space-x-6 items-center">
        <div className="text-3xl md:text-6xl font-extrabold">
          {shoe.price} $
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

  return (
    <>
      <div className=" flex-1 space-y-8 mt-10 lg:mt-0 ">{shoeDescription}</div>
      {/* ml-28 to make it align with the menu */}
      <div className="lg:-mt-52 flex-1 z-[-1] lg:ml-28">{shoeImage}</div>
    </>
  );
};
