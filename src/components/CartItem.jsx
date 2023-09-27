import { CiTrash } from "react-icons/ci";
export const CartItem = ({ shoe, onClickTrash }) => {
  return (
    <div>
      <div className=" flex justify-between  ">
        <img className="mt-1 h-24 bg-gray-100 " src={shoe.src} />
        <div className="w-72 space-y-2">
          <div className="font-bold">{shoe.title}</div>
          <div>
            <div className="text-sm text-gray-400">{shoe.description}</div>
            <button className="mt-2" onClick={onClickTrash}>
              <CiTrash size={25} color="black" />
            </button>
          </div>
        </div>
        <div className="font-bold ">{shoe.price} $</div>
      </div>
    </div>
  );
};
