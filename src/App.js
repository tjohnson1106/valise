import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
