import React from "react";

export default function LandingPage() {
  return (
    <>
      <div className="main">
        <div className=" bg-white text-gray-700">
          <main className="min-h-screen container mx-auto mt-10 flex justify-between items-center ">
            <div>
              <h1 className="text-8xl font-bold p-2 italic">Basil Yusuf</h1>

              {/* <p className="text-gray-700 text-2xl">
            Software Engineer | DevOps Specialist | Continuous Deployment
            Architect
          </p> */}
              {/* <Typewriter
                messages={["Software Engineer", "DevOps Specialist", "Continuous Deployment Architect"]}
                typingSpeed={100}
                
            /> */}
              {/* <div className="p-4 flex gap-4 items-center">
            
          </div> */}
            </div>
            <div>
              <img
                src="./images/feelingProud.svg"
                alt="Basil Profile"
                className="w-126 p-6 h-auto "
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
