import "./about.css";

import { useNavigate } from "react-router-dom";

export default function About() {
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
      <div className="flex flex-col items-center justify-center min-h-screen fade fade-in-6">
        <div className="w-full flex self-center justify-center text-center py-5 items-center bg-indigo-500 text-indigo-100">
          About page is currently under development 😢 <br />
          Some pages or content might not be available. In the meantime, look at
          this spinning puppy!
        </div>
        <img
          src="../img/nervous-dog-spinning.gif"
          alt="Puppy!"
          loading="lazy"
          width="128"
          className="translate-y-[5px]"
        />
      </div>
    </div>
  );
}
