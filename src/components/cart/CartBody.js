import React from "react";
import { useCart } from "contexts/Cart/CartContext";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { QuantityButton } from "components/Button";
import dollarFormat from "utils/formatCurrency";
import { EmptyState } from "components/EmptyState";

const CartBody = () => {
  const { cartItems, increase, decrease, remove } = useCart();

  return (
    <Wrapper>
      {cartItems.length > 0 ? (
        cartItems.map(product => {
          const { title, price, quantity, image, id } = product;
          return (
            <CartItem key={`cartItem-${id}`}>
              <h3>{title}</h3>
              <div className="content">
                <div className="controls">
                  <p>{dollarFormat(price)}</p>
                  <QuantityButton>
                    <button className="selector" onClick={() => decrease(id)}>
                      -
                    </button>
                    <p>{quantity}</p>
                    <button className="selector" onClick={() => increase(id)}>
                      +
                    </button>
                  </QuantityButton>
                </div>
                <img src={image} alt="" />
                <button className="cancel" onClick={() => remove(id)}>
                  <IoMdClose fontSize={20} />
                </button>
              </div>
            </CartItem>
          );
        })
      ) : (
        <EmptyState />
      )}
    </Wrapper>
  );
};

export default CartBody;

const Wrapper = styled.ul`
  max-height: calc(100vh - 5rem);
  padding: 2rem 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & li:last-child {
    margin-bottom: 17rem;
  }
`;

const CartItem = styled.li`
  width: 100%;
  background: #fff;
  margin-bottom: 1rem;
  padding: 0.5rem;

  h3 {
    text-align: center;
    font-size: 1.2rem;
    color: #1e2d2b;
    margin-top: 0.5rem;
    padding: 0 0.8rem;
  }

  & .content {
    padding: 0.8rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;

    & .controls {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 1.3rem;
        margin: 1rem 0;
      }

      & > p {
        font-weight: bold;
      }
    }

    img {
      max-width: 70px;
      max-height: 70px;
      object-fit: contain;
    }

    & button.cancel {
      cursor: pointer;
      background: transparent;
      border-radius: 50%;
      border: none;
      width: 40px;
      height: 40px;
      outline: none;

      &:hover {
        background: rgba(255, 0, 0, 0.1);
      }
    }
  }
`;
