import React from "react";
import "./Card.scss";

export default function Card(props) {
  return props.cards.map(card => {
    return (
      <div key={card._id} className="card-container">
        <p className="question">{card.question}</p>
        <p className="answer">{card.answer}</p>
      </div>
    );
  });
}
