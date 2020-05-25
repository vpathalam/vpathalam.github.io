import React, { Component } from "react";
import Profile from "../../resources/avatar.png";
import { Grid, Cell } from "react-mdl";
import Book from "./book.js";

import Carnegie from "../../resources/books/carnegie.jpg";
import Kwik from "../../resources/books/kwik.jpg";
import Hawking from "../../resources/books/hawking.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Grid
          className="landing-grid"
          style={{ width: "100%", margin: "auto" }}
        >
          <Cell col={12}>
            <h1 className="about-intro">Let me introduce myself...</h1>
            <div className="profile-text">
              <img alt="logo" className="profile" src={Profile} />
              <p>
                I am a fourth-year student at Northeastern University pursuing a
                B.S. in Computer Science. My strong work ethic combined with my
                passion for software development has enabled me to become an
                effective contributor through work with multiple startups and in
                the aerospace industry.
              </p>
              <p>
                I consider myself as an adaptable software engineer who has an
                understanding of a number of languages (Java, Python, C++,
                Javascript) and development styles (RESTFUL application
                deployment, embedded implementations, machine learning
                frameworks). I spend most of my time learning - whether it be
                about new tech, stock trades, or personal development.
              </p>
              <h1 className="about-intro">Here's what I've been reading:</h1>
              <Grid>
                <Book
                  title="How to Win Friends and Influence People"
                  author="Dale Carnegie"
                  genre="Nonfiction"
                  desc="Learn the six ways to make people like you, the twelve ways to win people to your way of thinking, and the nine ways to change people without arousing resentment."
                  coverimg={Carnegie}
                />
                <Book
                  title="Limitless"
                  author="Jim Kwik"
                  genre="Nonfiction"
                  desc="In Limitless, readers will learn Jim's revolutionary strategies and shortcuts to supercharging their brains, with simple, actionable tools to sharpen the mind, enhance focus, and fast-track their fullest potential."
                  coverimg={Kwik}
                />
                <Book
                  title="Brief Answers to the Big Questions"
                  author="Stephen Hawking"
                  genre="Nonfiction"
                  desc="Within these pages, he provides his personal views on our biggest challenges as a human race, and where we, as a planet, are heading next. Each section will be introduced by a leading thinker offering his or her own insight into Professor Hawking's contribution to our understanding."
                  coverimg={Hawking}
                />
              </Grid>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
