import React, { Component } from "react";
import withContext from "../../context/Context_HOC";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Flash View</h1>
        <p>Make your own flash stacks or use ones made by the community!</p>
      </div>
    );
  }
}
export default withContext(Home);
