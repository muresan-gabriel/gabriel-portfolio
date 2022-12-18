import { Link, useParams, useNavigate } from "react-router-dom";
import { projectsList } from "../../components/data";
import React, { useState } from "react";

import ProjectDescription from "./ProjectDescription.tsx";

export default function Project({ match }) {
  const { name } = useParams();
  const project = projectsList.find((project) => project.name === name);
  return (
    <div className="container pt-[5rem] ">
      <div className="information-container flex items-center justiy-center flex-col fade-in-1">
        <Link
          to="/portfolio"
          className="text-3xl font-extrabold text-indigo-500 transition duration-200 hover:text-indigo-500"
        >
          Projects
        </Link>
        <span className="mt-4 text-slate-400 border-t border-slate-300 w-64"></span>
        <p className="text-slate-600 mt-4 max-w-md text-center">
          {project.label}
        </p>
        <div className="technologies-container mt-5 flex place-content-between flex-wrap sm:min-w-24 justify-center">
          {project.technologies.map((tech) => {
            return (
              <span className="text-xs md:text-sm mr-2 border border-slate-500 px-5 rounded-xl text-slate-500 mb-2">
                {tech}
              </span>
            );
          })}
        </div>
        <img
          src={`../img/portfolio-imgs/${project.name}.png`}
          alt="Project"
          className="project-image rounded-xl w-[90%] mt-5 md:w-[60%] drop-shadow-md"
        />
        <div className="description-container mt-5">
          <ProjectDescription name={project.name}></ProjectDescription>
        </div>
        {/* <div className="flex mt-10 self-start md:ml-[5%] ml-[7%] sm:hidden">
          More Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 pt-[2px] ml-2"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div> */}
        {/* <div className="projects-container fade-in-2 max-w-[100vw] sm:hidden lg:px-[15rem] flex overflow-scroll mb-5">
          {projectsList.map((moreProject) => {
            if (moreProject.name !== project.name) {
              return (
                <Link
                  to={`/portfolio/${moreProject.name}`}
                  className="project m-5 bg-slate-100text-slate-50 duration-300 transition hover:translate-y-[-3px]"
                >
                  <div className="image-container w-[30rem] h-[12rem] overflow-hidden">
                    <img
                      src={`../img/portfolio-imgs/${moreProject.name}.png`}
                      alt="Project"
                      className="project-image rounded-t-3xl"
                    />
                  </div>
                  <div className="project-information bg-slate-50 p-5 drop-shadow-lg rounded-b-3xl">
                    <h3 className="text-slate-900 font-bold">
                      {moreProject.label}
                    </h3>
                    <div className="tech-container mt-5 mb-[-0.5rem]">
                      {moreProject.technologies.map((tech) => {
                        return (
                          <span className="text-slate-500 font-medium text-xs mr-2">
                            #{tech}
                          </span>
                        );
                      })}
                    </div>
                    <span className="text-slate-900 font-regular text-xs">
                      {moreProject.type}
                    </span>
                  </div>
                </Link>
              );
            }
          })}
        </div> */}
      </div>
    </div>
  );
}
