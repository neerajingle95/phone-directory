import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ContactsList from "./ContactsList";
import "../styles/styles.css";

class PhoneDirectory extends Component {
  render() {
    return (
      <div>
        <Header header="Phone Directory" />
        <Link to="/add">
          <button className="ui green button margin">ADD</button>
        </Link>
        <ContactsList />
      </div>
    );
  }
}

export default PhoneDirectory;
