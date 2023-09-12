import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-yellow-300 text-black rounded-md flex"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
        {cartItems.length == 0 && (
          <h1 className="font-bold text-xl">Cart is empty, Add items</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
