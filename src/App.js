import React from "react";
import "./App.css";
import Main from "./components/main.js";
import { Link } from "react-router-dom";
import {
  Layout,
  Header,
  Footer,
  FooterSection,
  Navigation,
  Drawer,
  Content,
} from "react-mdl";

function App() {
  return (
    <Layout>
      <Header
        transparent
        title="Vikram Pathalam"
        className="header-color"
        style={{ color: "white" }}
      >
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer title="Contents:">
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="Content" />
        <Main />
        <div>
          {/**/}
          <Footer size="mega">
            <FooterSection
              type="bottom"
              className="footie"
              logo="© Vikram Pathalam, 2020."
            />
          </Footer>
          {/**/}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
