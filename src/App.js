import React from 'react';
import './App.css';
import {render} from 'react-dom';
import Router from './Router/routes';
import Header from './header'
import Glogin from './googleAuth';
import Footer from './footer'
import Login from "./Components/unAuthComponent/popups/login";

function App() {
  return (
    <div>
      <Router>
      </Router>
    </div>
  );
}

export default App;
