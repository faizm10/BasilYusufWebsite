"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
const AboutMeSection: React.FC = () => {
  let tabs = [
    {
      id: "1",
      label: "Fiable",
      content:
        "Hybrid mobile app that incentivises biking through a reward system",
    },
    {
      id: "2",
      label: "Beachify",
      content: "",
    },
    {
      id: "3",
      label: "C++ Networking",
      content: "",
    },
  ];
  return (
    <>
      <Divider />
      <div className="flex flex-col items-center p-10 bg-blue-300">
        <h1 className="text-6xl font-bold text-center ">About Me</h1>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold underline">Education</h2>
          <p className="mt-2 text-xl font-medium">University of Guelph</p>
          <p className="text-lg">
            Bachelor of Computing, Computer Science with minor in Economics
          </p>
          <p className="text-lg font-light">Guelph, Ontario, Canada</p>
          <p className="text-lg font-bold">cGPA: 4.0</p>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
