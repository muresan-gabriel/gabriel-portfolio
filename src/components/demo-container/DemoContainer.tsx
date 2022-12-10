import "./demo-container.css";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function DemoContainer() {
  const [browserWidth, setBrowserWidth] = useState(1200);
  const [browserHeight, setBrowserHeight] = useState(590);

  const resizer = document.getElementById("resizer");

  const resize = (e: MouseEvent, data: Object) => {
    setBrowserWidth(browserWidth + data.deltaX);
    document.cursor = "pointer";
  };

  const [content, setContent] = useState(
    "pt-6 w-full h-full h-max flex flex-row-reverse"
  );
  const [information, setInformation] = useState("bg-indigo-600 h-64 w-full");
  const [gallery, setGallery] = useState(
    "max-h-36 max-w-sm overflow-y-hidden rounded-lg mb-2 flex"
  );
  const [wideImage, setWideImage] = useState("w-full self-center");

  useEffect(() => {
    if (window.innerWidth < 568) {
      setContent("pt-6 w-full h-full h-max flex flex-col");
      setContent("pt-6 w-full h-full h-max flex flex-col");
      setGallery("max-h-36 max-w-full overflow-y-hidden rounded-lg mb-2 flex");
      setInformation("h-64 w-full");
      setWideImage("w-full self-center");
      return;
    }
    if (browserWidth < 756) {
      setContent("pt-6 w-full h-full h-max flex flex-col");
      setGallery("max-h-36 max-w-full overflow-y-hidden rounded-lg mb-2 flex");
      setInformation("h-max w-full");
      setWideImage("w-full self-center");
      return;
    }
    setContent("pt-6  h-full h-max w-full flex flex-row-reverse justify-start");
    setGallery("max-h-64 max-w-sm overflow-y-hidden rounded-lg mb-2 flex");
    setInformation("w-full");
    setWideImage("w-full self-center");
  }, [browserWidth]);

  const [loaded, setLoaded] = useState(false);

  function onLoad() {
    setLoaded(true);
  }

  return (
    <main className="demo-container flex items-center relative">
      <div
        className="bg-slate-800 mt-10 rounded-xl border border-slate-700 overflow-hidden"
        id="demoBrowser"
        style={{ width: browserWidth + "px", height: browserHeight + "px" }}
      >
        <div className="h-20 bg-slate-700 border-t border-slate-600 flex flex-col rounded-t-xl">
          <div className="url--buttons flex items-center grid grid-cols-3">
            <div className="buttons flex m-4 p-1">
              <div className="rounded-full h-2 w-2 bg-rose-500 hover:bg-rose-600 transition duration-1"></div>
              <div className="rounded-full h-2 w-2 bg-yellow-500 hover:bg-yellow-600 transition duration-1 ml-2"></div>
              <div className="rounded-full h-2 w-2 bg-green-500 hover:bg-green-600 transition duration-1 ml-2"></div>
            </div>
            <div className="h-8 w-48 bg-slate-800 col-start-2 place-self-center rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#64748b"
                className="w-3 h-3 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs text-slate-500">travel.co</span>
            </div>
          </div>
          <div className="tabs h-8 flex grid grid-cols-3 border-b border-slate-900 text-xs">
            <div className="flex items-center justify-center rounded-tr-md bg-slate-800 px-5 border-t border-slate-900">
              <p className="truncate overflow-hidden ... text-slate-500">
                Gabriel - Web Developer
              </p>
            </div>
            <div className="flex items-center justify-center rounded-b-md bg-slate-700 px-5">
              <p className="truncate overflow-hidden ... text-slate-200">
                Travel.co - Romania, Prahova, Peleș Castle
              </p>
            </div>
            <div className="flex items-center justify-center rounded-tl-md bg-slate-800 px-5 border-t border-slate-900">
              <p className="truncate overflow-hidden ... text-slate-500">
                Stack Overflow - CSS - Center a div in CSS
              </p>
            </div>
          </div>
        </div>
        <div className="content flex text-xs font-light px-9 h-fit">
          <div id="content" className={content}>
            <div id="gallery" className={gallery}>
              <div
                className="bg-slate-900 w-[584px] md:h-[256px] h-max rounded-md flex justify-center items-center"
                style={{ display: !loaded ? "flex" : "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#334155"
                  className="md:w-24 md:h-max h-max w-16 animate-pulse"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                </svg>
              </div>
              <img
                style={{ display: loaded ? "block" : "none" }}
                src="../img/peles-majkl.jpg"
                className={wideImage}
                id="wideImage"
                onLoad={onLoad}
              />
            </div>
            <div id="information" className={information}>
              <span className="text-lg font-bold">Peleș Castle</span>
              <br />
              <div className="flex items-center mb-5">
                <a
                  className="flex items-center"
                  target="_blank"
                  href="https://www.google.com/maps/place/Castelul+Pele%C8%99/@45.3599816,25.5426423,17z/data=!3m1!4b1!4m5!3m4!1s0x40b316ecd2e0556d:0x9a6e63a594f3d5ad!8m2!3d45.3599816!4d25.5426423"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#94a3b8"
                    className="w-3 h-3 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  <span className="text-slate-400">
                    Prahova County, Romania
                  </span>
                </a>
              </div>
              <p className="pr-10">
                Peleș Castle is a Neo-Renaissance castle in the Carpathian
                Mountains, near Sinaia, in Prahova County, Romania, on an
                existing medieval route linking Transylvania and Wallachia,
                built between 1873 and 1914. <br />
                <br />
                Its inauguration was held in 1883. It was constructed for King
                Carol I. (
                <a
                  href="https://en.wikipedia.org/wiki/Pele%C8%99_Castle"
                  target="_blank"
                  className="text-indigo-400 hover:text-indigo-300 transition duration-1"
                >
                  Source
                </a>
                )
              </p>
              <button className="p-2 w-24 mt-5 bg-indigo-500 rounded-lg flex items-center justify-center text-sm font-medium transition duration-1 hover:bg-indigo-600">
                Visit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-9 mt-7 bg-slate-900 h-64 rounded-xl border-2 border-dashed border-slate-600"></div>
      </div>
      <Draggable
        axis="x"
        handle="#resizer"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[1, 1]}
        scale={1}
        onDrag={resize}
        bounds={{ left: -850, right: 1 }}
      >
        <div
          className="bg-slate-600 h-8 w-2 ml-2 rounded-md hidden xl:block cursor-e-resize absolute right-4"
          id="resizer"
        ></div>
      </Draggable>
    </main>
  );
}
