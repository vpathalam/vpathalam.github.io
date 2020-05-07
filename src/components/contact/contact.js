import React, { Component } from "react";
import axios from "axios";
import { Cell, Grid, Button } from "react-mdl";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }

  render() {
    return (
      <div className="contact-page">
        <Grid style={{ width: "100%", margin: "auto" }}>
          <Cell col={12}>
            <div className="contact-border">
              <div className="contact-form">
                <h1>Say Hello!</h1>
                <form
                  action="/action_page.php"
                  onSubmit={this.handleFormSubmit.bind(this)}
                  method="POST"
                >
                  <label>Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name..."
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                  <label>Company: </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company name..."
                    value={this.state.company}
                    onChange={(e) => this.setState({ company: e.target.value })}
                  />

                  <label>Email: </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email..."
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />

                  <label>Message: </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    onChange={(e) => this.setState({ message: e.target.value })}
                    value={this.state.message}
                  ></textarea>
                  <Button
                    colored
                    raised
                    ripple
                    type="submit"
                    className="button button-primary"
                    value="Submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      company: "",
      email: "",
    });
  };

  handleFormSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "node-api-xi.now.sh",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
}

export default Contact;
