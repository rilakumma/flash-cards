import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./NewCard.scss";

export default class NewCard extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
      status: false
    };
  }
  submitCard = () => {
    axios.post("/cards", { question: this.state.question, answer: this.state.answer }).then(res => {
      console.log("res", res.status);
      if (res.status === 200) {
        this.setState({
          status: !this.state.status,
          question: "",
          answer: ""
        });
      }
    });
  };
  render() {
    return (
      <div className="new-card">
        <h1>Add New Flash Card</h1>
        <input
          onChange={e => this.setState({ question: e.target.value })}
          className="inputs"
          placeholder="Enter question"
          value={this.state.question}
        />
        <input
          onChange={e => this.setState({ answer: e.target.value })}
          className="inputs"
          placeholder="Enter answer"
          value={this.state.answer}
        />
        <button onClick={() => this.submitCard()} className="submit-btn">
          Create Flash Card
        </button>
        {this.state.status === true && (
          <div>
            Success: <Link to="view">View all Flash Cards</Link>
          </div>
        )}
      </div>
    );
  }
}
