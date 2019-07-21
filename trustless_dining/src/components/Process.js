import React, { Component } from 'react';
import flowchart from '../assets/VerifyWithBrightID.png';

class Process extends Component {
  render() {
    return (
    <div>
      <figure class="image is-2by1">
      <img src={flowchart} alt="flowchart of process" />
      </figure>
    </div>
        );
  }
}

export default Process;