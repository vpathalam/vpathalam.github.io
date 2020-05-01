import React from "react";

import Landing from "./landing/landing.js";
import About from "./about/about.js";
import Resume from "./resume/resume.js";
import Contact from "./contact/contact.js";
import Projects from "./projects/projects.js";


import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
