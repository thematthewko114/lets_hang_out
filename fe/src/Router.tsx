import { Route, Router } from "@solidjs/router";
import { Component } from "solid-js";
import HomePage from "./pages/home/page";
import AboutPage from "./pages/about/page";

const RouterComponent: Component = () => {
    return (
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    );
  };
  
  export default RouterComponent;
  