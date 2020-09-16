import React , { Component } from 'react';
import './header.css';

class Header extends Component{
	render(){
		return(
			<div className="header">
  				<div className="header-logo">
  					<a href="#default" className="logo"><img className="img" src="./logo1.jpg" alt="logo" /></a>
  				</div>
  				<div className="header-right">
    				<a className="active" href="#login">Signup</a>
    				<a className="active" href="#login">Login</a>
  				</div>
			</div>
			);
	}
}

export default Header

