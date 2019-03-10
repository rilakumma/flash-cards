import React, { Component } from "react";
import axios from "axios";
import "./NewCard.scss";

export default class NewCard extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: ""
    };
  }
  submitCard = () => {
    axios.post("/cards", { question: this.state.question, answer: this.state.answer }).then(res => {
      console.log("res", res.data);
    });
  };
  render() {
    return (
      <div className="new-card">
        <h1>Add New Flash Card</h1>
        <input onChange={e => this.setState({ question: e.target.value })} className="inputs" placeholder="Enter question" />
        <input onChange={e => this.setState({ answer: e.target.value })} className="inputs" placeholder="Enter answer" />
        <button onClick={() => this.submitCard()} className="submit-btn">
          Create Flash Card
        </button>
      </div>
    );
  }
}
