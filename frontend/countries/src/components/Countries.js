import React, { useEffect, useState, useContext } from "react";
import GlobalStates from "../Context";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 56px 32px 56px;
  row-gap: 32px;
  column-gap: 32px;
  @media (max-width: 1120px) {
    grid-template-columns: 31% 31% 31%;
  }
  @media (max-width: 830px) {
    grid-template-columns: 48% 48%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (max-width: 460px) {
    grid-template-columns: 100%;
    padding: 16px 32px 32px 32px;
  }
`;

const Card = styled(Link)`
  width: 100%;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #000;
  height: 100%;
  text-decoration: none;
  padding-bottom: 16px;
  background-color: ${(props) =>
    props.dark ? "var(--darkBlue)" : "transparent"};
`;

const Flag = styled.img`
  width: 100%;
  max-height: 180px;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media (max-width: 460px) {
    max-height: 140px;
    height: 100%;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px 16px;
  color: ${(props) => (props.dark ? "#fff" : "#000")};
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
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [until, setUntil] = useState(8);
  const { search, region, dark } = useContext(GlobalStates);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((res) => {
        if (search !== "") {
          res = res.filter(
            (country) =>
              country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
          );
        }
        if (region !== "All regions") {
          res = res.filter((country) => country.region === region);
        }
        setCountries(res);
        if (total === 0) setTotal(res.length);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region]);

  const more = () => {
    if (until >= total) {
      setHasMore(false);
      return;
    }
    setUntil(until + 8);
  };

  return (
    <Container
      dataLength={until}
      next={() => more()}
      hasMore={hasMore}
      loader={
        <h4>
          Loading {until} de {total}
        </h4>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>That is all😃</b>
        </p>
      }
    >
      {countries.slice(0, until).map((country) => {
        return (
          <Card
            dark={dark}
            to={"/projects/frontend/countries/build/" + country.alpha2Code}
            key={country.name}
          >
            <Flag src={country.flag} alt="Ola" />
            <Infos dark={dark}>
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
