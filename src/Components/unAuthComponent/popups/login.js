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
      			<form className="popupform">
    			<ul>
    				<li classNameName="patient"><h2 onClick={()=>this.asPatientorDonor(1)} classNameName={this.state.isPatient==1 ? "line":""}>PATIENT</h2></li>
    				<li classNameName="donor"><h2  onClick={()=>this.asPatientorDonor(2)} classNameName={this.state.isPatient==2 ? "line":""}>DONOR</h2></li>
    			</ul>
				<div className="google">
    		<Glogin/>
				</div>
          		<div className="vl">
            		<span className="vl-innertext">or</span>
          		</div>
    		<div className="title1">
    			<label className="labelemail" for="exampleInputEmail">Email Address</label><br/>
    		</div>
    		<input type="email" className="inputEmail"  aria-describedby="emailHelp" placeholder="example@gmail.com" required/>
    		<div className="title1">
    			<label className="labelpassword" for="password">Password</label><br/>
    		</div>
    		<input type="password" className="inputPasswordPopups" placeholder="must be at-least 6 character" required/>
    		<div className="forgot"><a name="forgot"  onClick={this.onOpenModal}>Forgot Password?</a></div>
    		<button className="buttonSubmitPopups" type="submit" name="submit">Submit</button>
    		<div className="newtocure">
    		New to CureStrings? Register <a className="new">(Patient/Donor)</a>
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
