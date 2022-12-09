export default function ProjectLoading() {
  return (
    <div className="project m-5 w-[90%] xl:w-[45%] duration-300 transition overflow-hidden">
      <div className="image-placeholder  bg-slate-900 h-[15rem] flex items-center justify-center rounded-t-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#334155"
          className="w-24 h-24 animate-pulse"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
      </div>
      <div className="info-placeholder h-[8rem] bg-slate-50 p-5  rounded-b-3xl">
        <div className="flex">
          <div className="loading-text w-[20%] mr-2 rounded-md h-3 bg-slate-500 animate-pulse mb-5"></div>
          <div className="loading-text w-[40%] rounded-md h-3 bg-slate-500 animate-pulse mb-5"></div>
        </div>

        <div className="flex paragraph-container mb-2">
          <div className="loading-text w-[30%] mr-2 rounded-md h-1 bg-slate-300 animate-pulse"></div>
          <div className="loading-text w-[10%] mr-2 rounded-md h-1 bg-slate-300 animate-pulse"></div>
          <div className="loading-text w-[40%] rounded-md h-1 bg-slate-300 animate-pulse"></div>
        </div>
        <div className="flex paragraph-container mb-9">
          <div className="loading-text w-[15%] mr-2 rounded-md h-1 bg-slate-300 animate-pulse"></div>
          <div className="loading-text w-[45%] mr-2 rounded-md h-1 bg-slate-300 animate-pulse"></div>
          <div className="loading-text w-[25%] rounded-md h-1 bg-slate-300 animate-pulse"></div>
        </div>
        <div className="flex paragraph-container mb-2">
          <div className="loading-text w-[10%] mr-2 rounded-md h-2 bg-slate-300 animate-pulse"></div>
          <div className="loading-text w-[15%] mr-2 rounded-md h-2 bg-slate-300 animate-pulse"></div>
          <div className="loading-text w-[13%] rounded-md h-2 bg-slate-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
