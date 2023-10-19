export const CartItem = ({ item }) => {
  return (
    <div className="p-2 hover:bg-[#DAFFA2]">
      <div className="flex cursor-pointer space-x-2 ">
        <img className="h-24 bg-gray-50 " src={item.src} />
        <div className="space-y-2">
          <div className="font-bold">{item.title}</div>
          <div>
            <div className=" text-sm text-gray-400">
              {item.description}
            </div>
          </div>
        </div>
        <div className="whitespace-nowrap font-bold">
          {item.price} $
        </div>
      </div>
    </div>
  );
};
