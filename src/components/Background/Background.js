import React, { Component } from "react";
import "./Background.css";
export class Background extends Component {
  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="lines lines-home">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Background;
