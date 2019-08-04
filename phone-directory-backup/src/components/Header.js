import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="ui clearing segment">
        <h3 className="ui center aligned header">{this.props.header}</h3>
      </div>
    );
  }
}

export default Header;
