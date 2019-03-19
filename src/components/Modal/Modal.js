import React from "react";
import withContext from "../../context/Context_HOC";
import "./Modal.scss";

class Modal extends React.Component {
  setComponent = Component => {
    return <Component />;
  };
  componentDidMount() {
    document.body.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleClick);
  }

  handleClick = e => {
    if (this.modal.contains(e.target)) {
      return;
    }
    this.props.context.toggle();
  };
  render() {
    console.log(this.props.header);
    return (
      this.props.context.open && (
        <div className="modal-container">
          <div className="modal-content" ref={modal => (this.modal = modal)}>
            <div className="header">
              {this.props.header}
              <span onClick={() => this.props.context.toggle()} className="close">
                &#10006;
              </span>
            </div>
            {this.setComponent(this.props.component)}
          </div>
        </div>
      )
    );
  }
}
export default withContext(Modal);
