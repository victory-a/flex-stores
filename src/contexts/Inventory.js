import React from "react";
import data from "lib/data";

const InventoryContext = React.createContext();

const InventoryProvider = ({ children }) => {
  const { Provider } = InventoryContext;

  const [inventory] = React.useState(data ?? []);

  return <Provider value={{ inventory }}>{children}</Provider>;
};

export default InventoryProvider;
