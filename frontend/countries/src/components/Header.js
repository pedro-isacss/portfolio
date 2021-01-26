import React from "react";
import styled from "styled-components";
import { RiMoonLine } from "react-icons/ri";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 56px;
  border-bottom: 3px solid rgba(0, 0, 200, 0.1);
`;

const Title = styled.h1``;

const DarkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-weight: 600;
  border: none;
`;

function Header() {
  return (
    <Container>
      <Title>Where in the world?</Title>
      <DarkButton>
        <RiMoonLine size={24} color="#000" style={{ marginRight: 8 }} />
        Dark mode
      </DarkButton>
    </Container>
  );
}

export default Header;
