import React, { Component } from "react";
import "./header.css";
import { Modal } from 'react-responsive-modal';
import TemporaryDrawer from "./navigationDrawer";
import Login from "./Components/unAuthComponent/popups/login";
import logo from "./logo.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      openLogin:false,
    };
  }

  openDrawer = (e) => {
    this.setState({ open: true });
  };

  closeDrawer = () => {
    this.setState({ open: false });
  };
  onOpenLogin = () => {
  	this.setState({ openLogin: true });
  };
  onCloseLogin = () => {
  	this.setState({ openLogin: false });
  };
  render() {
    const {openLogin} = this.state;
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
            <button class="active" onClick={this.onOpenLogin}>
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
        <Modal open={openLogin} onClose={this.onCloseLogin} center>
          <Login/>
        </Modal>
      </div>
    );
  }
}

export default Header;
