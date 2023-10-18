import { IoIosArrowDown } from "react-icons/io";
export function Select({ title, options }) {
  return (
    <div className="relative  text-black">
      <select
        defaultValue=""
        className={` w-24 cursor-pointer appearance-none border border-gray-300 bg-white  p-4  focus:border-gray-500`}
      >
        <option value="" hidden disabled>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className=" flex-center pointer-events-none absolute inset-y-0 right-0 pr-3 text-gray-700">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
