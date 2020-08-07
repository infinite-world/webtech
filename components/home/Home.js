import React, { Component } from "react";
import Navbar from "../navbar/NavBar";
import About from "../about/About";
import Header from "../header/Header";
import Aboutchild from "../about-child/Aboutchild";
import Footer from "../footer/Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <About />
        <Aboutchild/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Home;
