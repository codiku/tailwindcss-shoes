export function Card(p) {
  return (
    <div
      className={`${p.bgColor} cursor-pointer min-w-[100%] md:min-w-[18rem]   relative`}
    >
      <div className="p-8 min-w-max">
        <div className="font-bold text-2xl">{p.title}</div>
        <div className="cursor-pointer font-semibold text-md mt-10 underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img
        className="absolute inset-y-0 inset-x-[40%] md:inset-y-5 md:inset-x-28 w-56 "
        src={p.src}
      />
    </div>
  );
}
