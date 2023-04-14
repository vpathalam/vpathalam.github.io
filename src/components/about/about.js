import React, { Component } from "react";
import Profile from "../../resources/avatar.png";
import { Grid, Cell } from "react-mdl";
import Book from "./book.js";

import Carnegie from "../../resources/books/carnegie.jpg";
import Kwik from "../../resources/books/kwik.jpg";
import Hawking from "../../resources/books/hawking.jpg";
import Krishnamurthy from "../../resources/books/krishnamurthy.jpg";
import Hanh from "../../resources/books/hanh.jpg";
import Graham from "../../resources/books/graham.jpg";
import Tolle from "../../resources/books/tolle.jpg";
import Thiel from "../../resources/books/thiel.jpg";


class About extends Component {
  render() {
    return (
      <div>
        <Grid
          className="landing-grid"
          style={{ width: "100%", margin: "auto" }}
        >
          <Cell col={12}>
            <h1 className="about-intro">Let me introduce myself:</h1>
            <div className="profile-text">
              <img alt="logo" className="profile" src={Profile} />
              <p>
                Vikram Pathalam
              </p>
              <p>
                I am a passionate roboticist working to solve challenging problems in the autonomy domain.
                My strong work ethic combined with my passion for software development has enabled me to become an
                effective contributor to critical systems across various startups and the aerospace industry.
              </p>
              <p>
                I am an adaptable software engineer who has a comprehensive
                understanding of a number of languages (C++, Python, Java) 
                and development architectures (Pub/Sub, RESTful API, MVC, Microservice). 
                I pride myself on being a lifelong learner, and thoroughly enjoy reading or discussing new perspectives - 
                particularly regarding disruptive tech, neuropsychology, spirituality, and current events.
              </p>
              <h1 className="about-intro">Here's what I've been reading:</h1>
              <Grid>
                <Book
                  title="How to Win Friends and Influence People"
                  author="Dale Carnegie"
                  genre="Personal Development"
                  desc="In the national bestseller, Carnegie delves into the six ways to make people like you, the twelve ways to win people to your way of thinking, and the nine ways to change people without arousing resentment."
                  coverimg={Carnegie}
                />
                <Book
                  title="Limitless"
                  author="Jim Kwik"
                  genre="Personal Development"
                  desc="In Limitless, readers will learn Kwik's revolutionary strategies and shortcuts to supercharging their brains, with simple, actionable tools to sharpen the mind, enhance focus, and fast-track their fullest potential."
                  coverimg={Kwik}
                />
                <Book
                  title="Brief Answers to the Big Questions"
                  author="Stephen Hawking"
                  genre="Physics/Astronomy"
                  desc="In his last book, Hawking provides his personal views on our biggest challenges as a human race, and where we, as a planet, are heading next. Each section will be introduced by a leading thinker offering his or her own insight into Professor Hawking's contribution to our understanding."
                  coverimg={Hawking}
                />
              </Grid>
              <Grid>
                <Book
                  title="The Power of Now: A Guide to Spiritual Enlightenment"
                  author="Eckhart Tolle"
                  genre="Spirituality/Interbeing"
                  desc="Tolle's message is simple: living in the now is the truest path to happiness and enlightenment. And while this message may not seem stunningly original or fresh, Tolle's clear writing, supportive voice and enthusiasm make this an excellent manual for anyone who's ever wondered what exactly 'living in the now' means."
                  coverimg={Tolle}
                />
                <Book
                  title="The Intelligent Investor"
                  author="Benjamin Graham"
                  genre="Finance"
                  desc="The greatest investment advisor of the twentieth century, Benjamin Graham taught and inspired people worldwide. Graham's philosophy of 'value investing' -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949."
                  coverimg={Graham}
                />
                <Book
                  title="The Pocket"
                  author="Thich Nhat Hanh"
                  genre="Mindfulness/Buddhism"
                  desc="Since Thich Nhat Hanh’s exile from his native Vietnam in 1966, the Zen Buddhist monk has gone on to become one of the most influential and beloved spiritual masters of our age. Taken from his many published works, these selections make up a concise introduction to the Hanh’s major themes—such as mindfulness, enlightenment, and compassion—and distill his teachings on the transformation of individuals, relationships, and society."
                  coverimg={Hanh}
                />
              </Grid>
              <Grid>
              <Book
                  title="Zero to One"
                  author="Peter Thiel"
                  genre="Entrepreneurship"
                  desc="In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things. Doing what someone else already knows how to do takes the world from 1 to n, adding more of something familiar. But when you do something new, you go from 0 to 1."
                  coverimg={Thiel}
                />
              <Book
                  title="Freedom from the Known"
                  author="Jiddu Krishnamurthy"
                  genre="Spirituality/Philosophy"
                  desc="Krishnamurti shows how people can free themselves radically and immediately from the tyranny of the expected, no matter what their age--opening the door to transforming society and their relationships."
                  coverimg={Krishnamurthy}
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
