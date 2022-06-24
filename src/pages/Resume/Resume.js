import React, { Component } from "react";
import data from "../../data/SkillBars";
import "./Resume.css";
import Man2 from "../../assets/imgs/man2.jpg";
let titlePage = "Resume";

export class Resume extends Component {
  render() {
    return (
      <div>
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
        <div className="contents">
          <div className="about">
            <div className="image">
              <img src={Man2} alt="img" />
            </div>
            <div className="desc">
              <div className="single-text">
                <p>
                  Hello! I’m Daniel Curry. Web designer from USA, California,
                  San Francisco. I have rich experience in web site design and
                  building, also I am good at wordpress. I love to talk with you
                  about our unique.
                </p>
              </div>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>
                      <span>Age </span>
                    </strong>
                    <span>16</span>
                  </li>
                  <li>
                    <strong>
                      <span>Residence </span>
                    </strong>
                    <span>EG</span>
                  </li>
                  <li>
                    <strong>
                      <span>Freelance </span>
                    </strong>
                    <span>Available</span>
                  </li>
                  <li>
                    <strong>
                      <span>Address </span>
                    </strong>
                    <span>San Francisco, EG</span>
                  </li>
                  <li>
                    <strong>
                      <span>Phone </span>
                    </strong>
                    <span>+20 256 254 84 56</span>
                  </li>
                  <li>
                    <strong>
                      <span>E-mail </span>
                    </strong>
                    <span>abdelmjid999@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div class="bts">
                <div className="circle"></div>
                <a href="/">Download CV</a>
              </div>
            </div>
          </div>
          <div className="skill-bars">
            <h2 className="py-5 text-white">Design Skills</h2>
            {data.map((item) => (
              <div className="bar">
                <div className="info">
                  <span>{item.name}</span>
                </div>
                <div className={item.id}>
                  {/* CSS  يجب اضافة المحتوه في css */}
                  <span style={{ width: item.wdith }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
