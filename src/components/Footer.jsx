import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black">
      <div className="p-4">
        <h1 className="w-full text-3xl font-bold text-[#00d8ff]">FinFi.</h1>
        <p className="py-4 max-w-[25rem]">
          Thank you for visiting our DeFi finance landing page. With our
          cutting-edge technology, we are committed to helping you monitor your
          data analytics to maximize revenue on BTB, BTC, and SASS platforms.
          Let's grow together!.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://www.google.com/" target={"_blank"} rel="noreferrer">
            <FaFacebookSquare
              size={30}
              className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram
              size={30}
              className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
          </a>
          <a href="https://www.twitter.com/" target={"_blank"} rel="noreferrer">
            <FaTwitterSquare
              size={30}
              className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
          </a>
          {/* <a href="https://www.google.com/" target={"_blank"} rel="noreferrer">
            <FaGithubSquare
              size={30}
              className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
          </a> */}
          {/* <a href="https://www.google.com/" target={"_blank"} rel="noreferrer">
            <FaDribbbleSquare
              size={30}
              className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            />
          </a> */}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-evenly mt-12">
        <div>
          <h6 className="font-medium text-gray-400 ml-3">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Analytics
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Marketing
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Commerce
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Insights
            </li>
          </ul>
        </div>
        {/* <div>
          <h6 className="font-medium text-gray-400 ml-3">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Pricing
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Documentation
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Guides
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              API Status
            </li>
          </ul>
        </div> */}
        <div>
          <h6 className="font-medium text-gray-400 ml-3">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              About
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Blog
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Jobs
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Press
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 ml-3">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
