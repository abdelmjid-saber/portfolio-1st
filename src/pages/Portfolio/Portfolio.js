/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import AllData from "../../data/ProtfolioData";
import "./Portfolio.css";
let titlePage = "Portfolio";
function Portfolio() {
  const [images, setImage] = useState(AllData);

  const allItem = () => {
    const finalData = AllData.filter((value) => {
      return value;
    });
    setImage(finalData);
  };

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
      <div className="protfolio">
        <ul className="tags-protfolio">
          <li className="all" onClick={allItem}>
            All
          </li>
        </ul>

        <div className="contents-m">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-evenly">
            {images.map((value) => {
              return (
                <figure>
                  <img src={value.image} alt="image" />
                  <figcaption>
                    <h2>{value.author}</h2>
                    <span>{value.category}</span>
                    <div>
                      <ul class="share-icons">
                        <li class="share-icons__item">
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-codepen text-black"></i>
                          </a>
                        </li>
                        <li className="share-icons__item">
                          <a href="/">
                            <i class="fab fa-github text-black"></i>
                          </a>
                        </li>
                        <li class="share-icons__block">
                          <div class="share-icons__block-left">
                            <i class="fas fa-share text-primary"></i>
                          </div>
                          <div class="share-icons__block-right">
                            <i class="fas fa-share text-primary"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
