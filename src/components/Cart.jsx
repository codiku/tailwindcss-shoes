import { CartItem } from "./CartItem";

export const Cart = ({ cart, onClickTrash }) => {
  return (
    <>
      <h2 className="text-4xl font-bold">Cart</h2>
      <ul className="mt-5 space-y-5">
        {cart.map((shoe, i) => (
          <li key={i}>
            <CartItem shoe={shoe} onClickTrash={() => onClickTrash(i)} />
          </li>
        ))}
      </ul>
    </>
  );
};
