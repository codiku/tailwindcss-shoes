export function CartItem({ item }) {
  return (
    <div className="flex cursor-pointer space-x-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <img className="h-24" src={item.src} />
      <div className="space-y-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-400">
          {item.description}
        </div>
      </div>
      <div className="font-bold">{item.price}$</div>
    </div>
  );
}
