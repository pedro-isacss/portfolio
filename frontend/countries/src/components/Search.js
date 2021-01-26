import React from "react";
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

const Option = styled.option``;

function Search() {
  return (
    <Container>
      <Input placeholder="Search for a country..." />
      <Select placeholder="Selecione um estado">
        <option>Filter by Region</option>
        <option>wddwd</option>
        <option>wddwd</option>
        <option>wddwd</option>
      </Select>
    </Container>
  );
}

export default Search;
