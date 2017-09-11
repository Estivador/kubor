import React from "react";
import { Route, Switch } from "react-router-dom";

//import "bulma/css/bulma.css";
import "../styles/bulma.css";
import "./App.css";
//import "font-awesome/css/font-awesome.min.css";

import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

import Dashboard from "./Dashboard";
import About from "./About";
import Topics from "./Topics";
import NoMatch from "./NoMatch";
import Home from "./Home";

import Overview from "./Overview";
import Reports from "./Reports";
import Forecasts from "./Forecasts";

const App = () => (
  <div>
    <TopBar />

    <div className="columns is-marginless is-maincontent">
      <SideBar />

      <MainContent>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/forecasts" component={Forecasts} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </MainContent>
    </div>
  </div>
);

export default App;
