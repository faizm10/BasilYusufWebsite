import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Chip,
  Button,
  Spacer,
} from "@nextui-org/react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DockerMake",
      description: "Add a Makefile for your docker",
      concepts: ["Docker", "Docker Compose", "Makefile"],
      link: "https://github.com/basilysf1709/dockermake",
      languages: ["JavaScript"],
    },
    {
      title: "TCP Server Design Patterns",
      description: "Design Patterns in C++ OOP, networking",
      concepts: ["TCP", "CPP", "Design Patterns"],
      link: "https://github.com/basilysf1709/tcp-server-design-patterns",
      languages: ["C++", "Makefile"],
    },
    {
      title: "Simulator",
      description: "OS Simulator in C++",
      concepts: ["OS", "CPP"],
      link: "https://github.com/basilysf1709/simulator",
      languages: ["C++", "Makefile"],
    },
    {
      title: "Pitch Shifter",
      description: "Audio pitch shifter in C++",
      concepts: ["Audio", "CPP", "CODEC"],
      link: "https://github.com/basilysf1709/pitch-shifterr",
      languages: ["C++"],
    },
    {
      title: "Teachify",
      description:
        "Fully administered AI tool to help professors and students in their daily tasks",
      concepts: ["AI", "NextJS", "PostgreSQL", "Supabase", "LLM"],
      link: "https://github.com/UsmanBasilAgency/teachify",
      languages: ["TypeScript"],
    },
    {
      title: "Data Structures and Algorithms",
      description: "Data Structures, Algorithms and MySQL concepts",
      concepts: ["LeetCode", "DSA Algorithm"],
      link: "https://github.com/basilysf1709/data-structures-and-algorithms",
      languages: ["Python", "Java"],
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-gray-100">
      <h2 className="text-5xl font-bold mb-8 text-center text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="font-bold text-2xl p-4 bg-blue-200">
              {project.title}
            </CardHeader>
            <Divider />
            <CardBody className="p-4">
              {project.description && (
                <div className="mb-4">
                  <div className="font-bold text-xl mb-2">About</div>
                  <p>{project.description}</p>
                </div>
              )}
              {project.concepts.length > 0 && (
                <div className="mb-4">
                  <div className="font-bold text-xl mb-2">Concepts</div>
                  <div className="flex flex-wrap gap-2">
                    {project.concepts.map((concept, i) => (
                      <Chip key={i} className="bg-orange-500 text-white p-2">
                        {concept}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}
              {project.languages.length > 0 && (
                <div>
                  <div className="font-bold text-xl mb-2">Languages</div>
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((language, i) => (
                      <Chip key={i} className="bg-pink-500 text-white p-2">
                        {language}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}
            </CardBody>
            <Divider />
            <CardFooter className="p-4 text-center">
              <Link href={project.link} target="_blank" className="text-blue-500 hover:underline">
                View Project on GitHub
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={2} />
      <div className="text-center">
        <Button
          radius="full"
          size="lg"
          className="p-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          href="https://github.com/basilysf1709?tab=repositories"
          as={Link}
        >
          View More
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
