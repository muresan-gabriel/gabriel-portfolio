import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-home flex justify-center min-h-screen mx-auto max-w-7xl px-6 sm:px-8 lg:px-6 overflow-hidden">
      <div className="container flex flex-col self-center items-center justify-center">
        <div className="fade-in-1">
          <span className="text-[7rem] md:text-[13.5rem]">4</span>
          <span className="text-[7rem] md:text-[13.5rem]">0</span>
          <span className="text-[7rem] md:text-[13.5rem]">4</span>
        </div>
        <span className="text-center font-bold text-slate-500 fade-in-2">
          Sorry, the page you're looking for does not exist.
        </span>
        <Link
          className="bg-indigo-500 py-3 px-5 mt-5 rounded-2xl text-slate-50 transition duration-1 hover:bg-indigo-600"
          to="/"
        >
          Take me back home
        </Link>
      </div>
    </div>
  );
}
