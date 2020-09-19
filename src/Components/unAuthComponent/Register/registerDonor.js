import React , { Component } from 'react';
import './registerdonor.css';

class Donor extends Component{
	render(){
		return (
			<div>
      <form>
<h1 class="donorh1"> Did You Recover From COVID-19?</h1>
<label>Name</label><br/>
<input type="text" name="name" placeholder="Om"/>
<label>Email</label><br/>
<input type="email" name="email" placeholder="omasati34654@gmail.com"/>
<label >Mobile Number</label><br/>
<input type="tel" name="mobileNumber" placeholder="919340012238"/>
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
  <label>Do you have negative test report?</label>
  <p class="donoryesp">
    <label>
      <input name="group1" type="radio" checked />
      <span>Yes</span>
    </label>
  </p>
  <p class="donornop">
    <label>
    <input name="group1" type="radio"/>
    <span>No</span>
    </label>
  </p>
  <label class="reportdate">If yes, what is the date of report?</label>
  <input type="date"/>
  <label >If no, what is the date of discharge from hospital/home Quarantine</label>
	<input class="inputdateQ" type="date"/>
  <label>
    <input class="donorcb"type="checkbox"/>
  </label>
  <p class="donortc">  Terms and Conditions</p>
  <button type="button">REGISTER NOW</button>
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

export default Donor
