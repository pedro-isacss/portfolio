import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Context } from "./Context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Switch>
            <Route
              name="home"
              path="/projects/frontend/countries/build/index.html"
              exact
              component={Home}
            />
            <Route
              name="details"
              path="/projects/frontend/countries/build/:country"
              component={Details}
            />
          </Switch>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
