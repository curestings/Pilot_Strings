import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from "./../Components/unAuthComponent/popups/login";
import ForgotPage from "./../Components/unAuthComponent/popups/forgot";
import SharePage from "./../Components/unAuthComponent/popups/share";
import HelpPage from "./../Components/unAuthComponent/popups/help";
import HomePage from "./../Components/authComponent/home";
import ContactPage from "./../Components/authComponent/contact";

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
          </ul>
        </nav>
        <Switch>
          <Route path="/help">
            <Help/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/forgot">
            <Forgot/>
          </Route>
          <Route path="/share">
            <Share/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}

function Home(){
  return <div><HomePage/></div>;
}
function Login() {
  return <div><LoginPage/></div>;
}
function Forgot() {
  return <div><ForgotPage/></div>;
}
function Share() {
  return <div><SharePage/></div>;
}
function Help(){
  return <div><HelpPage/></div>;
}
function Contact(){
  return <div><ContactPage/></div>;
}


