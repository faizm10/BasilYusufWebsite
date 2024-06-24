import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
} from "@nextui-org/react";

const experienceData = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Open Source",
    logo: "./images/workexperience/opensource.jpeg",
    duration: "May 2022 - Present",
    responsibilities: ["20+ Projects (3 Hackathon wins)"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Python"],
    learnMoreLink: "N/A",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Deloitte",
    logo: "./images/workexperience/deloitte.jpeg",
    duration: "Sept 2023 - Apr 2024",
    responsibilities: ["Incident Response"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Python"],
    learnMoreLink: "N/A",
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Amazon",
    logo: "./images/workexperience/amazon.jpeg",
    duration: "May 2023 - Aug 2023",
    responsibilities: ["Amazon Kids+"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Python"],
    learnMoreLink: "N/A",
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "TD Bank",
    logo: "./images/workexperience/td.jpeg",
    duration: "Jan 2023 - Apr 2023",
    responsibilities: ["Credit Offers API"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Python"],
    learnMoreLink: "N/A",
  },
  {
    id: 5,
    role: "Platform/Cloud Architect",
    company: "Interac Corp",
    logo: "./images/workexperience/interac.jpeg",
    duration: "Sept 2022 - Dec 2022",
    responsibilities: ["Amazon Kids+"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Python"],
    learnMoreLink: "N/A",
  },
  {
    id: 6,
    role: "Software Developer",
    company: "University of Guelph",
    logo: "./images/workexperience/uog.jpeg",
    duration: "May 2022 - Aug 2022",
    responsibilities: ["LINCS"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Python"],
    learnMoreLink: "N/A",
  },
  {
    id: 7,
    role: "Software Engineer",
    company: "Fiable",
    logo: "./images/workexperience/fibble.jpeg",
    duration: "Feb 2022 - Jul 2022",
    responsibilities: [
      "GryphHacks 2022 - People's Choice Award | Frontend & Product Development",
    ],
    skills: ["Next.js", "Tailwind CSS", "Python", "API", "TypeScript"],
    learnMoreLink: "N/A",
  },
  {
    id: 8,
    role: "Teaching Assistant",
    company: "University of Guelph",
    logo: "./images/workexperience/uog.jpeg",
    duration: "Sept 2022 - Dec 2022",
    responsibilities: ["OOP"],
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Python"],
    learnMoreLink: "N/A",
  },
];

const ExperienceSection = () => {
  return (
    <>
      <div className="main">
        <section className="py-12 px-4 md:px-12 lg:px-24 bg-[#1a202c] text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-200 mb-10">
              Latest Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {experienceData.map((exp) => (
                <Card
                  key={exp.id}
                  className=" bg-[#2d3748]"
                  shadow="lg"
                  radius="lg"
                >
                  <CardHeader className="flex gap-3">
                    <Image
                      alt={`${exp.company} logo`}
                      height={50}
                      width={50}
                      src={exp.logo}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-200">
                        {exp.role}
                      </p>
                      <p className="text-sm text-gray-400">{exp.company}</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p className="text-gray-400">{exp.duration}</p>
                  </CardBody>
                  <Divider />
                  <CardBody>
                    <p className="font-semibold text-white-200">
                      Responsibilities:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </CardBody>
                  <Divider />
                  <CardBody>
                    <p className="font-semibold text-gray-200">
                      Skills Achieved:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.skills.map((skill, i) => (
                        <Chip
                          key={i}
                          className="bg-green-500 text-white p-1"
                          size="lg"
                        >
                          {skill}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Link
                      isExternal
                      showAnchorIcon
                      href={exp.learnMoreLink}
                      className="text-blue-400"
                    >
                      Learn more on LinkedIn
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExperienceSection;
