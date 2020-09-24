import React, { Component } from "react";
import "./footer.css";
import logo from "./logo.svg";

class Footer extends Component {
  render() {
    const facebookUrl = "https://www.facebook.com/";
    const instagramUrl = "https://www.facebook.com/";
    const linkedinUrl = "https://www.facebook.com/";
    const twitterUrl = "https://www.facebook.com/";
    return (
      <div className="footer-distributed">
        <div className="footer-left">
          <img src={logo} />
        </div>

        <div className="footer-center">
          <div>
            <ul className="footer-company-name">
              <li>
                CureStrings is only a facilitator and cannot be held liable for
                any misuse of this website or complications in the plasma
                donation and transfusion process.
              </li>
              <li>
                CureStrings does not promote or cannot be held liable for any
                monetary transactions between patients and donors.
              </li>
              <li>Please read Terms and Conditions</li>
            </ul>
            <br />
            <br />
            <div className="copyright">
              <p className="footer-company-name">
                © Copyright 2020 CureStrings. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <span className="footer-company-about">
            <span className="footer-right-span">
              <h1>Donate</h1>
            </span>
          </span>
          <div className="social-link">
            <a href={facebookUrl} target="_blank">
              <i className="fas fa fa-facebook-square"></i>
            </a>
            <a href={instagramUrl} target="_blank">
              <i className="fas fa fa-instagram"></i>
            </a>
            <a href={linkedinUrl} target="_blank">
              <i className="fas fa fa-linkedin-square"></i>
            </a>
            <a href={twitterUrl} target="_blank">
              <i className="fas fa fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
