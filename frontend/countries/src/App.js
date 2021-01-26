import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route name="home" path="/" exact component={Home} />
          <Route name="details" path="/:country" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
