import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Work extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ marginTop: "4px" }}>July 2019 - Jan 2020</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "4px" }}>
            Raytheon Space & Airborne Systems
          </h4>
          <i>Software Engineering Co-op</i>
          <p>
            • Improved satellite communications feature for message transmission
            time by 40% using C++, Rhapsody
          </p>
          <p>
            • Implemented cyber infiltration protocol in embedded environment
            using Java, Angular
          </p>
          <p>
            • Formulated agile metrics application; used by 3 teams, reduced
            report generation by 60% using Python, REST API
          </p>
          <p>
            • Ported flight recording application to parse large text files for
            TCP/IP protocol integration using C#, Java
          </p>
          <p>
            • Developed new user setup package for onboarding 30 employees using
            Python
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Work;
