import React from "react";
import { useCartControl } from "contexts/CartControl";
import colors from "styles/colors";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import styled from "styled-components";

const Cart = () => {
  const [isOpen] = useCartControl();

  // disable grid scroll when cart is open
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <Wrapper className={isOpen ? "open" : null}>
      <div>
        <CartHeader />
        <CartBody />
        <CartFooter />
      </div>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(230, 230, 230, 0.7);
  backdrop-filter: blur(2px);
  visibility: hidden;
  transition: visibility 0.3s ease-in-out 0.1s;

  & > div {
    background: ${colors.whiteSmoke};
    height: 100vh;
    overflow-y: hidden;
    padding: 0 1.5rem;
    position: fixed;
    max-width: 550px;
    width: 100%;
    top: 0;
    right: 0;
    left: auto;
    opacity: 0;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.28, 0.47, 0.29, 0.86), opacity 0.4s ease-in-out 0.1s;
  }

  &.open {
    visibility: visible;

    & > div {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
