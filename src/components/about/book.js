import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class Book extends Component {
  render() {
    return (
      <Grid>
        <OverlayTrigger
          trigger="hover"
          placement="left"
          overlay={
            <Tooltip className="tooltip">
              <strong>{this.props.title}</strong>
              <i> by {this.props.author}</i>. [{this.props.genre}]
              <br /> <br /> {this.props.desc}
            </Tooltip>
          }
        >
          <Cell col={4}>
            <img className="book" src={this.props.coverimg} alt="" />
          </Cell>
        </OverlayTrigger>
      </Grid>
    );
  }
}

export default Book;
