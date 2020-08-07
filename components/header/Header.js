import React, { Component } from "react";
import "./Header.scss";
import Image from './images/tailoring-tools-png-3.png';
import Image1 from './images/tailor-logo-png-3.png';

class Header extends Component {
  render() {
    return (
      <div className="topnav-header">
       
          <img src={Image} id="hendling-header-logo" />
          <img src={Image1} id="second-header-logo"/>
       
      </div>
    );
  }
}

export default Header;
