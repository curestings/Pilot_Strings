import React , { Component } from 'react';
import './registerpatient.css';

class Patient extends Component{
	render(){
		return (
			<div>
			<form class="patientform">
	  	<h1 class="patienth1"> Do You need Plasma?</h1>
	  	<label>Name</label><br/>
	  	<input type="text" class="inputs" name="name" placeholder="Om"/>
	  	<label>Email</label><br/>
	  	<input type="email" class="inputs"name="email" placeholder="omasati34654@gmail.com"/>
	  	<label >Mobile Number</label><br/>
	  	<input type="tel" class="inputs" name="mobileNumber" placeholder="919340012238"/>
			<table>
			  <tr>
			    <td class="labeltd"><label type="select" >Blood Group</label></td>
			    <td class="inputtd"><input list="bloodgroup"  class="tableinputs" placeholder="B,B+"/></td>
			  </tr>
			  <tr>
			    <td class="labeltd"><label class="aglabel">Age</label></td>
			    <td class="inputtd"><input class="tableinputs" placeholder="19"/></td>
			  </tr>
			  <tr>
			    <td class="labeltd"><label class="gnlabel">Gender</label></td>
			    <td class="inputtd"><input class="tableinputs" list="gender" placeholder="Male/Female"/></td>
			  </tr>
			  <tr>
			    <td class="labeltd"><label class="clabel">City</label><br/></td>
			    <td class="inputtd">  <input class="tableinputs" placeholder="Delhi"/></td>
			  </tr>
			  <tr>
			    <td class="labeltd"><label class="pclabel">Pincode</label></td>
			    <td class="inputtd"><input class="tableinputs" placeholder="132458"/></td>
			  </tr>
			</table>
	  		<label>Do you have a laboratory confirmed diagnosis of Covid-19?</label>
	  		<p class="patientyesp">
	  			<label>
	  				<input name="group1" type="radio" checked />
	  				<span>Yes</span>
	  			</label>
	  		</p>
	  		<p class="patientnop">
	  			<label>
	  			<input name="group1" type="radio"/>
	  			<span>No</span>
	  			</label>
	  		</p>
	  		<label class="patientcb">
	  			<input type="checkbox"/>
	  		</label>
	  		<p class="patienttc">  Terms and Conditions</p>
	  		<button class="patientbutton" type="button">REGISTER NOW</button>
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
