import React, { Component } from 'react';
import hostHome from '../assets/Host_HomePage.png';
import userMenu from '../assets/UserMenu.png';
import hostQR from '../assets/HostQR.png';
import userScans from '../assets/UserScans.png';

class Demo extends Component {
  render() {
    return (
    <div>
      <article class="media">
  <figure class="image is-128x128">
        <img src={hostHome} id="pad" alt="homepage Molly app" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>Restaurant Home Page</strong>
        <br />
        One user creates the group for the dining experience and then creates the QR code.
      </p>
    </div>
  </div>
</article>

<article class="media">
  <figure class="image is-128x128">
        <img src={userMenu} id="pad" alt="picture of user menu Molly app" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>Restaurant Menu</strong>
        <br />
        The users can select which items they would like to order. 
      </p>
    </div>
  </div>
</article>

<article class="media">
  <figure class="image is-128x128">
        <img src={hostQR} id="pad" alt="pic of host QR code" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>Restaurant QR Code</strong>
        <br />
        The QR code for the order is shown. 
      </p>
    </div>
  </div>
</article>

<article class="media">
  <figure class="image is-128x128">
        <img src={userScans} id="pad" alt="picture of user scan from Molly app" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>User Scans Code</strong>
        <br />
        The main user scans the code.
      </p>
    </div>
  </div>
</article>
      
    </div>

        );
  }
}

export default Demo;