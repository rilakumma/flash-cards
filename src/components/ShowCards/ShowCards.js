import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./ShowCard.scss";
import loading from "./blueloading.gif";

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
      <div className="card-stack">
        <Card cards={this.state.cards[this.state.index]} clicked={this.state.clicked} />
        {this.state.index < this.state.cards.length - 1 ? (
          <button onClick={() => this.setState({ index: this.state.index + 1 })} className="next">
            Next
          </button>
        ) : (
          <button onClick={() => this.setState({ index: 0 })} className="next">
            Start Over
          </button>
        )}
      </div>
    ) : (
      <div className="card-stack">
        <img src={loading} width={100} alt="loading gif" />
      </div>
    );
  }
}
