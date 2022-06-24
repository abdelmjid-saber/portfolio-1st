import React, { Component } from "react";
import "./Contacts.css";
let titlePage = "Contacts";
export class Contacts extends Component {
  render() {
    return (
      <>
        <div className="centrize full-width h-100">
          <div className="vertical-center position-relative">
            <h1 className="title">{titlePage}</h1>
            <div className="h-subtitles">
              <span className="first">Home</span>
              <span> / </span>
              <span className="sec">{titlePage}</span>
            </div>
          </div>
        </div>
          <div className="contacts">
        <div className="contents-m">
            <h3>Contacts Form</h3>
              <from>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <input className="bts" type="submit" value="Send Message"/> 
              </from>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
