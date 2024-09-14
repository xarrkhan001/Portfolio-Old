import React from "react";
import heroimage from "../../assets/AbuPNG.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto py-8 bg-black rounded-lg border-2 border-gray-600">
      <div className="absolute inset-0 rounded-lg border-2 border-gray-600 pointer-events-none"></div>{" "}
      {/* Border overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
        <div className="flex justify-center items-center col-span-1">
          <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] relative mt-[-30px]">
            <img
              src={heroimage}
              alt="Abuzar"
              className="w-full h-full object-cover rounded-full border-2 border-gray-300"
            />
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-center px-5">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-primary">I’m a</span> <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-white sm:text-lg my-6 lg:text-xl">
            I’m Abuzar, a Front-End Web Developer with 2 years of experience in
            creating responsive and user-friendly websites.
          </p>

          <div className="flex gap-4 my-8">
            <a
              href="/"
              className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-br from-[#00d8ff] to-[#1bb2cd] text-white text-center transition duration-300"
            >
              Download CV
            </a>
            <a
              href="/"
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-[#00d8ff] to-[#1bb2cd] text-white text-center hover:border-none transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
