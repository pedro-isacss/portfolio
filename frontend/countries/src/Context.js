import React, { useState } from "react";

const GlobalStates = React.createContext();

export function Context(props) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All regions");
  return (
    <GlobalStates.Provider value={{ search, setSearch, region, setRegion }}>
      {props.children}
    </GlobalStates.Provider>
  );
}

export default GlobalStates;
