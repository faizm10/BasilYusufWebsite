"use client";
import React from "react";

const AboutMeSection: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="bg-yellow-400 p-4 text-black flex flex-col justify-center items-center">
          <div className="align-middle">
            <h2 className="text-8xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-6 font-sans">Hi, I am Basil</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
