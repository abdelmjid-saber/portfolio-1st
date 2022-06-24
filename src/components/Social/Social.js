import React, { Component } from "react";
import "./Social.css";
export class Social extends Component {
  render() {
    return (
      <div className="flex-center ms-auto">
        <div className="fixed">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/abdelmjid0" >
            <i className="fa fa-twitter fa icon-3d"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/abdelmjid0" >
            <i className="fa fa-facebook fa icon-3d"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/abdelmjid0" >
            <i className="fa fa-instagram fa icon-3d"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/abdelmjid0" >
            <i className="fa fa-whatsapp fa icon-3d"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
