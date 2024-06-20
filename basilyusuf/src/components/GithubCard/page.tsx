"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Link,
  Button,
} from "@nextui-org/react";

export default function GitHubCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px] bg-gray-700 rounded-lg text-white">
      <CardHeader className="justify-between">
        <div className="flex gap-1">
          <Avatar
            isBordered
            src="images/basilgithub.png"
            alt="Basil Yusuf"
            className="rounded-ful w-16 h-16 "
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none">
              Basil Yusuf
            </h4>
            <h5 className="text-small tracking-tight">@basilysf1709</h5>
          </div>
        </div>

        <Button
          href="https://github.com/basilysf1709"
          as={Link}
          size="md"
          className="bg-blue-800 text-white rounded-lg"
          variant="solid"
        >
          Follow
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Full-stack developer and open-source enthusiast. Check out my projects
          and follow my journey!
        </p>
        <span className="pt-2">
          #OpenSource #FullStack
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      {/* <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">30</p>
          <p className="text-default-400 text-small">Repositories</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">100</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter> */}
    </Card>
  );
}
