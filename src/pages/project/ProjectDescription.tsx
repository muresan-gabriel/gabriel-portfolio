import React, { Component } from "react";
import { marked } from "marked";

export default class ProjectDescription extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
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
      });
  }

  render() {
    const { markdown } = this.state;

    return (
      <>
        <article
          className="px-8 md:px-[20%] mt-5 blog-article"
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></article>
      </>
    );
  }
}
