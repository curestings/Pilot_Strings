import React , { Component } from 'react';
import './popUp.css'
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import Help from './help';


class Share extends Component{
	state = {
		openHelp :false,
	};
	onOpenModal = () => {
	this.setState({ openHelp: true });
};
onCloseModal = () => {
	this.setState({ openHelp: false });
};

	render(){
		const { openHelp } = this.state;
		return (
			<div>
      <form class="popupform">
  		<h2>Share your Experience</h2>
  		<p class="main-container1">Share Your Covid-19 experience and help the community fight this deadly virus better</p>
  		<textarea name="My_story" class="inputtext" placeholder="API/Key"></textarea>
  		<button class="buttonSubmitPopups" type="submit" name="submit">Let's Go!</button>
  		<a class="skip" onClick={this.onOpenModal}>Skip ></a>
  	</form>
		<Modal open={openHelp} onClose={this.onCloseModal} center>
			<Help/>
		</Modal>
		</div>
			);
	}
}

export default Share
