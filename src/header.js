import React, { Component } from "react";
import "./header.css";
import { Modal } from "react-responsive-modal";
import TemporaryDrawer from "./navigationDrawer";
import Login from "./Components/unAuthComponent/popups/login";
import logo from "./logo.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      openLogin: false,
    };
    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef && this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      if (this.state.openLogin) {
        this.setState({ openLogin: false, Login: false }, () => {
          this.setState();
          this.onCloseLogin();
        });
      }
    }
  };

  // handleClickOutside = (evt) => {
  //   this.setState({ open: false, openLogin: false });
  // };

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

  handleClickAway = () => {
    alert("hello");
    this.setState({
      openLogin: false,
      open: false,
    });
  };
  render() {
    const { openLogin } = this.state;
    //const {openDonor} = this.state;
    return (
      <div>
        <div className="header">
          <a href="#default" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="header-right">
            <button className="active" onClick={this.onOpenLogin}>
              Log In
            </button>
            <button className="active" onClick={this.onOpenDonor}>
              Register
            </button>
            <div className="dropdown" onClick={(e) => this.openDrawer(e)}>
              <button className="dropbtn">
                <i className="fa bars">&#xf0c9;</i>
              </button>
            </div>
          </div>
        </div>
        {this.state.open && <TemporaryDrawer />}
        {/* <ClickAwayListener onClickAway={() => this.handleClickAway()}> */}
        {/* <Modal open={openDonor} onClose={this.onCloseDonor} center>
            <RegisterDonor/>
          </Modal> */}
        <div ref={this.wrapperRef}>
          {openLogin && (
            <Modal
              open={this.state.openLogin}
              onClose={this.onCloseLogin}
              center
            >
              <Login />
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
