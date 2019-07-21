import React, { Component } from 'react';
import Demo from './Demo';
import Process from './Process';

class NavBar extends Component {
  render() {
    return (
    <div>
        <nav class="navbar is-white" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <h1 class="title is-2">Trustless Dining</h1>
    <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Process
      </a>
      <a class="navbar-item">
        Docs
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