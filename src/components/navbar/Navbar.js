import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex md:px-10 md:py-3 px-3 py-2 items-center place-content-between">
      <Link className="nav-brand" to="/">
        <img
          src="../img/logo-svg.svg"
          alt="Gabriel"
          className="nav-brand-img slideInFromTop-1"
        />
      </Link>
      <div className="nav-links hidden md:flex">
        <Link
          to="/"
          className="hover:text-indigo-600 transition duration-50 slideInFromTop-2"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className="hover:text-indigo-600 transition duration-50 ease-in slideInFromTop-3"
        >
          Portfolio
        </Link>
        <Link
          to="/about"
          className="hover:text-indigo-600 transition duration-50 ease-in slideInFromTop-4"
        >
          About
        </Link>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="ham-nav-links md:hidden slideInFromTop-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6 flex items-center justify-center">
                          <div className="nav-links-mobile flex flex-col items-center">
                            <Link
                              onClick={() => setOpen(false)}
                              to="/"
                              className="hover:text-indigo-600 transition duration-150 ease-in"
                            >
                              HOME
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              to="/portfolio"
                              className="hover:text-indigo-600 transition duration-150 ease-in"
                            >
                              PORTFOLIO
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              to="/about"
                              className="hover:text-indigo-600 transition duration-150 ease-in"
                            >
                              ABOUT
                            </Link>
                          </div>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </nav>
  );
}
