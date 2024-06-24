"use client";
import React from "react";
import TwitterCard from "@/components/TwitterCard/page";
import GitHubCard from "@/components/GithubCard/page";
import InstagramCard from "@/components/InstagramCard/page";
import LinkedInCard from "@/components/LinkedinCard/page";

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
          Software Engineer | DevOps Specialist | Continuous Deployment Architect
        </p>
      </div>
      {/* <h1 className="text-center font-serif font-semibold text-4xl p-6 text-gray-800">
        Follow Me On Social Media
      </h1> */}
      {/* <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center align-middle bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <TwitterCard />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <GitHubCard />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <InstagramCard />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <LinkedInCard />
        </div>
      </div> */}
    </>
  );
}
