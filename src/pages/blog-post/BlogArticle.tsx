import React, { Component } from "react";
import { marked } from "marked";

export default class BlogArticle extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
    this.loaded = false;
  }

  componentDidMount() {
    const markdownArticle = require(`../blog-posts/${this.props.name}.md`);

    fetch(markdownArticle)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          markdown: marked(text),
        });
        this.loaded = true;
      });
  }

  render() {
    const { markdown } = this.state;

    return (
      <>
        <div
          style={{ display: !this.loaded ? "block" : "none" }}
          className="text-center mt-5 text-slate-500"
        >
          Loading...
        </div>
        <article
          style={{ display: this.loaded ? "block" : "none" }}
          className="px-8 md:px-[20%] mt-5 blog-article"
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></article>
      </>
    );
  }
}
