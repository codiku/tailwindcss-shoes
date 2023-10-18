import nike1 from "../assets/n1-min.png";
export function ShoeDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      {/* ml-28 to make it align with the menu */}
      <div className="flex-1">
        <img src={nike1} />
      </div>

      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">
          Nike air max 270
        </div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">
          100 $
        </div>
        <div className="flex items-center space-x-10">
          <button
            className={`flex-center  h-14 w-44 bg-black  text-white hover:bg-gray-900 active:bg-gray-700 `}
          >
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
