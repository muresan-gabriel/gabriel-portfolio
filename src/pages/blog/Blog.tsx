import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";

import { blogPosts } from "../../components/data.js";
import ProjectLoading from "../../components/project-loading/ProjectLoading.tsx";

export default function Blog(props) {
  const [loaded, setLoaded] = useState(false);
  function onLoad() {
    setLoaded(true);
  }

  return (
    <div className="container pt-[5rem] ">
      <div className="information-container flex items-center justiy-center flex-col fade-in-1">
        <h1 className="text-3xl font-extrabold">Blog</h1>
        <p className="text-slate-600 pt-5 max-w-md text-center">
          Thoughts and stories about all kind of things.
        </p>
      </div>
      <div className="projects-container fade-in-2 pt-[2rem] mb-5 lg:flex-wrap lg:px-[15rem] flex lg:flex-row flex-col items-center justify-center">
        {blogPosts.map((blog) => {
          return (
            <>
              <ProjectLoading loaded={loaded} />
              <Link
                style={{ display: loaded ? "block" : "none" }}
                to={`/blog/${blog.name}`}
                className="project m-5 bg-slate-100 w-100 xl:w-[45%] text-slate-50 duration-300 transition hover:scale-[1.01] hover:ring-[5px] hover:ring-offset-[4px] hover:ring-indigo-500 rounded-3xl [&>div]:hover:drop-shadow-[0]"
              >
                <div className="image-container lg:w-full w-full max-h-[15rem] overflow-hidden">
                  <img
                    src={`img/blog-imgs/${blog.name}.png`}
                    alt={blog.name}
                    className="project-image rounded-t-3xl"
                    onLoad={onLoad}
                    // onLoad={setLoading(false)}
                  />
                </div>
                <div className="project-information bg-slate-50 p-5 rounded-b-3xl">
                  <h3 className="text-slate-900 font-bold">{blog.label}</h3>
                  <div className="tech-container mt-5 mb-[-0.5rem]">
                    {blog.categories.map((tech) => {
                      return (
                        <span className="text-slate-500 font-medium text-xs mr-2">
                          #{tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex place-content-between mt-2">
                    <span className="text-slate-900 font-regular text-xs">
                      {blog.publishedOn}
                    </span>
                    <span className="text-slate-500 font-regular text-xs">
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
