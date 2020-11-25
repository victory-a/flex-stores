import React from "react";
import cartData from "lib/data";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { QuantityButton } from "components/Button";
import dollarFormat from "utils/formatCurrency";

const CartBody = () => {
  return (
    <Wrapper>
      {cartData
        ? cartData.map(({ title, price, image, id }) => (
            <CartItem key={id}>
              <h3>{title}</h3>
              <div className="content">
                <div className="controls">
                  <p>{dollarFormat(price)}</p>
                  <QuantityButton>
                    <button className="selector">-</button>
                    <p>{0}</p>
                    <button className="selector">+</button>
                  </QuantityButton>
                </div>
                <img src={image} alt="" />
                <button className="cancel">
                  <IoMdClose fontSize={20} />
                </button>
              </div>
            </CartItem>
          ))
        : null}
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
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CartItem = styled.li`
  width: 100%;
  /* height: 140px; */
  background: #fff;
  padding: 0.5rem 0;
  margin-bottom: 1rem;

  h3 {
    text-align: center;
    font-size: 1.2rem;
    color: #1e2d2b;
    margin-top: 0.5rem;
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
