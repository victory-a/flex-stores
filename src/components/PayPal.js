import React from "react";
import { useCart } from "contexts/Cart/CartContext";
import { useCartControl } from "contexts/ToggleCart";
import doAlert from "components/doAlert";

import { PayPalButton } from "react-paypal-button-v2";

function PayPal({ totalPrice }) {
  const { clear } = useCart();
  const [, setIsOpen] = useCartControl();

  return (
    <PayPalButton
      amount={totalPrice}
      style={{ color: "black" }}
      onSuccess={(details, data) => {
        doAlert("Transaction Successful", "success");
        // clear cart
        clear();
        // close cart
        setIsOpen(false);
      }}
      catchError={err => doAlert("Transaction Failed", "error")}
      onError={err => doAlert("An error occured, Try again", "error")}
    />
  );
}

export default PayPal;
