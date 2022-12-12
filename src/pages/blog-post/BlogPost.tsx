import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { blogPosts } from "../../components/data";
import BlogArticle from "./BlogArticle.tsx";

import "./blog-post.css";

export default function BlogPost({ match }) {
  const { name } = useParams();
  const post = blogPosts.find((post) => post.name === name);
  const [progress, setProgress] = useState(0);
  const [topClasses, setTopClasses] = useState(
    "fixed hidden top bottom-[1rem] right-[2rem] bg-slate-900 p-3 rounded-full transition duration-1 hover:bg-slate-800"
  );

  function progressBarScroll() {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
    setProgress(scrolled);
  }

  useEffect(() => {
    window.onscroll = function () {
      progressBarScroll();
    };

    if (window.scrollY > 900)
      setTopClasses(
        "fixed block fade-in-1 top bottom-[1rem] right-[2rem] bg-slate-900 p-3 rounded-full transition duration-1 hover:bg-slate-800"
      );
    if (window.scrollY < 900)
      setTopClasses(
        "fixed hidden top bottom-[1rem] right-[2rem] bg-slate-900 p-3 rounded-full transition duration-1 hover:bg-slate-800"
      );
  }, [progress]);

  return (
    <div className="container pt-[5rem]">
      <div
        className="progress fixed top-0 left-0 py-1 m-0 z-[1000] bg-indigo-500"
        style={{ width: progress + "%" }}
      ></div>
      <a href="#top" className={topClasses}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#f8fafc"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      </a>
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
        <span className="text-slate-500 mt-3 font-regular text-xs">
          Published on {post.publishedOn} · {post.readTime}
        </span>
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
