import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <div className="resume-page">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}></div>
          </Cell>
          <Cell col={8} className="resume-right-col">
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
