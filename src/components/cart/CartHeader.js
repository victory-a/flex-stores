import React from "react";
import { useCart } from "contexts/Cart/CartContext";
import colors from "styles/colors";
import styled from "styled-components";
import { ClearButton } from "components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { useCartControl } from "contexts/ToggleCart";

const CartHeader = () => {
  const [, setIsOpen] = useCartControl();
  const { clear, totalQuantity } = useCart();

  return (
    <Wrapper>
      <button onClick={() => setIsOpen(false)}>
        Hide
        <IoIosArrowForward size={20} />
      </button>
      <h2>Your Cart</h2>
      <ClearButton onClick={clear} disabled={Boolean(totalQuantity === 0)}>
        <BsTrash />
        Clear
      </ClearButton>
    </Wrapper>
  );
};

export default CartHeader;

const Wrapper = styled.header`
  height: 7rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #d0d0d0;

  & button:first-of-type {
    cursor: pointer;
    background: transparent;
    border-radius: 5px;
    border: none;
    width: 70px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    &:hover {
      background: ${colors.battleShipGreen};
      color: ${colors.white};
    }
  }

  & h2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: ${colors.battleShipGreen};
  }
`;
