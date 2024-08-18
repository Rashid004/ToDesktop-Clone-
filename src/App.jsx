/** @format */

import { useEffect } from "react";
import Navigation from "./components/Navigation";
import "./index.css";
import { MdOutlineArrowForward } from "react-icons/md";

function App() {
  const setupIntersectionObserver = (element, isLTR, speed) => {
    const initialTranslate = isLTR ? -48 * 4 : 36 * 4;
    let startY;

    const intersectionCallback = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        startY = window.scrollY;
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const intersectionObserver = new IntersectionObserver(
      intersectionCallback,
      {
        threshold: 0.15, // Trigger when 10% of the element is visible
      }
    );

    if (element) {
      intersectionObserver.observe(element);
    }

    function handleScroll() {
      const scrollDiff = window.scrollY - startY;
      const translateX = scrollDiff * speed;
      const totalTranslate = isLTR
        ? initialTranslate + translateX
        : -(initialTranslate + translateX);
      element.style.transform = `translateX(${totalTranslate}px)`;
    }

    return () => {
      if (element) {
        intersectionObserver.unobserve(element);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  };

  useEffect(() => {
    const line1 = document.getElementById("line-1");
    const line2 = document.getElementById("line-2");
    const line3 = document.getElementById("line-3");

    const cleanup1 = setupIntersectionObserver(line1, true, 0.7);
    const cleanup2 = setupIntersectionObserver(line2, false, 0.3);
    const cleanup3 = setupIntersectionObserver(line3, true, 0.7);

    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    };
  }, []);

  return (
    <>
      <Navigation />
      {/* Hero Container */}
      <div className=" min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
        <div
          id="hero-conatiner"
          className="flex flex-col px-6 pt-6 pb-32 max-w-4xl mx-auto sm:items-center sm:text-center sm:pt-12"
        >
          <div
            id="version"
            className="inline-flex items-center my-6 gap-2 bg-yellow-50 border-yellow-300 py-1 border rounded-lg px-3 hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition text-gray-900 font-medium text-base shadow-md group w-fit"
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-300"></div>
            <p className="text-base sm:text-lg font-semibold text-yellow-600">
              v0.22.3:
              <span className="text-yellow-800">Find-in-page bug fix</span>
            </p>
            <MdOutlineArrowForward className="text-yellow-600 group-hover:translate-x-1 transition" />
          </div>
          <div className="hidden sm:flex gap-8 my-6">
            <div className="flex justify-center items-center gap-2 text-gray-500 ">
              <img src="public/assets/file.svg" alt="File" />
              <p>Code optional</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-gray-500 ">
              <img src="public/assets/hand.svg" alt="File" />

              <p>Drag & drop builder</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-gray-500 ">
              <img src="public/assets/store.svg" alt="File" />
              <p>Windowa, Mac, Linux</p>
            </div>
          </div>
          <h1 className="text-4xl sm:text-7xl font-semibold leading-snug sm:leading-normal ">
            Web app to desktop app in minutes
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mt-4 ">
            Take your web app codebase and transform it into a cross platform
            desktop app with native <br className="md:hidden" /> functionality.
          </p>
          <div className="flex flex-col md:justify-center md:flex-row gap-4 mt-12">
            <button className="px-8 py-3 bg-indigo-600 font-semibold hover:bg-opacity-90 text-white shadow-sm rounded-lg">
              Download Now
            </button>
            <button className="px-8 py-3 bg-white font-semibold border border-gray-400 hover:border-gray-800 shadow-sm rounded-lg">
              Read docs
            </button>
          </div>
        </div>
        <div
          id="companies-container"
          className="flex flex-col gap-8 overflow-x-hidden"
        >
          <div className="flex items-center justify-center gap-2 uppercase">
            <img
              className="translate-y-2"
              src="public/assets/arrow.svg"
              alt="Arrow down"
            />
            <span className="font-semibold">Apps powered by To Desktop</span>
            <img
              className="translate-y-2 -scale-x-100"
              src="public/assets/arrow.svg"
              alt="Arrow down"
            />
          </div>

          <div id="group" className="flex flex-col gap-4 ">
            <div
              id="line-1"
              className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
            >
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
            </div>
            <div
              id="line-2"
              className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear"
            >
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
            </div>
            <div
              id="line-3"
              className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
            >
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt="icon"
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1000px]"></div>

      {/* <div className="flex flex-col items-start gap-8 md:gap-12 md:items-center w-full md:w-3/4 lg:w-1/2 xl:w-[40%] md:text-center text-start">
     
        </div>
        <div
          id="comapnies-conatiner"
          className="flex flex-col gap-8 overflow-x-hidden h-[1000px]"
        >
          
          <div id="line-group" className="flex flex-col gap-4 ">
            <div id="line-1" className="flex gap-4 w-screen -translate-x-48 ">
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>

              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
            </div>
            <div id="line-2" className="flex gap-4 w-screen -translate-x-36">
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>

              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
            </div>
            <div id="line-3" className="flex gap-4 w-screen -translate-x-48">
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 3.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-24 min-w-24  bg-white rounded-xl border border-gray-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16"
                  src="public/assets/asset 4.png"
                  alt=""
                />
                <span className="text-xs md:text-base font-semibold">
                  Unbounce
                </span>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default App;
