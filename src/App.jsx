/** @format */

import { BiCheck } from "react-icons/bi";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import "./index.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

function App() {
  const data = [
    {
      question: "Is ToDesktop For Me?",
      answer:
        "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you. If you want to make a desktop app of a website for your personal use, ToDesktop is overkill.",
    },
    {
      question: "Can I try ToDesktop without buying?",
      answer:
        "Yes. You can get started by downloading ToDesktop Builder at no cost. After installing it, you can build your desktop application and preview it by clicking the 'Run' button. This allows you to test the app on your own computer to ensure it performs to your expectations.",
    },
    {
      question: "What support do you offer?",
      answer:
        "We’ll do our best to help you with any issue you encounter with ToDesktop. You can get in touch with us via email and chat. On the Startup plan, we deal with the same day or the next day.",
    },
    {
      question: "How does ToDesktop pricing work?",
      answer:
        "ToDesktop offers different pricing plans based on your needs. The Startup plan includes basic features, while the Professional and Enterprise plans offer advanced features and dedicated support. You can choose a plan that fits your requirements.",
    },
    {
      question: "What platforms does ToDesktop support?",
      answer:
        "ToDesktop supports Windows, macOS, and Linux platforms. You can build a desktop application that runs on all major operating systems using ToDesktop Builder.",
    },
    {
      question: "Can I customize the look and feel of my desktop app?",
      answer:
        "Yes, ToDesktop allows you to fully customize the appearance of your desktop application. You can adjust the design, add your branding, and create a seamless user experience that aligns with your brand.",
    },
  ];

  const [isTrue, setIsTrue] = useState(Array(data.length).fill(false));

  const handleToggle = (index) => {
    setIsTrue((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

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

      <div
        id="faqs"
        className="px-6 py-12 mt-16 max-w-7xl mx-auto lg:px-8 lg:mt-32"
      >
        <h2 className="text-4xl sm:font-semibold uppercase">Faqs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="group border bg-gray-50 border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <dt className="flex justify-between items-center">
                <p className="font-display font-medium text-lg">
                  {item.question}
                </p>
                <button onClick={() => handleToggle(index)}>
                  {isTrue[index] ? (
                    <MdKeyboardArrowDown className="w-8 h-8" />
                  ) : (
                    <MdKeyboardArrowUp className="w-8 h-8" />
                  )}
                </button>
              </dt>
              {isTrue[index] && (
                <dd className="transition duration-150 ease-in-out">
                  <p className="font-body text-lg font-light mt-6 text-gray-500">
                    {item.answer}
                  </p>
                </dd>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
