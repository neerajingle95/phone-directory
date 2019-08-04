import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import "../styles/styles.css";

class EditSubscriber extends Component {
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const inputStyle = {
      marginRight: "1000px"
    };

    return (
      <div>
        <Header header="Edit Subscriber" />
        <div className="margin">
          <Link to="/">BACK</Link>
          <br />
          <br />
          <form className="ui form large" onSubmit={this.handleSubmit}>
            <div className="field" style={inputStyle}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="field" style={inputStyle}>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <button
              className="ui green button"
              //disabled={name === "" || phone === ""}
            >
              EDIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditSubscriber;
