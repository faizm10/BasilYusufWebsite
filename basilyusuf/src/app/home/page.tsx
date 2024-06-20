"use client";
import React from "react";
import TwitterCard from "@/components/TwitterCard/page";
import GitHubCard from "@/components/GithubCard/page";
import InstagramCard from "@/components/InstagramCard/page";
import LinkedInCard from "@/components/LinkedinCard/page";

export default function LandingPage() {
  return (
    <>
      <div className="main flex flex-col items-center">
        <div className="flex justify-center animated-image-container">
          <img
            src="./images/feelingProud.svg"
            alt="Basil Profile"
            className="w-86 p-4 h-auto animated-image"
          />
        </div>
        <h1 className="p-4 text-3xl font-bold text-center">
          Hi, I'm Basil Yusuf
        </h1>
        <p className="text-center text-5xl font-serif">
          I am a passionate and experienced{" "}
          <span className="text-green-800 box-decoration-slice bg-gradient-to-r from-indigo-300 to-pink-300">
            Software Engineer
          </span>{" "}
          with a proven track record in DevOps, Infrastructure, and Full-Stack
          Development
        </p>
        <p className="text-gray-600 p-5 font-bold text-2xl text-center">
          Software Engineer | DevOps Specialist | Continuous Deployment
          Architect
        </p>
      </div>
      <h1 className="text-center font-serif font-semibold text-5xl p-2">
        Follow Me On Social Media
      </h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        <TwitterCard />
        <GitHubCard />
        <InstagramCard />
        <LinkedInCard />
      </div>
    </>
  );
}
