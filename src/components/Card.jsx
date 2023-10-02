export function Card({ shoe, onClick }) {
  return (
    <div
      onClick={() => onClick(shoe)}
      className={`${shoe.bgColor} transform cursor-pointer transition hover:scale-105`}
    >
      <div className="p-8 ">
        <div className="text-2xl font-bold">{shoe.title}</div>
        <div className=" text-md mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img className="absolute inset-x-[40%] inset-y-4 w-56 " src={shoe.src} />
    </div>
  );
}
