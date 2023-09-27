import { IoIosArrowDown } from "react-icons/io";

export function Select(p) {
  return (
    <div className="relative">
      <select
        defaultValue=""
        className="h-14 w-24 appearance-none border border-gray-300 bg-white  p-4  focus:border-gray-500"
      >
        <option value="" hidden disabled>
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
