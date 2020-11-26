import React from "react";

const cartContext = React.createContext();

const ToggleCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { Provider } = cartContext;

  return <Provider value={[isOpen, setIsOpen]}>{children}</Provider>;
};

// custom hook for accessing cart control
export const useCartControl = () => {
  const context = React.useContext(cartContext);

  if (!context) {
    throw new Error("useCartControl must be used within a CartToggleProvider");
  }

  return context;
};

export default ToggleCartProvider;
