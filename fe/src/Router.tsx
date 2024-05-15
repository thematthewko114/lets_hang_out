import { Route, Router } from "@solidjs/router";
import { Component } from "solid-js";
import HomePage from "./pages/home/page";
import AboutPage from "./pages/about/page";
import NotFoundPage from "./pages/not_found/page";

const RouterComponent: Component = () => {
    return (
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="*" component={NotFoundPage} />
      </Router>
    );
  };
  
  export default RouterComponent;
  