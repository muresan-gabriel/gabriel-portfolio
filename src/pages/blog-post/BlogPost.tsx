import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { blogPosts } from "../../components/data";
import BlogArticle from "./BlogArticle.tsx";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./blog-post.css";

export default function BlogPost({ match }) {
  const { name } = useParams();
  const post = blogPosts.find((post) => post.name === name);
  const [progress, setProgress] = useState(0);

  return (
    <div className="container pt-[5rem]">
      <div
        className="progress fixed top-0 left-0 py-2 m-0 z-[1000] bg-indigo-500"
        style={{ width: progress + "%" }}
      ></div>
      <div className="information-container flex items-center justiy-center flex-col fade-in-1">
        <Link
          to="/blog"
          className="text-3xl font-extrabold text-indigo-500 transition duration-200 hover:text-indigo-500"
        >
          Blog
        </Link>
        <span className="mt-4 text-slate-400 border-t border-slate-300 w-64"></span>
        <h1 className="text-slate-800 font-black text-3xl mt-4 max-w-md text-center">
          {post.label}
        </h1>
        <div className="technologies-container mt-5 flex place-content-between flex-wrap sm:min-w-24 justify-center">
          {post.categories.map((category) => {
            return (
              <span className="text-xs md:text-sm mr-2 border border-slate-500 px-5 rounded-xl text-slate-500 mb-2">
                {category}
              </span>
            );
          })}
        </div>
        <img
          src={`../img/blog-imgs/${post.name}.png`}
          alt="Project"
          className="project-image rounded-xl w-[90%] mt-5 md:w-[60%] drop-shadow-md"
        />
      </div>
      <BlogArticle name={post.name}></BlogArticle>
    </div>
  );
}
