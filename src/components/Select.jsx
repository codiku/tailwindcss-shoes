import { IoIosArrowDown } from "react-icons/io";

export function Select(p) {
  return (
    <div className="relative">
      <select className="w-24 h-14 appearance-none  bg-white border border-gray-300  p-4  focus:border-gray-500">
        <option value="" selected hidden disabled>
          {p.title}
        </option>
        {p.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
