import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 56px;
`;

const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: var(--shadow);
  max-width: 120px;
  width: 100%;
  color: black;
  text-decoration: none;
  border-radius: 5px;
`;

function Back() {
  return (
    <Container>
      <BackBtn to="/">
        <BiArrowBack size={24} color="#000" style={{ marginRight: 8 }} />
        Back
      </BackBtn>
    </Container>
  );
}

export default Back;
