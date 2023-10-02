import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";
export function Select({ title, onChange, options, isDisabled, className }) {
  return (
    <div className="relative">
      <select
        disabled={isDisabled}
        onChange={(e) => onChange(e.target.value)}
        defaultValue=""
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white  p-4  focus:border-gray-500 ${className}`,
        )}
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
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
