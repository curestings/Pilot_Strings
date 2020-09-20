import React , { Component } from 'react';
import GoogleLogin from 'react-google-login';
class GoogleAuth extends Component{
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
	render(){
		return (
			<div>
      <GoogleLogin style ="width:30px"
      clientId="589906672085-qh0jlb4c0k83d0k9gns4aieuddbn12uk.apps.googleusercontent.com"
      buttonText="SignIn"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}/>
      </div>
			);
	}
}

export default GoogleAuth
