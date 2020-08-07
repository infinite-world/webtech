import React, { Component } from "react";
import "./About.scss";
import Image from "./image/laletstabout.jpg";
import { NavLink, Link } from "react-router-dom";
// import Aboutchild from "../about-child/Aboutchild";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headercontainer">
          <img src={Image} id="first-header-image" />
          <div className="top-left">
            <span id="front-text-of-about-image">
              Altering & Tailoring People's <br /> Clothing Into Works Of Art
            </span>
            <br />
            <span id="lower-about-header-text">
              A branding Company to Connect Tailors from different parts of
              world
              <br /> togather at one place and managing their data to boostup
              their efficincy
            </span>
            <br />
            {/*  */}
            <div className="buttons-Container">
              <button class="about-button1">
                <span>
                  <Link to="/signup" style={{color:"White"}} >SignUp</Link>
                </span>
              </button>
              <button class="about-button2">
                <span>
                  <Link to="/login" style={{color:"White"}}>LogIn</Link>
                </span>
              </button>
            </div>

            {/*  */}
          </div>
        </div>
        <div id="about-image-color-texture0"></div>
        <div id="about-image-color-texture"></div>
        {/* <Aboutchild /> */}
      </React.Fragment>
    );
  }
}

export default About;
