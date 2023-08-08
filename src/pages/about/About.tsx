import "./about.css";

import { workExperience } from "../../components/data.js";
import { education } from "../../components/data.js";
import { certifications } from "../../components/data.js";

export default function About() {
  return (
    <div className="container pt-[10rem] w-100 md:w-[45%] flex flex-col fade-in-1">
      <h3 className="text-3xl md:text-4xl font-black text-slate-900 text-center px-2 md:px-[5rem] mb-12">
        Hi! I'm a web developer and a software engineering master's student.
      </h3>
      <div className="container work-experience px-2">
        <h3 className="text-3xl mb-5 font-black text-slate-900">
          Work Experience
        </h3>
        {workExperience.map((experience) => {
          return (
            <div className="flex">
              <div className="border-[5px] border-indigo-500 w-5 h-5 mr-4 mt-[5px] rounded-full"></div>

              <div className="mb-8">
                <h5 className="text-[20px] text-slate-900 font-extrabold mb-[-2px]">
                  {experience.position}
                </h5>
                <h6 className="text-[16px] font-bold text-slate-500">
                  {experience.company}
                </h6>
                <span className="text-[16px] font-medium text-slate-400">
                  {`${experience.startDate} - ${experience.endDate} • ${experience.experience}`}
                </span>
                {experience.description ? (
                  <p
                    className="text-[14px] md:text-[16px] w-[20rem] md:w-[40vw] font-bold mt-3 mb-[-3px] text-slate-800 leading-[20px]"
                    style="white-space: pre;"
                  >
                    {experience.description}
                  </p>
                ) : (
                  <></>
                )}
                <div className="flex flex-wrap mt-3">
                  {experience.technologies ? (
                    experience.technologies.map((exp) => {
                      return (
                        <div className="text-[12px] text-slate-400 mr-4">
                          {exp}
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container education px-2">
        <h3 className="text-3xl mb-5 font-black text-slate-900">Education</h3>
        {education.map((education) => {
          return (
            <div className="flex">
              <div className="border-[5px] border-indigo-500 w-5 h-5 mr-4 mt-[5px] rounded-full"></div>

              <div className="mb-8">
                <h5 className="text-[20px] text-slate-900 font-extrabold mb-[-2px]">
                  {education.specialization}
                </h5>
                <h6 className="text-[16px] font-bold text-slate-500">
                  {education.university}
                </h6>
                <span className="text-[16px] font-medium text-slate-400">
                  {`${education.startDate} - ${education.endDate}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container education px-2">
        <h3 className="text-3xl mb-5 font-black text-slate-900">
          Certifications
        </h3>
        {certifications.map((certifications) => {
          return (
            <div className="flex">
              <div className="border-[5px] border-indigo-500 w-5 h-5 mr-4 mt-[5px] rounded-full"></div>

              <div className="mb-8">
                <h5 className="text-[20px] text-slate-900 font-extrabold mb-[-2px]">
                  {certifications.certification}
                </h5>
                <h6 className="text-[16px] font-bold text-slate-500">
                  {certifications.tool}
                </h6>
                <span className="text-[16px] font-medium text-slate-400">
                  {`Issued ${certifications.issued}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
