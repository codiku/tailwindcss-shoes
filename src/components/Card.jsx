export function Card(p) {
  return (
    <div className={`${p.bgColor} h-56 w-96 relative`}>
      <div className="p-8">
        <div className="font-bold text-2xl">{p.title}</div>
        <div className="cursor-pointer font-semibold text-md mt-10 underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img className="absolute -inset-y-4 inset-x-28 h-80" src={p.src} />
    </div>
  );
}
