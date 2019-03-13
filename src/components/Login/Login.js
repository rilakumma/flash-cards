import React, { Component } from "react";
import axios from "axios";
import "./Login.scss";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleLogin = () => {
    axios.post("/login", { username: this.state.username, password: this.state.password }).then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <div className="login-header">Login</div>
          <p>username</p>
          <input onChange={e => this.setState({ username: e.target.value })} />
          <p>password</p>
          <input onChange={e => this.setState({ password: e.target.value })} type="password" />
          <button onClick={() => this.handleLogin()}>LOGIN</button>
        </div>
      </div>
    );
  }
}
