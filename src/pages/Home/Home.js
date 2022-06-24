import React, { Component } from "react";
import TypeWriterEffect from "react-typewriter-effect";

import "./Home.css";
// Start
// End
export class Home extends Component {
  render() {
    return (
      <div className="home h-100">
        <div className="bg"></div>
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="profile"></div>
            <div className="text">
              <h5>
                Hello, I’m <strong className="name">Abdelmjid Saber</strong> ,
                Front-end Developer Based in Egypt.
              </h5>
              <TypeWriterEffect
                className="multi-text"
                textStyle={{
                  fontFamily: "Roboto",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "3.5em",
                }}
                startDelay={2000}
                cursorColor="#6C43FF"
                multiText={[
                  "I develop website",
                  "I Front-end Developer",
                  "I Freelancer",
                ]}
                multiTextDelay={1000}
                typeSpeed={30}
                multiTextLoop={true}
              />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
