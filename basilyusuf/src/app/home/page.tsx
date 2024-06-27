"use client";
import React from "react";



import { FaLinkedinIn } from "react-icons/fa";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  
} from "react-icons/ai";
export default function LandingPage() {
  return (
    <>
      <div className="main flex flex-col items-center bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-12">
        <div className="flex justify-center animated-image-container mb-8">
          <img
            // src="./images/feelingProud.svg"
            src="./images/basiltwitter.jpeg"
            alt="Basil Profile"
            className="w-164 h-164 animated-image shadow-lg "
          />
        </div>
        <h1 className="p-4 text-5xl font-extrabold text-center text-gray-800">
          Hi, I&apos;m Basil Yusuf
        </h1>
        <p className="text-center text-3xl font-serif max-w-3xl px-4 leading-relaxed text-gray-700 mt-4">
          I am a passionate and experienced{" "}
          <span className="text-green-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
            Software Engineer
          </span>{" "}
          with a proven track record in DevOps, Infrastructure, and Full-Stack
          Development
        </p>
        <p className="text-gray-600 p-5 font-semibold text-xl text-center max-w-2xl mt-4">
          Software Engineer | DevOps Specialist | Continuous Deployment
          Architect
        </p>
        <div className="flex align-middle justify-center gap-5 mt-8">
          <a
            href="https://github.com/basilysf1709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              size={40}
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
            />
          </a>
          <a
            href="https://twitter.com/basilysf1709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter
              size={40}
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
            />
          </a>
          <a
            href="https://www.linkedin.com/in/basilysf1709/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              size={40}
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
            />
          </a>
          <a
            href="https://www.instagram.com/basilysf1709/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram
              size={40}
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
            />
          </a>
        </div>
      </div>
    </>
  );
}
