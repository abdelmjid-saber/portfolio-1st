import React, { Component } from "react";
import blog from "../../data/BlogData";
import "./Blog.css";
let titlePage = "Blog";

export class Blog extends Component {
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
        <div className="blog">
          <div className="contents-m">
            <h2 className="p-5 text-white">Latest Posts</h2>

            <div className="row  row-cols-sm-2 row-cols-md-3 justify-content-evenly">
              {blog.map((item) => (
                <div
                  key={item.id}
                  className="article-content text-white text-center"
                >
                  <a href={item.href}>
                    <img src={item.image} alt="imgage" />
                  </a>
                  <span>{item.data}</span>
                  <a href={item.href}>{item.title}</a>
                  <p className="text-white-50">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
