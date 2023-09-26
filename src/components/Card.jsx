export function Card({ shoe, onClick }) {
  return (
    <div
      onClick={() => onClick(shoe)}
      className={` ${shoe.bgColor} cursor-pointer transition transform hover:scale-110 active:scale-95`}
    >
      <div className="p-8 ">
        <div className="font-bold text-2xl">{shoe.title}</div>
        <div className=" font-semibold text-md mt-10 underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img className="absolute inset-y-4 inset-x-[40%] w-56 " src={shoe.src} />
    </div>
  );
}
