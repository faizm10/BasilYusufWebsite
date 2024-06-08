"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Accordion, AccordionItem, Card, CardBody } from "@nextui-org/react";
const AboutMeSection: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="bg-yellow-400  p-4 text-black flex flex-col justify-center items-center">
          <div className="align-middle">
            <h2 className="text-8xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-6 font-sans">Hi, I'm Basil</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutMeSection;
