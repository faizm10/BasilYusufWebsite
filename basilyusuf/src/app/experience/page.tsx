import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
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
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Python",
      "API",
      "R Programming",
      "JavaScript",
      "TypeScript",
    ],
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
        <section
          className="py-12 px-4 md:px-12 lg:px-24"
          style={{ backgroundColor: "#fdddb7" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 p-4">
              Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <Card
                  key={exp.id}
                  className="max-w-[1000px] shadow-xl p-5 bg-blue-400"
                >
                  <CardHeader className="flex gap-3">
                    <Image
                      alt={`${exp.company} logo`}
                      height={80}
                      radius="md"
                      src={exp.logo}
                      width={80}
                    />
                    <div className="flex flex-col">
                      <p className="text-md font-semibold">{exp.role}</p>
                      <p className="text-small text-default-500">
                        {exp.company}
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p className="text-small text-white">
                      {exp.duration}
                    </p>
                  </CardBody>
                  <Divider />
                  <CardBody>
                    <p className="font-semibold">Responsibilities:</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </CardBody>
                  <Divider />
                  <CardBody>
                    <p className="font-semibold">Skills Achieved:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                      {exp.skills.map((skill) => (
                        <Card
                          key={skill}
                          className="shadow-sm p-3 text-center bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </Card>
                      ))}
                    </div>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Link isExternal showAnchorIcon href={exp.learnMoreLink}>
                      Learn more on LinkedIn
                    </Link>
                  </CardFooter>
                </Card>
              ))}
              <Divider className="my-4" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExperienceSection;
