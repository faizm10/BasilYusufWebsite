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
  // add project details here
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
      description: "audio pitch shifter in c++",
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
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-white">
      <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <Card key={index} className="border border-black">
            <CardHeader className="font-bold text-2xl p-2">
              <span className="box-decoration-slice text-center bg-blue-200">
                {project.title}
              </span>
            </CardHeader>
            <Divider />
            <CardBody>
              {project.description && (
                <div>
                  <div className="font-bold text-xl mb-2">About</div>
                  <p>{project.description}</p>
                </div>
              )}
              {project.concepts.length > 0 && (
                <div className="mt-4">
                  <div className="font-bold text-xl mb-2">Concepts</div>
                  <div className="flex flex-wrap gap-2">
                    {project.concepts.map((concept, i) => (
                      <Chip
                        key={i}
                        className="p-2 bg-orange-500 text-white"
                        variant="dot"
                      >
                        {concept}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}
              {project.languages.length > 0 && (
                <div className="mt-4">
                  <div className="font-bold text-xl mb-2">Languages</div>
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((languages, i) => (
                      <Chip
                        key={i}
                        className="p-2 bg-pink-500 text-white"
                        variant="dot"
                      >
                        {languages}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}
            </CardBody>
            <CardFooter className="text-center">
              <Link
                href={project.link}
                target="_blank"
                className=" hover:text-blue-500"
              >
                View Project on GitHub
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer />
      <div className="p-2 text-2xl text-center  hover:text-blue-500">
        <Button
          radius="full"
          size="lg"
          className="p-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
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
