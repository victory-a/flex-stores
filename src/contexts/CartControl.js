import React from "react";

const cartContext = React.createContext();

const CartControlProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { Provider } = cartContext;

  return <Provider value={[isOpen, setIsOpen]}>{children}</Provider>;
};

export const useCartControl = () => {
  const context = React.useContext(cartContext);

  if (!context) {
    throw new Error("useCartControl must be used within a CartControlProvider");
  }

  return context;
};

export default CartControlProvider;
