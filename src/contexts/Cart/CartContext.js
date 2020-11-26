import React from "react";
import { getStorage } from "utils/storage";
import actions from "./cartActions";
import CartReducer, { doSumAndStore } from "./CartReducer";

const cartContext = React.createContext();

// fetches array of items in cart and returns empty arry if nothing exists
const memorizedState = getStorage("cart") ?? [];

// consists of an object containing array of items, total quantity, total price
const initialState = {
  cartItems: memorizedState,
  ...doSumAndStore(memorizedState)
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CartReducer, initialState);
  const { Provider } = cartContext;

  const increase = payload => {
    dispatch({ type: actions.INCREASE, payload });
  };

  const decrease = payload => {
    dispatch({ type: actions.DECREASE, payload });
  };

  const add = payload => {
    dispatch({ type: actions.ADD, payload });
  };

  const remove = payload => {
    dispatch({ type: actions.REMOVE, payload });
  };

  const clear = () => {
    dispatch({ type: actions.CLEAR });
  };

  const values = { increase, decrease, add, remove, clear, ...state };

  return <Provider value={values}>{children}</Provider>;
};

export default CartProvider;

// custom hook for accessing cart context
export const useCart = () => {
  const context = React.useContext(cartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
