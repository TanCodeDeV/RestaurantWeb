import { useDispatch, useSelector } from "react-redux";
import FoodItemList from "./FoodItemList";
import { emptyCart } from "../utils/AppStore/CartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart page items:");
  console.log(cartItems);
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(emptyCart());
  };

  return (
    <div>
      <h1 className="font-bold ml-[50rem]">Cart Page</h1>
      <div className="cart-buttons">
        <button
          className="button px-4 py-1 m-4 bg-gray-100  border-2 border-gray-500 rounded-lg  hover:bg-pink-100 hover:border-black ml-[50rem]"
          onClick={removeCartItem}
        >
          Clear Cart
        </button>
      </div>
      <div className="cart-items w-6/12 m-auto">
        <FoodItemList items={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
