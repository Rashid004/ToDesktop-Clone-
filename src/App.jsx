/** @format */

import { BiCheck } from "react-icons/bi";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />

      <div
        id="step-by-step"
        className="flex flex-col gap-6 px-6 py-12 mt-16  max-w-7xl mx-auto lg:px-8 lg:mt-32"
      >
        <h1 className="sm:font-semibold text-5xl mb-14">How it works</h1>
        <div
          id="step-1"
          className="flex flex-col lg:flex-row rounded-xl px-8 py-12 border border-gray-400"
        >
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-3 py-1 w-fit rounded-lg text-base font-medium font-display">
              step 1
            </span>
            <h3 className="text-4xl sm:font-semibold">
              Bootstrap straight from your web app
            </h3>
            <p className="text-lg font-light">
              Copy and paste your web app url into ToDesktop. Customise your app
              design, app icon and window frame UI with no code.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Multiple windows
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Menubar/tray menus
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Offline support
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Customisable menus{" "}
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Launch on startup
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Tabs (Mac only)
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-16">
            <img src="./assets/asset 68.svg" alt="icon 66" />
          </div>
        </div>
        <div
          id="step-2"
          className="flex flex-col lg:flex-row rounded-xl px-8 py-12 border border-gray-400"
        >
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-3 py-1 w-fit rounded-lg text-base font-medium font-display">
              step 2
            </span>
            <h3 className="text-4xl sm:font-semibold">
              Add desktop code to customise your web app
            </h3>
            <p className="text-lg font-light">
              No need to create a new repository, just add code from our desktop
              APIs to your codebase and get access to system level
              functionality.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Native notifications
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Application menu
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Dock/Icon
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  File system access
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Global keyboard shortcuts
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Context menu
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-16">
            <img src="./assets/asset 68.svg" alt="icon 66" />
          </div>
        </div>
        <div
          id="step-3"
          className="flex flex-col lg:flex-row rounded-xl px-8 py-12 border border-gray-400"
        >
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-3 py-1 w-fit rounded-lg text-base font-medium font-display">
              step 3
            </span>
            <h3 className="text-4xl sm:font-semibold">Publish </h3>
            <p className="text-lg font-light">
              One-click will publish your desktop app to your customers and give
              you a download link to put on your website.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Multiple windows
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Menubar/tray menus
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Offline support
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Customisable menus{" "}
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Launch on startup
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <BiCheck className="text-lg text-gray-500" />
                <a className="text-lg font-light border-b border-black border-opacity-35 hover:border-opacity-80">
                  Tabs (Mac only)
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-16">
            <img src="./assets/asset 68.svg" alt="icon 66" />
          </div>
        </div>
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
