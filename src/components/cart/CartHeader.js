import React from "react";
import colors from "styles/colors";
import styled from "styled-components";
import { ClearButton } from "components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useCartControl } from "contexts/CartControl";

const CartHeader = () => {
  const [, setIsOpen] = useCartControl();

  return (
    <Wrapper>
      <button onClick={() => setIsOpen(false)}>
        <IoIosArrowBack size={20} />
      </button>
      <h2>Your Cart</h2>
      <ClearButton>Clear cart</ClearButton>
    </Wrapper>
  );
};

export default CartHeader;

const Wrapper = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & button:first-of-type {
    cursor: pointer;
    background: transparent;
    border-radius: 5px;
    border: none;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    &:hover {
      background: rgba(75, 85, 72, 0.2);
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
