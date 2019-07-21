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
  <figure class="image is-150x150">
        <img src={hostHome} id="pad" alt="homepage Molly app" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>Restaurant Home Page</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
  </div>
</article>

<article class="media">
  <figure class="image is-150x150">
        <img src={userMenu} id="pad" alt="picture of user menu Molly app" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>Restaurant Menu</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
  </div>
</article>

<article class="media">
  <figure class="image is-150x150">
        <img src={hostQR} id="pad" alt="pic of host QR code" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>Restaurant QR Code</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
  </div>
</article>

<article class="media">
  <figure class="image is-150x150">
        <img src={userScans} id="pad" alt="picture of user scan from Molly app" />
      </figure>  
  <div class="media-content">
    <div class="content" id="pad">
      <p>
        <strong>User Scans Code</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
  </div>
</article>
      
    </div>

        );
  }
}

export default Demo;