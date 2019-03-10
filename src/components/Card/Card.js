import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  componentDidUpdate(prevState, prevProps){
    if(prevProps.clicked !== false) {
        this.setState({
            clicked: false
        })
    }
  }
  render() {
    return (
      <div className="card-holder">
        <div
          className={this.state.clicked === false ? "card-container" : "card-container clicked"}
          onClick={() => this.setState({ clicked: !this.state.clicked })}
        >
          <div className="front">{this.props.cards.question}</div>
          <div className="back">{this.props.cards.answer}</div>
        </div>
      </div>
    );
  }
}
