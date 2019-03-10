import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";

export default class ShowCards extends Component {
  constructor() {
    super();
    this.state = {
      cards: null
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
    return this.state.cards !== null ? <Card cards={this.state.cards} /> : <div>Loading Cards...</div>;
  }
}
