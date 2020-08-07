import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer id="textfooter">
          <a className="btn-floating btn-lg btn-fb" type="button" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn-floating btn-lg btn-tw" type="button" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn-floating btn-lg btn-gplus" type="button" role="button">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a className="btn-floating btn-lg btn-li" type="button" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn-floating btn-lg btn-ins" type="button" role="button">
            <i className="fab fa-instagram"></i>
          </a>
        </footer>
      </>
    );
  }
}
export default Footer;
