import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education.js";

class Experience extends Component {
  render() {
    return (
      <div className="resume-page">
        <Grid>
          {/*Left Side*/}
          <Cell col={4}>
            <h2 style={{ color: "grey" }}>Skills</h2>
            <hr style={{ borderTop: "3px solid #000000", width: "50%" }} />
            <h4 style={{ color: "grey" }}>Primary Languages:</h4>
            <p>• Java</p>
            <p>• Python</p>
            <p>• C</p>
            <p>• C++</p>
            <p>• SQL</p>
            <p>• React.js</p>
            <p>• Node.js</p>
            <p>• HTML</p>
            <p>• CSS</p>
            <p>• X64 Assembly</p>
            <p>• Racket(Scheme</p>
            <p>• ACL2S</p>
            <h4 style={{ color: "grey" }}>Secondary Languages:</h4>
            <h4 style={{ color: "grey" }}>Technologies/Environment:</h4>
          </Cell>
          {/*Right Side*/}
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <hr style={{ borderTop: "3px solid", width: "50%" }} />
            <Education />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
