import { CartItem } from "./CartItem";

export const Cart = ({ cartItems }) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold">Cart</h2>
      <ul className=" space-y-5">
        {cartItems.map((cartItem, i) => (
          <li key={i}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  );
};
