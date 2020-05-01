import React, { Component } from "react";
import Profile from "../../resources/avatar.png";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid
          className="landing-grid"
          style={{ width: "100%", margin: "auto" }}
        >
          <Cell col={12}>
            <h1>Let me introduce myself...</h1>
            <div className="profile-text">
              <img alt="logo" className="profile" src={Profile} />
              <body>
                I'm third-year student at Northeastern University pursuing a
                B.S. in Computer Science. I consider myself as an adaptable
                engineer who has an understanding of a number of languages
                (notably Java, Python, C++, Javascript) and development styles
                (RESTFUL application deployment, embedded implementations,
                machine learning frameworks). I'm seeking a role to create
                impact in a software or machine learning environment.
              </body>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
