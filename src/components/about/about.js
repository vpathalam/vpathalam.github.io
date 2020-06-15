import React, { Component } from "react";
import Profile from "../../resources/avatar.png";
import { Grid, Cell } from "react-mdl";
import Book from "./book.js";

import Carnegie from "../../resources/books/carnegie.jpg";
import Kwik from "../../resources/books/kwik.jpg";
import Hawking from "../../resources/books/hawking.jpg";
import King from "../../resources/books/king.jpg";
import Graham from "../../resources/books/graham.jpg";
import Tolle from "../../resources/books/tolle.jpg";

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
                  desc="In the national bestseller, Carnegie delves into the six ways to make people like you, the twelve ways to win people to your way of thinking, and the nine ways to change people without arousing resentment."
                  coverimg={Carnegie}
                />
                <Book
                  title="Limitless"
                  author="Jim Kwik"
                  genre="Nonfiction"
                  desc="In Limitless, readers will learn Kwik's revolutionary strategies and shortcuts to supercharging their brains, with simple, actionable tools to sharpen the mind, enhance focus, and fast-track their fullest potential."
                  coverimg={Kwik}
                />
                <Book
                  title="Brief Answers to the Big Questions"
                  author="Stephen Hawking"
                  genre="Nonfiction"
                  desc="In his last book, Hawking provides his personal views on our biggest challenges as a human race, and where we, as a planet, are heading next. Each section will be introduced by a leading thinker offering his or her own insight into Professor Hawking's contribution to our understanding."
                  coverimg={Hawking}
                />
              </Grid>
              <Grid>
                <Book
                  title="The Power of Now: A Guide to Spiritual Enlightenment"
                  author="Eckhart Tolle"
                  genre="Nonfiction"
                  desc="Tolle's message is simple: living in the now is the truest path to happiness and enlightenment. And while this message may not seem stunningly original or fresh, Tolle's clear writing, supportive voice and enthusiasm make this an excellent manual for anyone who's ever wondered what exactly 'living in the now' means."
                  coverimg={Tolle}
                />
                <Book
                  title="The Intelligent Investor"
                  author="Benjamin Graham"
                  genre="Nonfiction"
                  desc="The greatest investment advisor of the twentieth century, Benjamin Graham taught and inspired people worldwide. Graham's philosophy of 'value investing' -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949."
                  coverimg={Graham}
                />
                <Book
                  title="The Institute"
                  author="Stephen King"
                  genre="Fiction - Horror"
                  desc="As psychically terrifying as Firestarter, and with the spectacular kid power of It, The Institute is Stephen King’s gut-wrenchingly dramatic story of good vs. evil in a world where the good guys don’t always win."
                  coverimg={King}
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
