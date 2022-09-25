import "./home.css";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Homepage() {
  const navigate = useNavigate();
  const navigateTo = (route) => {
    const container = document.getElementById("container");
    container.classList.add("fadeOut");
    setTimeout(() => {
      navigate(route);
    }, 800);
  };

  return (
    <div id="container">
      <div className="container-home flex justify-center min-h-screen mx-auto max-w-7xl px-6 sm:px-8 lg:px-6">
        <div className="container flex self-center place-content-between">
          <div className="text flex flex-col">
            <div className="flex">
              <span className="text-xs mr-3 text-slate-400 fade-in-1">
                WEB DEVELOPER
              </span>
              <span className="text-xs mr-3 text-slate-400 fade-in-2">
                GRAPHIC DESIGNER
              </span>
            </div>
            <h4 className="text-3xl md:text-4xl font-black text-slate-900 fade-in-3">
              Hi! I develop creative
              <br /> and intuitive web apps.
            </h4>
            <p className="text-slate-500 text-sm mt-3 fade-in-4">
              With experience in both web development and <br />
              graphic design, I always aim to deliver <br />
              amazing solutions.
            </p>
            <div className="buttons flex">
              <div
                onClick={() => navigateTo("/portfolio")}
                className="cursor-pointer fade-in-2 bg-slate-900 hover:bg-indigo-500 hover:ring-2 hover:ring-offset-2 hover:ring-slate-700 text-slate-50 p-4 self-start mt-5 rounded-2xl flex items-center transition duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 fade-in-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Portfolio
              </div>
            </div>
          </div>
        </div>
        <div className="md:inline-flex hidden">alo</div>
        <a
          className="arrow-down animate-bounce bg-slate-900 p-3 rounded-full ring-2 ring-indigo-500 self-end absolute m-5  hover:ring-offset-4 transition duration-150"
          href="#info"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div
        className="min-h-screen bg-slate-900 ring-2 ring-offset-1 ring-indigo-500"
        id="info"
      ></div>
    </div>
  );
}
