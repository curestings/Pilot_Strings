import React , { Component } from 'react';
import './popUp.css'

class Forget extends Component{
	render(){
		return (
			<div>
      <form class="popupform">
        <h2>Forgot Password</h2>
        <p class="main-container1">Please enter your e-mail address. You will receive an e-mail along with
              a link which can be used to reset your password</p>
        <div class="title1">
          <label class="labelemail" for="exampleInputEmail1">Email Address:</label><br/>
        </div>
        <input type="email" class="inputEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
        <button class="buttonSubmitPopups" type="submit" name="submit">Submit</button>
      </form>
			</div>
			);
	}
}

export default Forget
