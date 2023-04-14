import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education.js";
import Work from "./work.js";

class Experience extends Component {
  render() {
    return (
      <div className="resume-page">
        <Grid>
          {/*Left Side*/}
          <Cell col={4}>
            <h2>Skills</h2>
            <hr style={{ borderTop: "3px solid #000000", width: "50%" }} />
            <h4 className="workname">Primary Languages:</h4>
            <p className="exp-description">
              • C++
              <br /> • Python
              <br />• Java
              <br />• C
              <br />• SQL
              <br />• React.js
              <br />• Angular
              <br />• HTML
              <br />• CSS
              <br />• Bash Shell
            </p>
            <h4 className="workname">Secondary Languages:</h4>
            <p className="exp-description">
              • JavaScript
              <br /> • Go
              <br /> • C#
              <br />• Matlab
              <br />• Swift
              <br />• VisualBasic
            </p>
            <h4 className="workname">Platforms & Applications:</h4>
            <p className="exp-description">
              • Git
              <br /> • BitBucket
              <br />• Jira (Agile/Scrum)
              <br />• ROS
              <br />• Gazebo
              <br />• Linux
              <br />• Vim
              <br />• MySQL Workbench
              <br />• PostgreSQL
              <br />• Django
              <br />• Flask
              <br />• MongoDB
              <br />• PyTorch
              <br />• Scikit-learn
              <br />• Keras
              <br />• OpenCV
              <br />• Jupyter Notebook
              <br />• Rhapsody
              <br />• CATIA MBSE
              <br />• CARLA
              <br />• Jenkins
              <br />• Docker
              <br />• Kubernetes
              <br />• Conan
              <br />• CMake
              <br />• AWS
              <br />• MATLAB
              <br />• Simulink
              <br />• FPGA
            </p>
          </Cell>
          {/*Right Side*/}
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Education
              startYear="2017"
              endYear="2021"
              schoolName="Northeastern University"
            />
            <hr
              style={{ borderTop: "3px solid", width: "50%", color: "black" }}
            />
            <h2>Work Experience</h2>
            <Work
              company="Amazon Prime Air"
              position="Software Engineer - Drone Delivery"
              start="2021"
              end="2023"
              description={
                <span>
                  • Developed vehicle software pertaining to core decision-making, planning, and simulations using C++, Python
                  <br />
                  • Led design, implementation, demonstration of emergency landing capability across vehicle deployments
                  <br />
                  • Implemented evasive maneuver functionality to maintain nominal deconfliction from planned obstacles & UFOs
                  <br />
                  • Aggregated telemetry and subsystem outputs to execute maneuvers, manage health, and determine contingencies
                  <br />
                  • Defined requirements to assert safety and determine behavior in complex scenarios with perceptual uncertainties
                  <br />
                  • Developed phase of flight API to assert behavior relative to mission-significant waypoints for external stakeholders
                  <br />
                  • Implemented absolute and relative frame route planners to structure vehicle path in standard and test missions
                  <br />
                  • Performed requirements-based regression testing across simulation fidelities, optimized test suite runtime by 38%
                  <br />
                  • Drove technical resolution across subsystems, addressing ad-hoc communications for simulated and real flights
                  <br />
                  • Maintained pipelines and package versioning for hot fix and major software releases
                </span>
              }
            />
            <Work
              company="The Aerospace Corporation"
              position="Autonomous Systems Intern (DoD Secret Clearance)"
              start="2020"
              end="2021"
              description={
                <span>
                  • Developed autonomous vehicle simulation to spearhead ‘Multipurpose Operational Modes of Autonomy’ research initiative with obstacle avoidance, simultaneous localization and mapping using ROS, Gazebo, Python
                  <br />
                  • Implemented Deep-Q Network reinforcement learning approach for autonomous navigation of simulated agents using CARLA, OpenCV, Python
                  <br />
                  • Extended object detection capability of UAS video tracking
                  package using YOLO, Python, PyTorch
                  <br />
                  • Implemented queries, testing for space traffic
                  management system using Java, SQL
                  <br />
                  • Developed interactive data visualization platform for space infrastructure and VR implementations using Unity, C#
                </span>
              }
            />
            <Work
              company="Raytheon Space & Airborne Systems"
              position="Software Engineering Co-op (DoD Secret Clearance)"
              start="2019"
              end="2020"
              description={
                <span>
                  • Improved satellite communications feature for message
                  transmission time by 40% using C++, Rhapsody
                  <br />
                  • Implemented cyber infiltration protocol in embedded
                  environment using Java, Angular
                  <br />
                  • Formulated agile metrics application; used by 3 teams,
                  reduced report generation by 60% using Python, REST API
                  <br />
                  • Ported flight recording application to parse large text
                  files for TCP/IP protocol integration using C#, Java
                  <br />
                  • Developed new user setup package for onboarding 30
                  employees using Python
                </span>
              }
            />
            <Work
              company="Northeastern University Khoury College of Computer Sciences"
              position="Research Assistant: Artificial Intelligence Applications to Robot Manipulation Tasks (Professor Robert Platt)"
              start="2018"
              end="2018"
              description={
                <span>
                  • Achieved robotic limb ability to successfully grasp objects
                  with 97.5% success rate using ROS, Python
                  <br />• Researched epipolar visualization for camera
                  calibration and stereo reconstruction of items using OpenCV
                  <br />• Integrated LiDAR functionalities and camera feedback
                  into ROS for hardware reorientation
                </span>
              }
            />
            <Work
              company="Rocket Software"
              position="Software Engineering & DevOps Intern"
              start="2018"
              end="2018"
              description={
                <span>
                  • Developed EDI Voice Assistant (Talk to Rocket Eurex-C and
                  EDX) for client experience enhancement using Java
                  <br />• Produced Rocket QA Dashboard with project status form
                  for internal deployment using HTML, CSS, Flask, Node.js
                  <br />• Implemented test automation pipelines for 20 product
                  lines using Jenkins, Git, Docker
                  <br />• Performed Python unit API/UI Testing and debugging
                  using PyTest, Selenium/WebDriver
                </span>
              }
            />
            <Work
              company="Uptycs"
              position="Software Development Intern"
              start="2017"
              end="2017"
              description={
                <span>
                  • Enhanced core program for server threat intelligence and
                  anomaly detection using Javascript, Node.js, Express.js
                  <br />• Expanded Uptycs website user interface in order to
                  enhance client user interactions using React.js
                  <br />• Identified key metrics by extracting client system
                  information, bug reports using SQL, Postman
                </span>
              }
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
