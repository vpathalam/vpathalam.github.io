import React from "react";

import Landing from "./landing/landing.js";
import About from "./about/about.js";
import Experience from "./experience/experience.js";
import Contact from "./contact/contact.js";
import Projects from "./projects/projects.js";


import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/experience" component={Experience} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
