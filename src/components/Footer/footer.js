import React from "react";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
function Footer() {
  return (
    <div className="test">
      <div footer-container>
        <p className="connect footer-p">
          Connect With
          <img className="social-media-img" src={Facebook} alt="facebook"></img>
          <img className="social-media-img" src={Twitter} alt="twitter"></img>
          <img
            className="social-media-img"
            src={Instagram}
            alt="instagram"
          ></img>
        </p>
        <p className="About-us footer-p">
          <a>About Us</a>
        </p>
        <p className="contact-us footer-p">
          <a>Contact Us</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
