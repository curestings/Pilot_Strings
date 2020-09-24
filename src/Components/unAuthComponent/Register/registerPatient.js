import React , { Component } from 'react';
import './registerpatient.css';
import Header from './../../../header'
import Footer from './../../../footer'

class Patient extends Component{
	render(){
		return (
			<div>
				<Header />
				<div className="form-card">
					<form class="patientform">
						<h1 class="patienth1"> Do You need Plasma?</h1>
						<label>Name</label><br/>
						<input type="text" class="inputs" name="name" placeholder="Om"/>
						<label>Email</label><br/>
						<input type="email" class="inputs"name="email" placeholder="omasati34654@gmail.com"/>
						<label>Password</label>
						<input type="password" className="inputs" name="password" placeholder="password"/>
						<label>Mobile Number</label><br/>
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
							<div class="notaPatient">
								Not a Patient <a class="std">Switch to Donor</a>
							</div>
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
									<option value="Ofont-size: 20px;
	font-weight:bold;
	color:white;
	margin:5% 5%;
	background:tomato;
	border-radius: 4px;
	border: 1px solid black;
	width:90%;
	height: 65px;
	cursor: pointer;thers"/>
								</datalist>
				</form>
				</div>
				<Footer/>
			</div>


			);
	}
}

export default Patient
