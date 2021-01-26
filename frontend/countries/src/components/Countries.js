import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  justify-content: space-between;
  padding: 16px 56px;
  row-gap: 0.3%;
`;

const Card = styled(Link)`
  max-width: 250px;
  width: 100%;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #000;
  text-decoration: none;
`;

const Flag = styled.img`
  width: 100%;
  max-height: 180px;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
  width: 19ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 300;
  margin: 4px 0;
`;

const SpanStrong = styled.span`
  font-weight: 600;
`;

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((res) => {
        setCountries(res);
      });
  }, []);

  return (
    <Container>
      {countries.map((country) => {
        return (
          <Card to={"/" + country.name}>
            <Flag src={country.flag} alt="Ola" />
            <Infos>
              <Title>{country.name}</Title>
              <Span>
                <SpanStrong>Population:</SpanStrong> {country.population}
              </Span>
              <Span>
                <SpanStrong>Region:</SpanStrong> {country.region}
              </Span>
              <Span>
                <SpanStrong>Capital:</SpanStrong> {country.capital}
              </Span>
            </Infos>
          </Card>
        );
      })}
    </Container>
  );
}

export default Countries;
