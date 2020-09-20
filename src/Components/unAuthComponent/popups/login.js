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
				<div class="google">
    		<Glogin></Glogin>
				</div>
          		<div class="vl">
            		<span class="vl-innertext">or</span>
          		</div>
    		<div class="title1">
    			<label class="labelemail" for="exampleInputEmail">Email Address</label><br/>
    		</div>
    		<input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="example@gmail.com" required/>
    		<div class="title1">
    			<label class="labelpassword" for="password">Password</label><br/>
    		</div>
    		<input type="password" class="form-control" placeholder="must be at-least 6 character" required/>
    		<a class="forgot" name="forgot"  onClick={this.onOpenModal}>Forgot Password?</a>
    		<button type="submit" name="submit">Submit</button>
    		<div class="newtocure">
    		New to CureStrings? Register <a class="new">(Patient/Donor)</a>
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
