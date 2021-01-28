import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Back from "../components/Back";
import DetailsCountry from "../components/DetailsCountry";

function Details() {
  const { country } = useParams();
  return (
    <div>
      <Header />
      <Back />
      <DetailsCountry country={country} />
    </div>
  );
}

export default Details;
