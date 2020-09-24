import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./../Components/unAuthComponent/popups/login";
import Forget from "./../Components/unAuthComponent/popups/forget";
import Share from "./../Components/unAuthComponent/popups/share";
import Help from "./../Components/unAuthComponent/popups/help";
import Home from "./../Components/authComponent/home";
import Contact from "./../Components/authComponent/contact";
import RegisterDonor from './../Components/unAuthComponent/Register/registerDonor';
import RegisterPatient from './../Components/unAuthComponent/Register/registerPatient';
import Faq from './../Components/authComponent/faq';
export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/login"></Link>
            </li>
            <li>
              <Link to="/forgot"></Link>
            </li>
            <li>
              <Link to="/share"></Link>
            </li>
            <li>
              <Link to="/share"></Link>
            </li>
            <li>
              <Link to="/help"></Link>
            </li>
            <li>
              <Link to="/contact"></Link>
            </li>
            <li>
              <Link to="/registerdonor"></Link>
            </li>
            <li>
              <Link to="/registerpatient"></Link>
            </li>
            <li>
              <Link to="/faq"></Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/faq">
            <FaqPage/>
          </Route>
          <Route path="/registerdonor">
            <RegisterDonorPage/>
          </Route>
          <Route path="/registerpatient">
            <RegisterPatientPage/>
          </Route>
          <Route path="/help">
            <HelpPage/>
          </Route>
          <Route path="/Login">
            <LoginPage/>
          </Route>
          <Route path="/forget">
            <ForgetPage/>
          </Route>
          <Route path="/share">
            <SharePage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

function HomePage(){
  return <div><Home/></div>;
}
function LoginPage() {
  return <div><Login/></div>;
}
function ForgetPage() {
  return <div><Forget/></div>;
}
function SharePage() {
  return <div><Share/></div>;
}
function HelpPage(){
  return <div><Help/></div>;
}
function ContactPage(){
  return <div><Contact/></div>;
}
function RegisterDonorPage(){
  return <div><RegisterDonor/></div>;
}
function RegisterPatientPage(){
  return <div><RegisterPatient/></div>;
}
function FaqPage(){
  return <div><Faq/></div>;
}
