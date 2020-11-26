import React from "react";
import { useCart } from "contexts/Cart/CartContext";
import colors from "styles/colors";
import styled from "styled-components";
import dollarFormat from "utils/formatCurrency";
import { FaPaypal } from "react-icons/fa";
import Paypal from "components/PayPal";

const CartFooter = () => {
  const { totalPrice, totalQuantity } = useCart();

  return (
    <Wrapper>
      <div className="cart-total">
        <p>Subtotal</p>
        <p>{dollarFormat(totalPrice)}</p>
      </div>

      <div className="cart-btns">
        {totalQuantity > 0 ? (
          <Paypal totalPrice={totalPrice} disabled={true} />
        ) : (
          <button disabled={true}>
            Checkout
            <FaPaypal fontSize={20} />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default CartFooter;

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem;
  border-top: 1px solid #d0d0d0;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1;
  background: ${colors.whiteSmoke};
  width: 100%;
  .cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-child {
      font-size: 1.4rem;
    }

    p:last-child {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  .cart-btns {
    margin-top: 1.5rem;

    button {
      width: 100%;
      text-transform: uppercase;
      height: 5rem;
      font-size: 1.2rem;
      font-weight: 300;

      /* &:last-child { */
      color: ${colors.white};
      margin-bottom: 15px;
      letter-spacing: 2px;
      background-color: #4b5548;
      vertical-align: middle;
      /* } */
      & svg {
        vertical-align: middle;
      }

      &:disabled,
      &[disabled] {
        background: #cdcdcd;
        cursor: not-allowed;
      }
    }
  }
`;
