import React, { useContext } from "react";
import GlobalStates from "../Context";
import styled from "styled-components";
import Header from "../components/Header";
import Search from "../components/Search";
import Countries from "../components/Countries";

const ContainerGray = styled.div`
  background-color: ${(props) =>
    props.dark ? "var(--veryDarkBlue)" : "var(--veryLightGray)"};
`;

function Home() {
  const { dark } = useContext(GlobalStates);
  return (
    <div>
      <Header />
      <ContainerGray dark={dark}>
        <Search />
        <Countries />
      </ContainerGray>
    </div>
  );
}

export default Home;
