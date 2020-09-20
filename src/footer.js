import React , { Component } from 'react';
import './footer.css'
import logo from "./logo.svg";

class Footer extends Component{
	render(){
		return (
			<div className="footer-distributed">
				<div className="footer-left">
          			<img src={logo} />
				</div>

				<div className="footer-center">
					<div>
						<ul className="footer-company-name">
							<li>CureStrings is only a facilitator and cannot be held liable for any misuse of this website or complications in the plasma donation and transfusion process.</li>
							<li>CureStrings does not promote or cannot be held liable for any monetary transactions between patients and donors.
							</li>
							<li>Please read Terms and Conditions</li>
						</ul>
						<br/>
						<br/>
						<div className="copyright">
							<p className="footer-company-name">©  Copyright 2020 CureStrings. All rights reserved.</p>
						</div>
					</div>
				</div>
				<div className="footer-right">
					<p className="footer-company-about">
						<span className="footer-right-span">Donate</span>
					</p>
				</div>
		</div>
			)
	}
}

export default Footer;
