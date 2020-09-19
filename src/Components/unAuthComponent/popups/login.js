import React , { Component } from 'react';
import './popUp.css'

class Login extends Component{
	render(){
		return (
			<div>
      <form>
    		<ul>
    			<li><h2>PATIENT</h2></li>
    			<li><h2>DONOR</h2></li>
    		</ul>
    <button class="google" name="submit">Google</button>
          		<div class="vl">
            		<span class="vl-innertext">or</span>
          		</div>
    		<div class="title1">
    			<label class="labelemail" for="exampleInputEmail">Email Address</label><br/>
    		</div>
    		<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" required/>
    		<div class="title1">
    			<label class="labelpassword" for="exampleInputEmail">Password</label><br/>
    		</div>
    		<input type="password" class="form-control" id="exampleInputEmail1" placeholder="must be at-least 6 character" required/>
    		<button class="forgot" name="forgot">Forgot Password?</button>
    		<button type="submit" name="submit">Submit</button>
    		<div class="newtocure">
    		New to CureStrings? Register <a class="new">(Patient/Donor)</a>
    		</div>

    	</form>
			</div>


			);
	}
}

export default Login
