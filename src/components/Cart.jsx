import { CartItem } from "./CartItem";

export const Cart = ({ cartItems, onClickTrash }) => {
  return (
    <>
      <h2 className="text-4xl font-bold">Cart</h2>
      <ul className="mt-5 space-y-5">
        {cartItems.map((cartItem, i) => (
          <li key={i}>
            <CartItem
              cartItem={cartItem}
              onClickTrash={() => onClickTrash(i)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
