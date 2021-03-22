import React, { useContext } from "react";
import GlobalStates from "../Context";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 56px;
  background-color: ${(props) =>
    props.dark ? "var(--veryDarkBlue)" : "var(--veryLightGray)"};
  @media (max-width: 460px) {
    padding: 24px 32px;
  }
`;

const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: ${(props) =>
    props.dark ? "var(--shadowBlack)" : "var(--shadow)"};
  max-width: 120px;
  width: 100%;
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  text-decoration: none;
  border-radius: 5px;
`;

function Back() {
  const { dark } = useContext(GlobalStates);
  return (
    <Container dark={dark}>
      <BackBtn dark={dark} to="/">
        <BiArrowBack
          size={24}
          color={dark ? "#fff" : "#000"}
          style={{ marginRight: 8 }}
        />
        Back
      </BackBtn>
    </Container>
  );
}

export default Back;
