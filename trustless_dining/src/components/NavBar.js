import React, { Component } from 'react';
import Demo from './Demo';
import Process from './Process';
import Docs from './Docs';
import Signup from './SignUp';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../assets/Logo.png';

class NavBar extends Component {
  render() {
    return (
    <div>
<nav class="level navbar is-fixed-top" id="nav_height">
  <p class="level-item has-text-centered">
  <a class="link is-info">
    <Link to='/Demo'component={Demo}>Demo</Link>
      </a>
    </p>
  <p class="level-item has-text-centered">
  <a class="link is-info">
      <Link to='/Process'component={Process}>Process</Link>
      </a>
  </p>
  <p class="level-item has-text-centered">
  <img src={Logo} width="112" height="28" alt="logo for Molly app" />
  </p>
  <p class="level-item has-text-centered">
  <a class="link is-info">
      <Link to='/Docs'component={Docs}>Docs</Link>
      </a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">
    <Link to='/Signup'component={Signup}>Sign Up</Link></a>
  </p>
</nav>
    </div>

        );
  }
}

export default NavBar;