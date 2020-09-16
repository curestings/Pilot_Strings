import React , { Component } from 'react';
import './contact.css'
import Header from './../../header'
import Footer from './../../footer'


class Contact extends Component{
	render(){
		return (
			<div>
				<Header />
					
					<div className="banner1">
						<div className="banner1-text">
							<h1>Reach Our Team</h1>
							<h4>We love questions and feedback - and we're always happy to hrlp!</h4>
							<h4>Here are some ways to contact us.</h4>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<div className="container">
								<h1>Send Us a Message</h1>
								<p>Send us a message and we'll respond in 24 hours</p>
								<form action="">
								<label for="name">Name</label>
								<input type="text" id="name" name="name" placeholder="Your Name" />
								<label for="mobile-number">Mobile Number</label>
								<input type="number" id="mobile-number" name="mobile-number" placeholder="Your Mobile Number" />
								<label for="email">Email</label>
								<input type="email" id="email" name="email" placeholder="Your Email Address" />
								<label for="message">Message</label>
								<textarea  id="message" name="message" row="8"/>
								<input type="submit" value="Send" />
							</form>
							</div>
						</div>
						<div className="col1">
							<div className="container1">
								<h1>HeadQuarter</h1>
								<h3>New Delhi , India </h3>
								<p className="text"><i class='fas'>&#xf3c5; </i>Room no. 567, Radhakrishnan Bhawan , IIT Roorkee </p>
								<p className="text"><i class='fas'>&#xf095;</i>91-911-722-7202</p>
								<div className="social">
									<a href="#"><i class='fas fa fa-facebook'>&#xf09a;</i></a>
									<a href="#"><i class='fas fa fa-instagram'>&#xf16d;</i></a>
									<a href="#"><i class='fas fa fa-twitter'>&#xf099;</i></a>
								</div>
							</div>
						</div>
					</div>





				<Footer />
			</div>
			);
	}
}




export default Contact