import React , { Component } from 'react';
import './popUp.css'
import Glogin from './../../../googleAuth';
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import Forget from './forget';
import {Card} from 'reactstrap';
class Login extends Component{
	state = {
		isPatient: 1,
		openForgot :false,
	};
	onOpenModal = () => {
	this.setState({ openForgot: true });
};
onCloseModal = () => {
	this.setState({ openForgot: false });
};

asPatientorDonor = (val) => {
	this.setState({isPatient:val})
}

	render(){
		const { openForgot } = this.state;
		return (
			<div>
      			<form class="popupform">
    			<ul>
    				<li className="patient"><h2 onClick={()=>this.asPatientorDonor(1)} className={this.state.isPatient==1 ? "line":""}>PATIENT</h2></li>
    				<li className="donor"><h2  onClick={()=>this.asPatientorDonor(2)} className={this.state.isPatient==2 ? "line":""}>DONOR</h2></li>
    			</ul>
				<div class="google">
    		<Glogin/>
				</div>
          		<div class="vl">
            		<span class="vl-innertext">or</span>
          		</div>
    		<div class="title1">
    			<label class="labelemail" for="exampleInputEmail">Email Address</label><br/>
    		</div>
    		<input type="email" class="inputEmail"  aria-describedby="emailHelp" placeholder="example@gmail.com" required/>
    		<div class="title1">
    			<label class="labelpassword" for="password">Password</label><br/>
    		</div>
    		<input type="password" class="inputPasswordPopups" placeholder="must be at-least 6 character" required/>
    		<div class="forgot"><a name="forgot"  onClick={this.onOpenModal}>Forgot Password?</a></div>
    		<button class="buttonSubmitPopups" type="submit" name="submit">Submit</button>
    		<div class="newtocure">
    		New to CureStrings? Register <a class="new">(Patient/Donor)</a>
    		</div>
    	</form>
			<Modal open={openForgot} onClose={this.onCloseModal} center>
				<Forget/>
			</Modal>
			</div>
			);
	}
}

export default Login
