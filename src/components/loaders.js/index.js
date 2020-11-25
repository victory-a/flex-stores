import React from "react";
import styled from "styled-components";
import { CgSpinner } from "react-icons/cg";
import colors from "styles/colors";

const FullSpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  svg {
    animation: rotate 0.9s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;

  svg {
    animation: rotate 0.9s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export function FullPageSpinner() {
  return (
    <FullSpinnerContainer>
      <CgSpinner fontSize={35} color={colors.battleShipGreen} aria-label="loading" />
    </FullSpinnerContainer>
  );
}

export function Spinner() {
  return (
    <SpinnerContainer>
      <CgSpinner color={colors.battleShipGreen} aria-label="loading" />
    </SpinnerContainer>
  );
}
