import React from "react";
import colors from "styles/colors";
import styled from "styled-components";
import { device } from "styles/index";
import data from "lib/data";
import Button from "components/Button";
import Cart from "components/cart";
import dollarFormat from "utils/formatCurrency";

const Grid = () => {
  return (
    <Wrapper>
      <ul>
        {data
          ? data.map(({ id, title, price, image }) => (
              <StyledList key={id}>
                <img src={image} alt="item for sale" />
                <div className="info">
                  <h2>{title}</h2>
                  <p>{dollarFormat(price)}</p>
                </div>
                <Button>Add to cart</Button>
              </StyledList>
            ))
          : null}
      </ul>

      <Cart />
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.main`
  background: ${colors.white};
  min-height: calc(100vh - 10rem);
  width: 100%;
  padding: 1.2rem;

  @media ${device.tablet} {
    padding: 2.5rem;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
  }
`;

const StyledList = styled.li`
  width: 23rem;
  height: 28rem;
  padding: 1.5rem 0.5rem;
  background: ${colors.white};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
  border: 1px solid ${colors.battleShipGreen};

  &:hover {
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.12), 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.08);
  }

  img {
    width: 17rem;
    height: 10rem;
    object-fit: contain;
  }

  & .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    text-align: center;

    h2 {
      font-size: 1.4rem;
      padding: 0.5rem 0;
    }

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
