import React, { useContext } from "react";
import GlobalStates from "../Context";
import styled from "styled-components";
import { RiMoonLine, RiMoonClearFill } from "react-icons/ri";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 56px;
  border-bottom: ${(props) =>
    props.dark ? "none" : "3px solid rgba(0, 0, 200, 0.1)"};
  background-color: ${(props) => (props.dark ? "var(--darkBlue)" : "#fff")};
`;

const Title = styled.h1`
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  @media (max-width: 560px) {
    font-size: 1.2em;
  }
  @media (max-width: 420px) {
    font-size: 0.8em;
  }
`;

const DarkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-weight: 600;
  border: none;
  color: ${(props) => (props.dark ? "#fff" : "#000")};
`;

function Header() {
  const { dark, setDark } = useContext(GlobalStates);
  return (
    <Container dark={dark}>
      <Title dark={dark}>Where in the world?</Title>
      <DarkButton dark={dark} onClick={() => setDark(!dark)}>
        {dark ? (
          <RiMoonClearFill size={16} color="#fff" style={{ marginRight: 8 }} />
        ) : (
          <RiMoonLine size={16} color="#000" style={{ marginRight: 8 }} />
        )}
        Dark mode
      </DarkButton>
    </Container>
  );
}

export default Header;
