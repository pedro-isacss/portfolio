import React, { useContext } from "react";
import GlobalStates from "../Context";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Back from "../components/Back";
import DetailsCountry from "../components/DetailsCountry";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) =>
    props.dark ? "var(--veryDarkBlue)" : "var(--veryLightGray)"};
`;

function Details() {
  const { country } = useParams();
  const { dark } = useContext(GlobalStates);
  return (
    <Container dark={dark}>
      <Header />
      <Back />
      <DetailsCountry country={country} />
    </Container>
  );
}

export default Details;
