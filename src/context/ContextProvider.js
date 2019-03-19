import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export const AppContext = React.createContext();

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      open: false
    };
  }
  updateUser = user => {
    this.setState({
      user: user
    });
  };
  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          updateUser: this.updateUser,
          toggle: this.toggle
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default withRouter(ContextProvider);
