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
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-5xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experienceData.map((exp, index) => (
          <Card
            key={exp.id}
            className="border border-gray-300 dark:border-gray-700 dark:bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="flex gap-3 font-bold text-2xl p-4 bg-blue-200 dark:bg-blue-200 text-gray-800 dark:text-gray-100">
              <Image
                alt={`${exp.company} logo`}
                height={50}
                width={50}
                src={exp.logo}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className=" dark:text-black">{exp.role}</span>
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  {exp.company}
                </span>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="p-4">
              <p className="text-gray-600 dark:text-gray-600">{exp.duration}</p>
              <div className="mt-4">
                <div className="font-bold text-xl mb-2 dark:text-black">
                  Responsibilities:
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-600">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <div className="font-bold text-xl mb-2 dark:text-black">
                  Skills Achieved:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Chip key={i} className="bg-green-500 text-white p-2">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="p-4 text-center">
              <Link
                isExternal
                href={exp.learnMoreLink}
                className="text-blue-500 hover:underline"
              >
                Learn more on LinkedIn
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
