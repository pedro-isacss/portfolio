import React, { useContext } from "react";
import GlobalStates from "../Context";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 56px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 16px;
  box-shadow: var(--shadow);
  max-width: 400px;
  width: 100%;
`;

const Select = styled.select`
  border: none;
  border-radius: 5px;
  padding: 16px;
  box-shadow: var(--shadow);
  max-width: 200px;
  width: 100%;
  background-color: var(--white);
  background-origin: content-box;
`;

function Search() {
  const { search, setSearch, region, setRegion } = useContext(GlobalStates);
  return (
    <Container>
      <Input
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="All regions">All regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </Container>
  );
}

export default Search;
