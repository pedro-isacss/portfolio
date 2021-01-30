import React, { useContext } from "react";
import GlobalStates from "../Context";
import styled from "styled-components";
import down from "../images/down.png";
import searchIcon from "../images/search.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 56px;
  @media (max-width: 830px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 16px;
  box-shadow: ${(props) =>
    props.dark ? "var(--shadowBlack)" : "var(--shadow)"};
  max-width: 400px;
  width: 100%;
  background-color: ${(props) => (props.dark ? "var(--veryDarkBlue)" : "#fff")};
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  ::placeholder {
    color: ${(props) => (props.dark ? "#fff" : "#000")};
  }
  background-image: url(${searchIcon});
  background-size: 16px;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: left center;
  text-indent: 24px;
  @media (max-width: 830px) {
    max-width: 100%;
  }
`;

const Select = styled.select`
  border: none;
  border-radius: 5px;
  padding: 16px;
  box-shadow: ${(props) =>
    props.dark ? "var(--shadowBlack)" : "var(--shadow)"};
  background-color: ${(props) => (props.dark ? "var(--veryDarkBlue)" : "#fff")};
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  max-width: 200px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${down});
  background-size: 12px;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: right center;
  @media (max-width: 830px) {
    margin-top: 24px;
    max-width: 100%;
  }
`;

function Search() {
  const { search, setSearch, region, setRegion, dark } = useContext(
    GlobalStates
  );
  return (
    <Container>
      <Input
        dark={dark}
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
        dark={dark}
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
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
