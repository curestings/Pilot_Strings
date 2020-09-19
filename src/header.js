import React, { Component } from "react";
import "./header.css";
import TemporaryDrawer from "./navigationDrawer";
import logo from "./logo.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  openDrawer = (e) => {
    this.setState({ open: true });
  };

  closeDrawer = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div class="header">
          <a href="#default" class="logo">
            <img src={logo} alt="logo" />
          </a>
          <div class="header-right">
            <button class="active" href="#">
              Donate Now
            </button>
            <button class="active" href="#">
              SignUp/In
            </button>
            <div className="dropdown" onClick={(e) => this.openDrawer(e)}>
              <button className="dropbtn">
                <i class="fa bars">&#xf0c9;</i>
              </button>
            </div>
          </div>
        </div>
        {console.log("open : ", this.state.open)}
        {this.state.open && <TemporaryDrawer />}
      </div>
    );
  }
}

export default Header;
