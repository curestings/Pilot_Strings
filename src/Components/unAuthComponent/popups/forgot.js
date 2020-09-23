import React , { Component } from 'react';
import './popUp.css'

class Forgot extends Component{
	render(){
		return (
			<div>
      <form>
        <h2>Forgot Password</h2>
        <p className="main-container1">Please enter your e-mail address. You will receive an e-mail along with
              a link which can be used to reset your password</p>
        <div className="title1">
          <label for="exampleInputEmail1">Email Address:</label><br/>
        </div>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
        <button type="submit" name="submit">Submit</button>
      </form>
			</div>


			);
	}
}

export default Forgot
