import React , { Component } from 'react';
import './registerpatient.css';

class Patient extends Component{
	render(){
		return (
			<div>
			<form className="patientform">
	  	<h1 className="patienth1"> Do You need Plasma?</h1>
	  	<label>Name</label><br/>
	  	<input type="text" className="inputs" name="name" placeholder="Om"/>
	  	<label>Email</label><br/>
	  	<input type="email" className="inputs"name="email" placeholder="omasati34654@gmail.com"/>
	  	<label >Mobile Number</label><br/>
	  	<input type="tel" className="inputs" name="mobileNumber" placeholder="919340012238"/>
			<label >Password</label><br/>
			<input type="Password" className="inputs" name="mobileNumber" placeholder="13@#aA"/>
			<table>
			  <tr>
			    <td className="labeltd"><label type="select" >Blood Group</label></td>
			    <td className="inputtd"><input list="bloodgroup"  className="tableinputs" placeholder="B,B+"/></td>
			  </tr>
			  <tr>
			    <td className="labeltd"><label className="aglabel">Age</label></td>
			    <td className="inputtd"><input className="tableinputs" placeholder="19"/></td>
			  </tr>
			  <tr>
			    <td className="labeltd"><label className="gnlabel">Gender</label></td>
			    <td className="inputtd"><input className="tableinputs" list="gender" placeholder="Male/Female"/></td>
			  </tr>
			  <tr>
			    <td className="labeltd"><label className="clabel">City</label><br/></td>
			    <td className="inputtd">  <input className="tableinputs" placeholder="Delhi"/></td>
			  </tr>
			  <tr>
			    <td className="labeltd"><label className="pclabel">Pincode</label></td>
			    <td className="inputtd"><input className="tableinputs" placeholder="132458"/></td>
			  </tr>
			</table>
	  		<label>Do you have a laboratory confirmed diagnosis of Covid-19?</label>
	  		<p className="patientyesp">
	  			<label>
	  				<input name="group1" type="radio" checked />
	  				<span>Yes</span>
	  			</label>
	  		</p>
	  		<p className="patientnop">
	  			<label>
	  			<input name="group1" type="radio"/>
	  			<span>No</span>
	  			</label>
	  		</p>
	  		<label className="patientcb">
	  			<input type="checkbox"/>
	  		</label>
	  		<p className="patienttc">  Terms and Conditions</p>
	  		<button className="patientbutton" type="button">REGISTER NOW</button>
				<datalist id="bloodgroup">
					<option value="A+"/>
					<option value="A-"/>
					<option value="B+"/>
					<option value="B-"/>
					<option value="AB-"/>
					<option value="AB+"/>
					<option value="O+"/>
					<option value="O-"/>
				</datalist>
				<datalist id="gender">
					<option value="Male"/>
					<option value="Female"/>
					<option value="Others"/>
				</datalist>
				</form>
			</div>


			);
	}
}

export default Patient
