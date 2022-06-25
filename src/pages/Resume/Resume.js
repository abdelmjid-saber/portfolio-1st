import React, { Component } from "react";
import data from "../../data/SkillBars";
import "./Resume.css";
import Man2 from "../../assets/imgs/myabdelmjid.png";
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
              <img src={Man2} alt="img" className="myimg" />
            </div>
            <div className="desc">
              <div className="single-text">
                <p>
                  Hello, I'm Abdelmajid, student passionate about coding and the
                  influence of technology on our life aspects. Since grade 8, I
                  started working in Web development.{" "}
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
                    <span>Alexandria, EG</span>
                  </li>
                  <li>
                    <strong>
                      <span>Phone </span>
                    </strong>
                    <span>+20 010 915 239 08</span>
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
