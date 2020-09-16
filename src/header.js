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
  					<div className="column1">
  						<a className="active" href="#login">Sign Up/IN</a>
  						<a className="active" href="#login">Donate Now</a>
  					</div>
    				<div className="column2">
    					<div className="dropdown">
    						<button onClick=""className="dropbtn"><i className="fa fa-bars"></i>
    						</button>
    						<div className="dropdown-content">
    							<a href="#">How it's Works?</a>
    							<a href="#">FAQs?</a>
    							<a href="#"> Where do your donations go?</a>
    							<a className="active" href="#login">Sign Up/IN</a>
    							<a className="active" href="#login">Donate Now</a>
    						</div>
    					</div>
    				</div>
    			</div>
			</div>
			);
	}
}

export default Header

