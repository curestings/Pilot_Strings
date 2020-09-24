import React from 'react';
import './App.css';
import Routes from './Router/routes';
import {render} from 'react-dom';
import Header from './header'
import Glogin from './googleAuth';
import Footer from './footer'
import Login from "./Components/unAuthComponent/popups/login";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
