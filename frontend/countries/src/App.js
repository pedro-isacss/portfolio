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
            <Route name="home" path="/" exact component={Home} />
            <Route name="details" path="/:country" component={Details} />
          </Switch>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
