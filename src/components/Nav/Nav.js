import React, { Component } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">Create</Link>
          </li>
          <li>
            <Link to="/view">View</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>Logout</li>
        </ul>
      </div>
    );
  }
}
