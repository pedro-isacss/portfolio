import React, { useEffect, useState, useContext } from "react";
import GlobalStates from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 56px;
  background-color: ${(props) =>
    props.dark ? "var(--veryDarkBlue)" : "var(--veryLightGray)"};
  @media (max-width: 860px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 56px;
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  @media (max-width: 860px) {
    padding: 24px 0;
    align-self: flex-start;
  }
`;

const Flag = styled.img`
  max-width: 400px;
  width: 100%;
  @media (max-width: 860px) {
    max-width: 100%;
  }
`;

const Span = styled.span`
  margin: 4px 0;
`;

const SpanStrong = styled.span`
  font-weight: 600;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 56px;
  margin-top: 24px;
  @media (max-width: 860px) {
    grid-template-columns: auto;
    row-gap: 24px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnotherBtn = styled(Link)`
  margin: 8px 8px;
  padding: 4px 16px;
  box-shadow: ${(props) =>
    props.dark ? "var(--shadowBlack)" : "var(--shadow)"};
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  text-decoration: none;
  border-radius: 5px;
`;

const AnotherContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
`;

function DetailsCountry(props) {
  const [dataCountry, setDataCountry] = useState({});
  const { dark } = useContext(GlobalStates);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${props.country}`)
      .then((response) => response.json())
      .then((res) => {
        setDataCountry(res);
      });
  }, [props.country]);
  return (
    <Container dark={dark}>
      <Flag src={dataCountry.flag} alt={dataCountry.name} />
      <InfoContainer dark={dark}>
        <h1>{dataCountry.name}</h1>
        <Grid>
          <Column>
            <Span>
              <SpanStrong>Native Name:</SpanStrong> {dataCountry.nativeName}
            </Span>
            <Span>
              <SpanStrong>Population:</SpanStrong> {dataCountry.population}
            </Span>
            <Span>
              <SpanStrong>Region:</SpanStrong> {dataCountry.region}
            </Span>
            <Span>
              <SpanStrong>Sub Region:</SpanStrong> {dataCountry.subregion}
            </Span>
            <Span>
              <SpanStrong>Capital:</SpanStrong> {dataCountry.capital}
            </Span>
          </Column>
          <Column>
            <Span>
              <SpanStrong>Top Level Domain:</SpanStrong>{" "}
              {dataCountry.topLevelDomain}
            </Span>
            <Span>
              <SpanStrong>Currencie:</SpanStrong>{" "}
              {dataCountry.currencies !== undefined
                ? dataCountry.currencies.map((money, index) => {
                    if (index === dataCountry.currencies.length - 1) {
                      return money.name;
                    } else {
                      return money.name + ", ";
                    }
                  })
                : " none"}
            </Span>
            <Span>
              <SpanStrong>Language:</SpanStrong>{" "}
              {dataCountry.languages !== undefined
                ? dataCountry.languages.map((lang, index) => {
                    if (index === dataCountry.languages.length - 1) {
                      return lang.name;
                    } else {
                      return lang.name + ", ";
                    }
                  })
                : " none"}
            </Span>
          </Column>
        </Grid>
        <AnotherContainer>
          <SpanStrong>Border Countries: </SpanStrong>
          {dataCountry.borders !== undefined && dataCountry.borders.length !== 0
            ? dataCountry.borders.map((another) => {
                return (
                  <AnotherBtn
                    dark={dark}
                    to={"/portfolio/frontend/countries/build/" + another}
                  >
                    {another}
                  </AnotherBtn>
                );
              })
            : " none"}
        </AnotherContainer>
      </InfoContainer>
    </Container>
  );
}

export default DetailsCountry;
