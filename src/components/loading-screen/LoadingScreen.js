import { React } from "react";
import "./loading.css";

const LoadingScreen = () => {
  return (
    <div
      className="flex flex-col justify-center items-center fadeIn"
      id="loadingScreen"
    >
      <img
        className="logo-svg"
        src="../img/logo-svg.svg"
        alt="logo-loading"
        id="logoSvg"
      />
      <div className="hide-bug">
        {
          (setTimeout(() => {
            document.getElementById("loadingScreen").classList.remove("fadeIn");
          }, 1300),
          setTimeout(() => {
            document.getElementById("loadingScreen").classList.add("fadeOut");
          }, 1300))
        }
      </div>
    </div>
  );
};

export default LoadingScreen;
