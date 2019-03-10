import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./ShowCard.scss";

export default class ShowCards extends Component {
  constructor() {
    super();
    this.state = {
      cards: null,
      index: 0,
      clicked: false
    };
  }
  componentDidMount() {
    axios.get("/cards").then(res => {
      this.setState({
        cards: res.data
      });
    });
  }
  render() {
    return this.state.cards !== null ? (
      <div className="card-grid">
        <Card cards={this.state.cards[this.state.index]} clicked={this.state.clicked} />
        <button
          onClick={() =>
            this.state.index < this.state.cards.length - 1 ? this.setState({ index: this.state.index + 1 }) : this.setState({ index: 0 })
          }
          className="next"
        >
          Next
        </button>
      </div>
    ) : (
      <div>Loading Cards...</div>
    );
  }
}
