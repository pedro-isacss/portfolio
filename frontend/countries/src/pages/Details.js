import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { country } = useParams();
  return (
    <div>
      <div>
        <h1>{country}</h1>
        <h2>Details</h2>
      </div>
    </div>
  );
}

export default Details;
