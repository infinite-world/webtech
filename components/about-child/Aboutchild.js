import React, { Component } from "react";
import "./Aboutchild.scss";
import Image from "./image/logoheader.png";

class Aboutchild extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="aboutchild-parallax"></div>

        <div id="firt-aboutchild-image-text">
          <div id="aboutchild-inner-text-second">
            Tailors on Web
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="aboutchild-firstgrid-text">
                    <b className="beautylines">|</b>&nbsp;&nbsp;About{" "}
                    <b className="beautylines">U</b>s
                    <br />
                    <br />
                    We are Passionate Team Of Developers generate{" "}
                    <span className="beautylines">C</span>reative Ideas To make
                    Life comfortable for people using latest technologies
                    Through which we add value to their daily life, Solving
                    their issues Making their Business more successful,
                    Providing modren Solutions to thir problems
                    <br />
                    Contect Us:
                    <br />
                    Founder abdulrehhman711@gmail.com
                    <br />
                    <span className="beautylines">Co</span> -Founder
                    ibtisammirza711@gmail.com
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="aboutchild-firstgrid-text">
                    <img src={Image} id="aboutchild-second-grid1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutchild-parallax1"></div>
      </React.Fragment>
    );
  }
}

export default Aboutchild;
