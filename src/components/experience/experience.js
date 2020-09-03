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
              • Java
              <br /> • Python
              <br />• C
              <br />• C++
              <br />• SQL
              <br />• React.js
              <br />• Node.js
              <br />• HTML
              <br />• CSS
              <br />• X64 Assembly
              <br />• Racket(Scheme)
              <br />• ACL2S
            </p>
            <h4 className="workname">Secondary Languages:</h4>
            <p className="exp-description">
              • JavaScript
              <br /> • Swift
              <br />• M-Code
              <br />• Angular
              <br />• VisualBasic
            </p>
            <h4 className="workname">Platforms & Applications:</h4>
            <p className="exp-description">
              • Git
              <br /> • Vim
              <br />• Linux
              <br />• Jira (Agile/Scrum)
              <br />• MySQL Workbench
              <br />• PostgreSQL
              <br />• Django
              <br />• Flask
              <br />• Tensorflow
              <br />• PyTorch
              <br />• Scikit-learn
              <br />• Keras
              <br />• OpenCV
              <br />• Jupyter Notebook
              <br />• Rhapsody
              <br />• ROS
              <br />• CARLA
              <br />• Jenkins
              <br />• Docker
              <br />• Kubernetes
              <br />• Conan
              <br />• CMake
              <br />• Flask
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
              company="The Aerospace Corporation"
              position="Autonomous Systems Intern (DoD Secret Clearance)"
              start="June 2020"
              end="Present"
              description={
                <span>
                  • Developing autonomous vehicle simulation with SLAM, obstacle
                  avoidance, LiDAR functionality using ROS, Gazebo, Python
                  <br />
                  • Importing autonomous navigation simulation software to
                  hardware for prototyping and demonstration efforts
                  <br />
                  • Evaluating motion planning algorithms for simulated
                  self-driving vehicles using CARLA, Python
                  <br />
                  • Implementing reinforcement learning-based Deep Q Network
                  approach for autonomous navigation
                  <br />
                  • Extending object detection capability of UAS video tracking
                  package using YOLO Convolutional Neural Network, Python
                  <br />• Implementing queries, testing for space traffic
                  management system using Java, SQL
                </span>
              }
            />
            <Work
              company="Raytheon Space & Airborne Systems"
              position="Software Engineering Co-op (DoD Secret Clearance)"
              start="July 2019"
              end="Jan 2020"
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
                  <br />• Developed new user setup package for onboarding 30
                  employees using Python
                </span>
              }
            />
            <Work
              company="JPMorgan Chase & Co."
              position="Software Engineering Intern (Virtual)"
              start="Nov 2019"
              end="Jan 2020"
              description={
                <span>
                  • Interfaced stock price API with profitable trade strategy
                  for data analysis using Python, Git
                  <br />• Implemented Perspective open source tooling for data
                  visualization and streaming analytics using React.js
                </span>
              }
            />
            <Work
              company="Northeastern University Khoury College of Computer Sciences"
              position="Research Assistant: Artificial Intelligence Applications to Robot Manipulation Tasks (Professor Robert Platt)"
              start="Jan 2018"
              end="Dec 2018"
              description={
                <span>
                  • Achieved robotic limb ability to successfully grasp objects
                  with 97.5% success rate using Python and ROS
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
              start="May 2018"
              end="August 2018"
              description={
                <span>
                  • Developed EDI Voice Assistant (Talk to Rocket Eurex-C and
                  EDX) for client experience enhancement using Java
                  <br />• Produced Rocket QA Dashboard with project status form
                  for internal deployment using HTML, CSS, Flask, Node.js
                  <br />• Implemented test automation pipelines for 20 product
                  lines using Jenkins, Git, Docker
                  <br />• Performed Python unit API/UI Testing and debugging
                  using Pytest, Selenium IDE/ WebDriver
                </span>
              }
            />
            <Work
              company="Uptycs"
              position="Software Development Intern"
              start="July 2017"
              end="Sept 2017"
              description={
                <span>
                  • Enhanced core program for server threat intelligence and
                  anomaly detection using Javascript, Node.js, Express.js
                  <br />• Expanded Uptycs website user interface in order to
                  enhance client user interactions using React.js
                  <br />• Identified key metrics by extracting client system
                  information, bug reports using SQL, Osquery
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
