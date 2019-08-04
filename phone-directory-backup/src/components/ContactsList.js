import React, { Component } from "react";
import { Link } from "react-router-dom";

import { contacts } from "../mockApis/contacts";
import "../styles/styles.css";

class ContactsList extends Component {
  deleteContact = () => {
    console.log(contacts);
  };

  renderList() {
    return contacts.map(contact => {
      return (
        <tbody key={contact.name}>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>
              <button className="ui red button" onClick={this.deleteContact}>
                DELETE
              </button>
            </td>
            <td>
              <Link to="/edit">
                <button className="ui blue button">EDIT</button>
              </Link>
            </td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    return (
      <div className="margin">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PHONE</th>
              {contacts.length > 0 && (
                <>
                  <th />
                  <th />
                </>
              )}
            </tr>
          </thead>
          {this.renderList()}
        </table>
      </div>
    );
  }
}

export default ContactsList;
