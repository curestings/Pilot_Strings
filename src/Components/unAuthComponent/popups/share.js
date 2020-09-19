import React , { Component } from 'react';
import './popUp.css'

class Share extends Component{
	render(){
		return (
			<div>
      <form>
  		<h2>Share your Experience</h2>
  		<p class="main-container1">Share Your Covid-19 experience and help the community fight this deadly virus better</p>
  		<textarea name="My_story" class="inputtext" placeholder="API/Key"></textarea>
  		<button type="submit" name="submit">Let's Go!</button>
  		<a class="skip">Skip ></a>
  	</form>
			</div>


			);
	}
}

export default Share
