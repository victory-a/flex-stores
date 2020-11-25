import React from "react";
import styled from "styled-components";
import { ReactComponent as EmptyLogo } from "assets/empty-saved.svg";

export function EmptyState() {
  return (
    <EmptyContainer>
      <EmptyLogo />

      <div>
        <p>
          Cart empty{" "}
          <span role="img" aria-label="cash smiley">
            😞
          </span>
          spend this money
        </p>
      </div>
    </EmptyContainer>
  );
}

export const EmptyContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  text-align: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 2rem;
  }

  svg {
    width: initial;
    height: initial;
  }
`;
