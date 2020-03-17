import React from "react";
import { node } from "prop-types";
import styled from "styled-components";
import TopBar from "./TopBar";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 17%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 60px;
  border-radius: 10px;
  background: white;
  box-shadow: -5px 2px 26px 0px rgba(0, 0, 0, 0.44);
`;

const ScreenContainer = ({ children }) => {
  return (
    <Container>
      <TopBar />
      <ChildContainer>{children}</ChildContainer>
    </Container>
  );
};

ScreenContainer.propTypes = {
  children: node.isRequired
};

export default ScreenContainer;
