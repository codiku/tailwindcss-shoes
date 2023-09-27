import { Card } from "./ui/Card";
import { SHOE_LIST } from "../constant";

export const NewArrivalSection = ({ onClickCard }) => {
  return (
    <>
      <div className="flex-center  mt-20 flex-col">
        <div className="bg-[url('./assets/lines.png')] bg-[length:500px_40px] bg-center bg-no-repeat text-5xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {SHOE_LIST.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} onClick={onClickCard} />
        ))}
      </div>
    </>
  );
};
