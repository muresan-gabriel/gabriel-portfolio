import "./home.css";

import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

import DemoContainer from "../../components/demo-container/DemoContainer.tsx";
import UserResearch from "../../components/user-research-container/UserResearch.tsx";
import SocialIcons from "../../components/social-icons/SocialIcons.tsx";
import LandingContainer from "../../components/landing-container/LandingContainer.tsx";

export default function Homepage() {
  const navigate = useNavigate();

  const terminalFunction = useCallback((event) => {
    console.log(event);
    if (event.ctrlKey && event.key === "y") {
      navigate("/terminal");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", terminalFunction, false);

    return () => {
      document.removeEventListener("keydown", terminalFunction, false);
    };
  }, [terminalFunction]);
  return (
    <div id="container">
      <LandingContainer></LandingContainer>
      <div
        className="min-h-screen bg-slate-900 pb-20 ring-2 ring-offset-1 ring-indigo-500 text-slate-50 pt-5"
        id="info"
      >
        <div className="mx-auto max-w-7xl ">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-3xl md:text-4xl font-black fade-in-3 mb-5 mt-5">
              Why work with me?
            </h4>
            <p className="md:max-w-xl text-slate-400 text-md text-center max-w-xs">
              I am passionate about the web. I have experience with different
              frameworks and libraries and I always aim to learn more about
              various technologies, both on frontend and backend.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-6 mt-10 mb-10">
          <div className="flex self-center flex-col">
            <h4 className="text-3xl md:text-4xl font-black fade-in-3 mt-10">
              Always mobile-first
            </h4>
            <span className="text-sm text-indigo-500 mb-5">
              Responsive design & development
            </span>
            <p className="text-slate-400 font-medium max-w-lg">
              Your products will look fantastic on any screen-size. I always
              build apps and projects mobile-first to ensure they're just as
              great on mobile as on higher screen-sizes.
            </p>
            <DemoContainer></DemoContainer>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-6">
          <div className="flex self-center flex-col">
            <h4 className="text-3xl md:text-4xl font-black fade-in-3 mt-10">
              User-centered development
            </h4>
            <span className="text-sm text-rose-500 mb-5">
              Research, evaluate, implement
            </span>
            <p className="text-slate-400 font-medium max-w-lg">
              While crafting a solution, my focus is always on the end-user,
              both in design and development, no matter if I'm building a simple
              landing or a complex application.
            </p>
          </div>
          <UserResearch></UserResearch>
        </div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-6">
          <div className="flex self-center flex-col">
            <h4 className="text-3xl md:text-4xl font-black fade-in-3 mt-10">
              Team player
            </h4>
            <span className="text-sm text-amber-500 mb-5">
              Respect, communication, reliability
            </span>
            <p className="text-slate-400 font-medium max-w-lg">
              Ensuring the team's success is and should always be a priority.
              Without a cooperation and communication, delivering a product will
              be difficult and rigid.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-6">
          <div className="flex self-center flex-col">
            <h4 className="text-3xl md:text-4xl text-center font-black fade-in-3 mt-10">
              Let's discuss!
            </h4>
            <span className="text-sm text-center text-lime-400 mb-5">
              We can build something great together
            </span>
            <p className="text-slate-400 font-medium text-center">
              Say hi 👋 on social media or via{" "}
              <a
                href="mailto:contact@gabrielmuresan.site"
                className="text-indigo-500 animate transition duration-1 hover:text-indigo-600"
              >
                email
              </a>
              !
            </p>
          </div>
          <SocialIcons></SocialIcons>
        </div>
      </div>
    </div>
  );
}
