import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Logo from "../../resources/logo.png";
import Linkedin from "../../resources/social-icons/linkedin.png";
import Github from "../../resources/social-icons/Github.png";
import Gmail from "../../resources/social-icons/g+.png";
import Skype from "../../resources/social-icons/skype.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", color: "black" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <img alt="logo" className="logo" src={Logo} />
              <hr />
              <h1>Student | Software Engineer | Hobbyist</h1>
              <div className="social-links">
                {/* Linkedin Icon */}
                <a
                  href="https://www.linkedin.com/in/vikram-pathalam/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={Linkedin} alt="linkedin" className="Linkedin" />
                </a>
                {/* Github Icon */}
                <a
                  href="https://github.com/vpathalam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={Github} alt="github" className="Github" />
                </a>
                {/* Gmail Icon */}
                <a
                  href="mailto:vpathalam@gmail.com?subject=%20Profile%20Outreach"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={Gmail} alt="gmail" className="Gmail" />
                </a>
                {/* Skype Icon */}
                <a
                  href="skype:vpathalam?add"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={Skype} alt="skype" className="Skype" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
