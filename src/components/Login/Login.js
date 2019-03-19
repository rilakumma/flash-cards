import React, { Component } from "react";
import axios from "axios";
import "./Login.scss";
import withContext from "../../context/Context_HOC";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmpass: "",
      register: false
    };
  }
  handleLogin = () => {
    axios.post("/login", { username: this.state.username, password: this.state.password }).then(res => {
      console.log(res);
      if (res.status === 200) {
        this.props.context.updateUser(res.data);
      }
    });
  };
  handleRegister = () => {
    axios.post("/register", { username: this.state.username, password: this.state.password }).then(res => {
      console.log(res);
      if (res.status === 200) {
        this.props.context.updateUser(res.data);
      }
    });
  };
  render() {
    return (
      <div className="login-page">
        {this.state.register === false ? (
          <div className="login-form">
            {/* <div className="login-header">Login</div> */}
            <div className="form-container">
              <div>
                <label>username</label>
                <input onChange={e => this.setState({ username: e.target.value })} placeholder="Type your username" />
                <label>password</label>
                <input onChange={e => this.setState({ password: e.target.value })} type="password" placeholder="Type your password" />
                <button onClick={() => this.handleLogin()} className="login">
                  LOGIN
                </button>
                <p>
                  Don't have an account? <span onClick={() => this.setState({ register: !this.state.register })}>Sign up</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="login-form">
            {/* <div className="login-header">Register</div> */}
            <div className="form-container">
              <div>
                <label>username</label>
                <input onChange={e => this.setState({ username: e.target.value })} placeholder="Type your username" />
                <label>password</label>
                <input onChange={e => this.setState({ password: e.target.value })} type="password" placeholder="Type your password" />
                <label>confirm password</label>
                <input onChange={e => this.setState({ confirmpass: e.target.value })} type="password" placeholder="Confirm your password" />

                <button onClick={() => this.handleRegister()} className="login">
                  REGISTER
                </button>
                <p>
                  Already have an account? <span onClick={() => this.setState({ register: !this.state.register })}>Login</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withContext(Login);
