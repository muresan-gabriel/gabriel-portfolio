"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var data_1 = require("../../components/data");
var react_1 = require("react");
var ProjectDescription_tsx_1 = require("./ProjectDescription.tsx");
function Project(_a) {
    var match = _a.match;
    var name = react_router_dom_1.useParams().name;
    var project = data_1.projectsList.find(function (project) { return project.name === name; });
    return (react_1["default"].createElement("div", { className: "container pt-[5rem] " },
        react_1["default"].createElement("div", { className: "information-container flex items-center justiy-center flex-col fade-in-1" },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/portfolio", className: "text-3xl font-extrabold text-indigo-500 transition duration-200 hover:text-indigo-500" }, "Projects"),
            react_1["default"].createElement("span", { className: "mt-4 text-slate-400 border-t border-slate-300 w-64" }),
            react_1["default"].createElement("p", { className: "text-slate-600 mt-4 max-w-md text-center" }, project.label),
            react_1["default"].createElement("div", { className: "technologies-container mt-5 flex place-content-between flex-wrap sm:min-w-24 justify-center" }, project.technologies.map(function (tech) {
                return (react_1["default"].createElement("span", { className: "text-xs md:text-sm mr-2 border border-slate-500 px-5 rounded-xl text-slate-500 mb-2" }, tech));
            })),
            react_1["default"].createElement("img", { src: "../img/portfolio-imgs/" + project.name + ".png", alt: "Project", className: "project-image rounded-xl w-[90%] mt-5 md:w-[60%] drop-shadow-md" }),
            react_1["default"].createElement("div", { className: "description-container mt-5" },
                react_1["default"].createElement(ProjectDescription_tsx_1["default"], { name: project.name })),
            react_1["default"].createElement("div", { className: "flex mt-10 self-start md:ml-[5%] ml-[7%] sm:hidden" },
                "More Projects",
                react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6 pt-[2px] ml-2" },
                    react_1["default"].createElement("path", { fillRule: "evenodd", d: "M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z", clipRule: "evenodd" }))),
            react_1["default"].createElement("div", { className: "projects-container fade-in-2 max-w-[100vw] sm:hidden lg:px-[15rem] flex overflow-scroll mb-5" }, data_1.projectsList.map(function (moreProject) {
                if (moreProject.name !== project.name) {
                    return (react_1["default"].createElement(react_router_dom_1.Link, { to: "/portfolio/" + moreProject.name, className: "project m-5 bg-slate-100text-slate-50 duration-300 transition hover:translate-y-[-3px]" },
                        react_1["default"].createElement("div", { className: "image-container w-[30rem] h-[12rem] overflow-hidden" },
                            react_1["default"].createElement("img", { src: "../img/portfolio-imgs/" + moreProject.name + ".png", alt: "Project", className: "project-image rounded-t-3xl" })),
                        react_1["default"].createElement("div", { className: "project-information bg-slate-50 p-5 drop-shadow-lg rounded-b-3xl" },
                            react_1["default"].createElement("h3", { className: "text-slate-900 font-bold" }, moreProject.label),
                            react_1["default"].createElement("div", { className: "tech-container mt-5 mb-[-0.5rem]" }, moreProject.technologies.map(function (tech) {
                                return (react_1["default"].createElement("span", { className: "text-slate-500 font-medium text-xs mr-2" },
                                    "#",
                                    tech));
                            })),
                            react_1["default"].createElement("span", { className: "text-slate-900 font-regular text-xs" }, moreProject.type))));
                }
            })))));
}
exports["default"] = Project;
