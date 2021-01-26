import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Search from "../components/Search";
import Countries from "../components/Countries";

const ContainerGray = styled.div`
  background-color: var(--veryLightGray);
`;

function Home() {
  return (
    <div>
      <Header />
      <ContainerGray>
        <Search />
        <Countries />
      </ContainerGray>
    </div>
  );
}

export default Home;
