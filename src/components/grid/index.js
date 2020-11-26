import React from "react";
import { useCart } from "contexts/Cart/CartContext";
import colors from "styles/colors";
import styled from "styled-components";
import { device } from "styles/index";
import Button from "components/Button";
import Cart from "components/cart";
import dollarFormat from "utils/formatCurrency";
import { useQuery } from "react-query";
import SkeletonLoader from "components/loaders.js/SkeletonLoader";

const Grid = () => {
  const [inventory, setInventory] = React.useState([]);
  const { cartItems, add, increase } = useCart();

  const { status } = useQuery({
    queryKey: "get-inventory",
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then(response =>
        response.json().then(data => setInventory(data))
      )
  });

  function isAlreadyInCart(product) {
    return cartItems.find(item => item.id === product.id);
  }

  return (
    <Wrapper>
      <ul>
        {status === "success" ? (
          inventory.map(product => {
            const { id, title, price, image } = product;

            return (
              <StyledList key={`product-${id}`}>
                <img src={image} alt="item for sale" />
                <div className="info">
                  <p>{title}</p>
                  <h2>{dollarFormat(price)}</h2>
                </div>
                {isAlreadyInCart(product) ? (
                  <Button onClick={() => increase(id)}>Add more</Button>
                ) : (
                  <Button onClick={() => add(product)}>Add to cart</Button>
                )}
              </StyledList>
            );
          })
        ) : (
          <SkeletonLoader />
        )}
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
  height: 30rem;
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
      font-size: 1.8rem;
      padding: 0.5rem 0;
      font-weight: bold;
      margin-top: auto;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
