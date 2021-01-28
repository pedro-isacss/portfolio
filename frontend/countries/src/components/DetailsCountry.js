import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 56px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 56px;
`;

const Flag = styled.img`
  max-width: 400px;
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
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnotherBtn = styled(Link)`
  margin: 8px 8px;
  padding: 4px 16px;
  box-shadow: var(--shadow);
  color: #000;
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

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${props.country}`)
      .then((response) => response.json())
      .then((res) => {
        setDataCountry(res);
        console.log(res);
      });
  }, [props.country]);
  return (
    <Container>
      <Flag src={dataCountry.flag} alt={dataCountry.name} />
      <InfoContainer>
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
                return <AnotherBtn to={"/" + another}>{another}</AnotherBtn>;
              })
            : " none"}
        </AnotherContainer>
      </InfoContainer>
    </Container>
  );
}

export default DetailsCountry;
