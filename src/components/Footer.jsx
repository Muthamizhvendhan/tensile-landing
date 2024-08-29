import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import FloatingButtons from "./FloatingButton";

const Footer = () => {
  return (
    <>
    <FloatingButtons />
    <section className="py-7 bg-[#0d2336]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between ">
          <Link href="/" className="">
            <img src="/atlas-roofing.png" alt="Pagedone Logo" className="w-25 h-20" />
          </Link>
        </div>
        <div className="py-8 flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-500">
          <div className="w-full lg:max-w-md max-lg:mx-auto">
                <h6 className="text-lg font-medium text-[#68c2f3] mb-7">Social Media</h6>
                <div className="flex items-center gap-4">
            <Link
              to="https://facebook.com"
              className="p-2 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-[#6acbff] hover:text-white focus:outline-none"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://instagram.com"
              className="p-2 rounded-full bg-white text-gray-900 group transition-all duration-500 hover:bg-[#6acbff] hover:text-white focus:outline-none"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://twitter.com"
              className="p-2 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-[#6acbff] hover:text-white focus:outline-none"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://youtube.com"
              className="p-2 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-[#6acbff] hover:text-white focus:outline-none"
            >
              <FaLinkedinIn />
            </Link>
          </div>
            </div>
          <div className="w-full max-lg:mx-auto flex flex-col sm:flex-row max-lg:items-start max-sm:items-center  max-lg:justify-between gap-6 md:gap-12 lg:gap-24">
            <div className="">
              <h6 className="text-lg font-medium text-[#68c2f3] mb-7 max-lg:text-center">
                Usefull Links
              </h6>
              <ul className="flex flex-col max-lg:items-center gap-6">
                <li>
                  <Link
                    to="/home"
                    className="text-base font-normal max-lg:text-center text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-base font-normal max-lg:text-center text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-base font-normal max-lg:text-center text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pro-version"
                    className="text-base font-normal max-lg:text-center text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-lg font-medium text-[#68c2f3] mb-7 max-lg:text-center">
                Quick Links
              </h6>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <Link
                    to="/figma-ui-system"
                    className="text-base font-normal text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Engineering Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/icons-assets"
                    className="text-base font-normal text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Employment-HR
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-lg font-medium text-[#68c2f3] mb-7 max-lg:text-center">
                Resources
              </h6>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <Link
                    to="/faqs"
                    className="text-base font-normal text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quick-start"
                    className="text-base font-normal text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-base font-normal text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="text-base font-normal text-gray-100 whitespace-nowrap transition-all duration-300 hover:text-[#6acbff] focus:outline-none"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
          <span className="text-sm font-normal text-gray-400">
            <Link to="/" className="">
              Atlas Roofing &copy;
            </Link>
            2024, All rights reserved.
          </span>
        </div>
      </div>
    </section>
    </>

  );
};

export default Footer;
