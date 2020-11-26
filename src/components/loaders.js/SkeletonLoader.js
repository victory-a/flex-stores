import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";

const SkeletonLoader = () => {
  return (
    <SkeletonTheme color="rgba(10,46,101,0.04)" highlightColor="rgba(186, 198, 216, 0.04)">
      <Container>
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
        <ListItems />
      </Container>
    </SkeletonTheme>
  );
};

export default SkeletonLoader;

const ListItems = () => (
  <Box>
    <Skeleton duration={1} height="100%" width="100%" />
  </Box>
);

const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

const Box = styled.div`
  width: 23rem;
  height: 28rem;
  padding: 1.5rem 0.5rem;
  border-radius: 3px;
`;
