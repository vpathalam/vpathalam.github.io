import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Northeastern from "../../resources/northeastern.png";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ marginTop: "4px" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
          <img
            src={Northeastern}
            alt="northeastern"
            className="Northeastern"
            style={{ width: "150px" }}
          />
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "4px" }}>{this.props.schoolName}</h4>
          <p>Candidate for B.S. in Computer Science</p>
          <p>
            Relevant Coursework: Algorithms & Data Structures, Object Oriented
            Design, Computer Systems, Probability & Statistics, Linear Algebra,
            Discrete Structures, Logic & Computation, Embedded Systems Robotics,
            Database Design, Complete Data Science Training: Advanced Statistics
            in Python, Machine & Deep Learning (Udemy)
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
