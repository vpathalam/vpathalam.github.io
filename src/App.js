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
  Button,
} from "react-mdl";

function App() {
  return (
    <Layout>
      <Header
        transparent
        title="VIKRAM PATHALAM"
        className="header-color"
        style={{ color: "black" }}
      >
        <Navigation>
          <Link to="/" style={{ color: "black" }}>
            HOME
          </Link>
          <Link to="/about" style={{ color: "black" }}>
            ABOUT
          </Link>
          <Link to="/experience" style={{ color: "black" }}>
            EXPERIENCE
          </Link>
          <Link to="/projects" style={{ color: "black" }}>
            PROJECTS
          </Link>
          <Link to="/contact" style={{ color: "black" }}>
            CONTACT
          </Link>
        </Navigation>
        <a
          href="mailto:vpathalam@gmail.com?subject=Request%20for%20most%20recent%20resume%20:%20<Insert%20Name/Company%20Here>"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button raised colored ripple>
            REQUEST RESUME
          </Button>
        </a>
      </Header>
      <Drawer title="Contents:">
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
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
              logo="Created by Vikram Pathalam, 2020."
            />
          </Footer>
          {/**/}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
