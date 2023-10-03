import { SHOE_LIST } from "../constant";
import { Card } from "./Card";

export const NewArrivalSection = ({ onClickCard }) => {
  return (
    <>
      <div className="flex-center  mt-20 flex-col dark:text-white">
        <div className="w-fit overflow-hidden  bg-[url('./assets/lines.png')] bg-center bg-no-repeat text-4xl font-extrabold">
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
