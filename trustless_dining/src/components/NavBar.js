import React, { Component } from 'react';
import Demo from './Demo';
import Process from './Process';
import Docs from './Docs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
    <div>
        <nav class="navbar is-white" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <h1 class="title is-2">Molly</h1>
    <a class="navbar-item">
    <Link to='/Demo'component={Demo}>Demo</Link>
      </a>
      <a class="navbar-item">
      <Link to='/Process'component={Process}>Process</Link>
      </a>
      <a class="navbar-item">
      <Link to='/Docs'component={Docs}>Docs</Link>
      </a>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-link">
            <strong>Sign up</strong>
          </a>
          
        </div>
        </div>
      </div>
    </div>
  </nav>

    </div>

        );
  }
}

export default NavBar;