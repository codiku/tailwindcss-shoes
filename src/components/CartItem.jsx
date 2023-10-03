import { CiTrash } from "react-icons/ci";
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";

export const CartItem = ({
  cartItem: { product, qty, size },
  onClickTrash,
}) => {
  const inputs = (
    <div className="flex  justify-between gap-2 pl-32">
      <div className="flex gap-6">
        <div className="mt-2 items-baseline gap-2">
          <div className="font-bold">QTY</div>
          <Select title={qty} options={QTY} className={"w-16 p-1"} />
        </div>
        <div className="mt-2  items-baseline gap-2">
          <div className="font-bold">SIZE</div>
          <Select title={size} options={SIZES} className={"w-16 p-1"} />
        </div>
      </div>
      <button className="mt-2" onClick={onClickTrash}>
        <CiTrash size={25} className="text-blacke dark:text-white" />
      </button>
    </div>
  );
  return (
    <div className="flex-col p-2 hover:bg-paleYellow dark:hover:bg-night-50">
      <div className="flex cursor-pointer  justify-between gap-2 whitespace-pre-wrap ">
        <img className="mt-1 h-24 bg-gray-50 " src={product.src} />
        <div className="space-y-2">
          <div className="font-bold">{product.title}</div>
          <div>
            <div className=" text-sm text-gray-400">{product.description}</div>
          </div>
        </div>
        <div className="whitespace-nowrap font-bold">{product.price} $</div>
      </div>
      {inputs}
    </div>
  );
};
