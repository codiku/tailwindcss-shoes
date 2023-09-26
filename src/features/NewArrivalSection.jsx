import { Card } from "../components/Card";
import { SHOE_LIST } from "../constant";

export const NewArrivalSection = ({ onClickCard }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 ">
        <div className="bg-[url('./assets/lines.png')] bg-[length:500px_40px] bg-center bg-no-repeat text-5xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>

      <div className="justify-between grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] gap-y-24 gap-x-6 mt-10">
        {SHOE_LIST.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} onClick={onClickCard} />
        ))}
      </div>
    </>
  );
};
