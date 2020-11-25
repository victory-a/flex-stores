import React from "react";
import { useCartControl } from "contexts/CartControl";
import styled from "styled-components";
import colors from "styles/colors";
import Button from "components/Button";
import { BiCart } from "react-icons/bi";

const Header = () => {
  const [, setIsOpen] = useCartControl();

  return (
    <Wrapper>
      <div>
        <h1>Flex Stores</h1>
        <p>
          Shop till you drop{" "}
          <span aria-label="cash smiley" role="img">
            🤑
          </span>
        </p>
      </div>

      <Button onClick={setIsOpen}>
        <BiCart />
        View Cart
      </Button>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;

  & > div {
    margin: 0 3rem;
    h1 {
      color: ${colors.battleShipGreen};
      font-weight: bold;
      font-size: 2.8rem;
      letter-spacing: 1px;
    }
    p {
      font-size: 1.3rem;
      padding: 0 0.5rem;
    }

    & span {
      font-size: 18px;
      vertical-align: middle;
    }
  }
`;
