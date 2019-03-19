import React, { Component } from "react";
import "./Nav.scss";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import withContext from "../../context/Context_HOC";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidUpdate(prevState, prevProps) {
    let user = this.props.context.user;
    if (prevProps.user !== this.props.context.user) {
      this.setState({
        user: user
      });
    }
  }
  logout = () => {
    axios.post("/logout").then(res => {
      this.props.context.updateUser(null);
      console.log(res);
    });
  };
  render() {
    return (
      <div>
        <div className="nav">
          <span>&#9729;</span>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/new">
                <span className="link">&#43;</span>
              </Link>
            </li>
            <li>
              <Link to="/view" className="link">
                View
              </Link>
            </li>
            {this.state.user === null ? (
              <li onClick={() => this.props.context.toggle()} className="link">
                {/* <Link to="/login" className="link"> */}
                Login
                {/* </Link> */}
              </li>
            ) : (
              <li onClick={() => this.logout()} className="link">
                Logout
              </li>
            )}
          </ul>
        </div>
        {this.props.context.open && <Modal component={Login} header={"Login"} />}
      </div>
    );
  }
}
export default withContext(withRouter(Nav));
