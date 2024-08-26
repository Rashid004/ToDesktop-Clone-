/** @format */
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import "../index.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="flex items-center justify-between px-5 bg-white py-1">
      <a href="#" className="flex items-center gap-1 flex-1">
        <img
          className="object-cover max-w-12 max-h-12"
          src="public/assets/logo.png"
          alt="Logo"
        />
        <span className="text-lg font-semibold">{t("ToDesktop")}</span>
      </a>

      <div className="hidden lg:flex items-center gap-3 ">
        <a
          href="#"
          className="hover:bg-indigo-500 rounded-md block font-semibold m-3 p-3 text-lg "
        >
          {t("Pricing")}
        </a>
        <a
          href="#"
          className="hover:bg-indigo-500 rounded-md block font-semibold m-3 p-3 text-lg"
        >
          {t("Docs")}
        </a>
        <a
          href="#"
          className="hover:bg-indigo-500 rounded-md block font-semibold m-3 p-3 text-lg"
        >
          {t("Changelog")}
        </a>
        <a
          href="#"
          className="hover:bg-indigo-500 rounded-md block font-semibold m-3 p-3 text-lg"
        >
          {t("Blog")}
        </a>
        <a
          href="#"
          className="hover:bg-indigo-500 rounded-md block font-semibold m-3 p-3 text-lg"
        >
          {t("Login")}
        </a>
      </div>

      <div className="hidden lg:flex flex-1 justify-end">
        <button className=" flex items-center gap-1 text-lg px-2 py-1 rounded-lg font-medium border border-gray-400 hover:border-gray-600">
          <img src="public/assets/electron.svg" alt="Electron" />
          <span>{t("Electron Developer")}</span>
          <IoIosArrowRoundForward />
        </button>
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <LanguageSelector />
      </div>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" text-gray-800 lg:hidden border-none outline-none"
      >
        {isOpen ? <RxCross2 /> : <FaBars />}
      </button>

      {isOpen && (
        <div
          id="nav-dialog"
          className="fixed inset-0 bg-white lg:hidden z-10 h-screen px-5 py-1 overflow-y-auto"
        >
          <div className="flex justify-between mb-6">
            <a href="#" className="flex items-center gap-1">
              <img src="public/assets/logo.png" alt="Logo" />
              <span className="text-lg lg:text-xl font-semibold">
                {t("ToDesktop")}
              </span>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 lg:hidden border-none outline-none"
            >
              <RxCross2 />
            </button>
          </div>
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="hover:bg-gray-50 rounded-md block font-semibold p-3"
            >
              {t("Pricing")}
            </a>
            <a
              href="#"
              className="hover:bg-gray-50 rounded-md block font-semibold p-3"
            >
              {t("Docs")}
            </a>
            <a
              href="#"
              className="hover:bg-gray-50 rounded-md block font-semibold p-3"
            >
              {t("Changelog")}
            </a>
            <a
              href="#"
              className="hover:bg-gray-50 rounded-md block font-semibold p-3"
            >
              {t("Blog")}
            </a>
            <a
              href="#"
              className="hover:bg-gray-50 rounded-md block font-semibold p-3"
            >
              Login
            </a>
          </div>
          <hr className="bg-gray-300 my-6" />
          <button className="w-full flex items-center gap-1 text-lg px-2 py-1 rounded-lg hover:bg-gray-50">
            <img src="public/assets/electron.svg" alt="Electron" />
            <span className="text-base font-semibold">Electron Developer</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
