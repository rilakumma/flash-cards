import React, { Component } from "react";
import "./App.css";
import NewCard from "./components/NewCard/NewCard";
import ShowCards from "./components/ShowCards/ShowCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewCard />
        <ShowCards />
      </div>
    );
  }
}

export default App;
