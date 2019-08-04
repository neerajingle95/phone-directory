import React, { Component } from "react";
import { Link } from "react-router-dom";

import { contacts } from "../mockApis/contacts";
import Header from "./Header";
import "../styles/styles.css";

class AddSubscriber extends Component {
  state = { name: "", phone: "" };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const { name, phone } = this.state;
    event.preventDefault();
    contacts.push({
      name: name,
      phone: phone
    });
    this.props.history.push("/");
  };

  render() {
    const { name, phone } = this.state;
    const inputStyle = {
      marginRight: "1000px"
    };

    return (
      <div>
        <Header header="Add Subscriber" />
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
            <div>
              <p>
                <b>Subscriber to be added:</b>
              </p>
              <p>Name: {name}</p>
              <p>Phone: {phone}</p>
            </div>
            <br />
            <button
              className="ui green button"
              disabled={name === "" || phone === ""}
            >
              ADD
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSubscriber;
