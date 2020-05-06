import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Work extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p className="timeframe" style={{ marginTop: "4px" }}>
            {this.props.start} - {this.props.end}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 className="workname" style={{ marginTop: "4px" }}>
            {this.props.company}
          </h4>
          <p className="position">{this.props.position}</p>
          <p className="exp-description">{this.props.description}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Work;
