import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";

import { projectsList } from "../../components/data.js";
import ProjectLoading from "../../components/project-loading/ProjectLoading.tsx";

export default function Portfolio(props) {
  const [loaded, setLoaded] = useState(false);
  function onLoad() {
    setLoaded(true);
  }
  // const [projData, setProjData] = useState([]);

  // const projectsCollection = "projects";
  // const projectsRef = collection(props.db, projectsCollection);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  // Fetching Firebase Data - Disabled Until Built Website

  // const getData = async () => {
  //   const fetchData = await getDocs(projectsRef);
  //   setData(
  //     fetchData.docs.map((document) => ({
  //       ...document.data(),
  //       id: document.id,
  //     }))
  //   );
  // };

  // Add getData to Hook
  // useEffect(() => {
  //   setLoading(false);
  //   getData();
  // }, [getData, projectsRef]);

  return (
    <div className="container pt-[5rem] ">
      <div className="information-container flex items-center justiy-center flex-col fade-in-1">
        <h1 className="text-3xl font-extrabold">Projects</h1>
        <p className="text-slate-600 pt-5 max-w-md text-center">
          Various projects I've built or designed.
        </p>
      </div>
      <div className="projects-container fade-in-2 pt-[2rem] mb-5 lg:flex-wrap lg:px-[15rem] flex lg:flex-row flex-col items-center justify-center">
        {projectsList.map((project) => {
          return (
            <Link
              style={{ display: loaded ? "block" : "none" }}
              to={`/portfolio/${project.name}`}
              className="project m-5 bg-slate-100 w-100 xl:w-[45%] text-slate-50 duration-300 transition hover:translate-y-[-3px]"
            >
              <div className="image-container lg:w-full w-full max-h-[15rem] overflow-hidden">
                <img
                  src={`img/portfolio-imgs/${project.name}.png`}
                  alt={project.name}
                  className="project-image rounded-t-3xl"
                  onLoad={onLoad}
                  // onLoad={setLoading(false)}
                />
              </div>
              <div className="project-information bg-slate-50 p-5 drop-shadow-lg rounded-b-3xl">
                <h3 className="text-slate-900 font-bold">{project.label}</h3>
                <div className="tech-container mt-5 mb-[-0.5rem]">
                  {project.technologies.map((tech) => {
                    return (
                      <span className="text-slate-500 font-medium text-xs mr-2">
                        #{tech}
                      </span>
                    );
                  })}
                </div>
                <span className="text-slate-900 font-regular text-xs">
                  {project.type}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
