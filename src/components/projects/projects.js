import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  Button,
  CardText,
  CardActions,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(http://ngninja.com/assets/posts/reactjs-102f9693a4201e678d5b02185717f4e2127d082c2f8afc0ed378cfc6cd814741.png) center / cover",
              }}
            >
              Star Wars Information Hub
            </CardTitle>
            <CardText>
              Implemented web application to represent categorical data in the
              Star Wars universe through RESTful interactions using Javascript,
              React.js, Node.js, HTML, CSS, SWAPI.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/vp-swapi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/angulart2-dark_1200x303.png?sfvrsn=b936a75a_0) center / cover",
              }}
            >
              MIT Campus Alert System
            </CardTitle>
            <CardText>
              Developed web application to exchange student requests with campus
              police responses through map pin functionality using Javascript,
              Angular, Node.js, HTML, CSS, Mongoose, MapboxGL API as a part of
              web.lab @ MIT.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/techelp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(http://ngninja.com/assets/posts/reactjs-102f9693a4201e678d5b02185717f4e2127d082c2f8afc0ed378cfc6cd814741.png) center / cover",
              }}
            >
              Personal Website
            </CardTitle>
            <CardText>
              Developed a personal website to better represent my current
              accomplishments and aspirations within the field of Computer
              Science. Developed using Javascript, React.js, HTML, CSS,
              Express.js.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/personal-website"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://alunos.b7web.com.br/media/courses/laravel.jpg) center / cover",
              }}
            >
              Instagram Clone
            </CardTitle>
            <CardText>
              Created Instagram photo-sharing clone with integration of CRUD
              operations, social networking functionality using Laravel, PHP,
              Vue.js, SQLite.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/instaclone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/730/1*ND2d6CvH-Cz0dp5I_tYalQ.png) center / cover",
              }}
            >
              CoffeeShare iOS
            </CardTitle>
            <CardText>
              Currently developing coffee-based social networking iOS
              application. Allows for user profile, rating, and recommendation
              functionality using Swift, SQLite.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/ios"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(https://cdn.shopify.com/s/files/1/0055/0433/5925/files/ROS_Logo_1000x1000.jpg?v=1530113947) center / cover",
              }}
            >
              Autonomous Racecar Simulation
            </CardTitle>
            <CardText>
              Developing autonomous racecar simulation to navigate scanned track
              environment using Python, ROS, Hector Mapping, Gazebo, Occipital
              Structure Sensor based on F1Tenth Curriculum @ UPenn.
            </CardText>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://draftfcb.net/wp-content/uploads/2019/09/1.jpg) center / cover",
              }}
            >
              Speech Emotion Recognizer
            </CardTitle>
            <CardText>
              Implemented classification model to infer tone following SER
              (Speech Emotion Recognition). Extracts features such as power,
              pitch and vocal tract configuration from the speech signal with
              Python, Librosa, Scikit-learn, RAVDESS dataset.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/speech-emotion"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>{" "}
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/media/D38qHtIXsAIukzM.jpg) center / cover",
              }}
            >
              Dementia Early Diagnostic Tool
            </CardTitle>
            <CardText>
              Developed supervised classification algorithm for automated
              detection of dementia. Observed parameters including age, gender,
              MMSE score, entropy, atrophy, region of interest to serve as early
              diagnostic system using Matlab. Project received 1st Place at
              Massachusetts State Science & Engineering Fair.
            </CardText>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://draftfcb.net/wp-content/uploads/2019/09/1.jpg) center / cover",
              }}
            >
              Media Source Sentiment Analysis
            </CardTitle>
            <CardText>
              Developed supervised machine learning models using Python to infer
              political bias of Fox News, The Wall Street Journal, The New York
              Times, and CNN Twitter accounts on 2020 presidential candidates.
              Developed as a part of DS3000: Foundations of Data Science @
              Northeastern.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/election-sentiment-analysis"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://draftfcb.net/wp-content/uploads/2019/09/1.jpg) center / cover",
              }}
            >
              Tweet Sentiment Analysis
            </CardTitle>
            <CardText>
              Developed classification models (AdaBoost Ensemble, G-Naive Bayes, Random Forest Ensemble) and LSTM RNN to 
              predict positive/negative sentiments from WallStreetJournal tweets. Utilized
              NLP Techniques such as filtering, tokenization, vectorization, K-Folds Cross Validation.
              Developed as a part of DS4400: Machine Learning @ Northeastern by Vikram Pathalam, Thomas Jacob.
            </CardText>
            <CardActions border>
              <a
                href="https://colab.research.google.com/drive/1RnQpDXE7nGAriP0Uf_LifBp4O0LZYzD3?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GOOGLE COLAB</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://draftfcb.net/wp-content/uploads/2019/09/1.jpg) center / cover",
              }}
            >
              NLP Hesitation
            </CardTitle>
            <CardText>
              Investigated impact of filler words and hesitations on request intent. 
              Utilized speech to text Google SpeechRecognizer API, NLTK, and a MLPerceptron to 
              classify phrase sentiments. Assigned and manipulated weights of subjects based on 
              hesitation placement, sentiment of request, noun ordering.
              Developed as a part of CS3950: Intro to CS Research @
              Northeastern.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/nlp-hesitation"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://draftfcb.net/wp-content/uploads/2019/09/1.jpg) center / cover",
              }}
            >
              CNN Object Detection Algorithms
            </CardTitle>
            <CardText>
            Implemented and evaluated 3 state of the art CNN algorithms (YOLO, SSD, FRCNN) on KITTI dataset to classify frequently seen object classes of self-driving cars with the intent of cracking reCaptcha.
              Developed as a part of CS4150: Artificial Intelligence @
              Northeastern by Austin Ho, Stefan Philip, Vikram Pathalam.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/ai-finalproject"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://cdnp1.stackassets.com/dbd8b662370e2dd5283d3f352802c43c79b15f8d/store/opt/596/298/abf733ad50de70c3ad93f8b34f894876f93318a2aff76ccc7504ecce0fc1/product_16032_product_shot_wide_image.jpg) center / cover",
              }}
            >
              Basic Filesystem
            </CardTitle>
            <CardText>
              Implemented Basic Filesystem in C to implement hard links,
              symlinks, metadata, and manipulation of directories and files.
              Developed as part of CS3650: Computer Systems @ Northeastern.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/basic-filesystem"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://hotforsecurity.bitdefender.com/wp-content/uploads/2013/02/java-logo.png) center / cover",
              }}
            >
              Animation Creator
            </CardTitle>
            <CardText>
              Developed a Java MVC application to create animations based on
              shapes and different element attributes such as timeframe, color,
              position, and dimension. Developed as a part of CS3500:
              Object-Oriented Design @ Northeastern.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/vpathalam/animation-creator"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://www.predictiveindex.com/wp-content/uploads/2018/07/Library-Tiles_People-Management-222x300.png) center / cover",
              }}
            >
              Autonomous Solar Panel Cleaning Robot
            </CardTitle>
            <CardText>
              Developed an autonomous solar panel cleaning robot to restore
              output efficiency and periodically keep solar systems performing
              at full capacity with squeegee and liquid repellent combination.
              Tested effects of particulate matter on the solar panel output.
            </CardText>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFFFFF",
                height: "176px",
                background:
                  "url(https://crazyleafdesign.com/blog/wp-content/uploads/2016/10/beaker_1x.jpg) center / cover",
              }}
            >
              Effect of Phyllanthus Amarus on Liver Cancer Cell Proliferation
            </CardTitle>
            <CardText>
              Tested the effect of Phyllanthus Amarus on HepG2 (liver
              hepatocellular carcinoma) cancer cell proliferation rates. After
              initial testing, new synergistic herb combinations were created to
              further deter cancer spread.
            </CardText>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="content">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Web Development</Tab>
          <Tab>Mobile Development</Tab>
          <Tab>Computer Vision</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Miscellaneous</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>{this.toggleCategories()}</Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
