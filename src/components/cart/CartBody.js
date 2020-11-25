import React from "react";
// import cartData from "lib/cartData";
// import colors from "styles/colors";
import styled from "styled-components";

const CartBody = () => {
  return (
    <Wrapper>
      <p>cart body</p>
    </Wrapper>
  );
};

export default CartBody;

const Wrapper = styled.ul`
  border: 1px solid red;
  min-height: calc(100vh - 4rem);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
