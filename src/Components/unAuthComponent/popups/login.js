import React , { Component } from 'react';
import './popUp.css'
import Glogin from './../../../googleAuth';
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import Forgot from './share';
class Login extends Component{
	state = {
		openForgot :false,
	};
	onOpenModal = () => {
	this.setState({ openForgot: true });
};
onCloseModal = () => {
	this.setState({ openForgot: false });
};

	render(){
		const { openForgot } = this.state;
		return (
			<div>
      <form>
    		<ul>
    			<li><h2>PATIENT</h2></li>
    			<li><h2>DONOR</h2></li>
    		</ul>
				<div className="google">
    		<Glogin></Glogin>
				</div>
          		<div className="vl">
            		<span className="vl-innertext">or</span>
          		</div>
    		<div className="title1">
    			<label className="labelemail" for="exampleInputEmail">Email Address</label><br/>
    		</div>
    		<input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="example@gmail.com" required/>
    		<div className="title1">
    			<label className="labelpassword" for="password">Password</label><br/>
    		</div>
    		<input type="password" className="form-control" placeholder="must be at-least 6 character" required/>
    		<a className="forgot" name="forgot"  onClick={this.onOpenModal}>Forgot Password?</a>
    		<button type="submit" name="submit">Submit</button>
    		<div className="newtocure">
    		New to CureStrings? Register <a className="new">(Patient/Donor)</a>
    		</div>
    	</form>
			<Modal open={openForgot} onClose={this.onCloseModal} center>
				<Forgot/>
			</Modal>
			</div>
			);
	}
}

export default Login
