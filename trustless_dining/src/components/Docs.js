import React, { Component } from 'react';
import flowchart from '../assets/VerifyWithBrightID.png';
import { Document } from 'react-pdf';

class Docs extends Component {
  render() {
    return (
    <div>
  <Document
          file= 'https://github.com/shenae/trustless_dining/blob/master/Molly_Whitepapers.pdf'
          >
          {/* <Page pageNumber={6} /> */}
        </Document>
     <figure class="image is-2by1">
      <img src={flowchart} alt="flowchart of process" />
      </figure>   
    </div>

        );
  }
}

export default Docs;