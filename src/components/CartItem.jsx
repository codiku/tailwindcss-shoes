import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { QTY, SIZES } from "../constant";
export const CartItem = ({
  cartItem: { product, qty, size },
  onClickTrash,
}) => {
  return (
    <div className=" flex justify-between p-3 hover:bg-paleYellow">
      <img className="mt-1 h-24 bg-gray-50 " src={product.src} />
      <div className="w-72 space-y-2">
        <div className="font-bold">{product.title}</div>
        <div>
          <div className="text-sm text-gray-400">{product.description}</div>
          <div className="flex gap-4">
            <div className="mt-2 flex items-baseline gap-2">
              <div className="font-bold">QTY</div>
              <Select title={qty} options={QTY} className={"w-14 p-1"} />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <div className="font-bold">SIZE</div>
              <Select title={size} options={SIZES} className={"w-14 p-1"} />
            </div>
            <button className="mt-2" onClick={onClickTrash}>
              <CiTrash size={25} color="black" />
            </button>
          </div>
        </div>
      </div>
      <div className="font-bold ">{product.price} $</div>
    </div>
  );
};
