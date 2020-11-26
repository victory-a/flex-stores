import actions from "./cartActions";
import { setStorage } from "utils/storage";

// stores item array in localstorage,
// computes the total quantity of items and computes the total price,
// returns an object containing total quantity and total price;

export const doSumAndStore = cartItems => {
  setStorage("cart", cartItems);

  let totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0);

  let totalPrice = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { totalQuantity, totalPrice };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREASE:
      state.cartItems[state.cartItems.findIndex(item => item.id === action.payload)].quantity++;
      return {
        ...state,
        ...doSumAndStore(state.cartItems),
        cartItems: [...state.cartItems]
      };

    case actions.DECREASE: {
      const target = state.cartItems.findIndex(item => item.id === action.payload);
      if (state.cartItems[target].quantity > 1) {
        state.cartItems[state.cartItems.findIndex(item => item.id === action.payload)].quantity--;
        return {
          ...state,
          ...doSumAndStore(state.cartItems),
          cartItems: [...state.cartItems]
        };
      }
      return state;
    }

    case actions.ADD:
      if (!state.cartItems.find(item => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }

      return {
        ...state,
        ...doSumAndStore(state.cartItems),
        cartItems: [...state.cartItems]
      };

    case actions.REMOVE:
      return {
        ...state,
        ...doSumAndStore(state.cartItems.filter(item => item.id !== action.payload)),
        cartItems: [...state.cartItems.filter(item => item.id !== action.payload)]
      };

    case actions.CLEAR:
      return {
        cartItems: [],
        ...doSumAndStore([])
      };

    default:
      return state;
  }
};

export default CartReducer;
