import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20 bg-white text-black min-h-screen" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* LEFT */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-3 lg:gap-6">

            <h2>
              Hello,{" "}
              <span className="text-red-500 font-extrabold">
                <TypeAnimation
                  sequence={["I am Ruthwik", 1500]}
                  speed={20}
                  repeat={Infinity}
                />
              </span>
            </h2>

            <h2>
              <span className="font-extrabold text-red-500">Python</span>{" "}
              Developer
            </h2>

            <h2>
              Based in{" "}
              <span className="font-extrabold text-red-500">India</span>
            </h2>

          </div>

          <p className="text-gray-500 text-sm lg:text-base mt-6 leading-relaxed">
            I am a Computer Science student passionate about building modern web
            applications. I focus on creating fast, responsive, and user-friendly
            digital experiences using the latest technologies.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-x-5 mt-10 lg:mt-14">
            <a href="chruthwik3@gmail.com" className="border p-3 rounded-full hover:text-red-500">
              <BiLogoGmail />
            </a>

            <a href="https://linkedin.com/in/ruthwik-chikatimalla-11530033a" target="_blank" className="border p-3 rounded-full hover:text-red-500">
              <IoLogoLinkedin />
            </a>

            <a href="https://github.com/ruthwik21ch" target="_blank" className="border p-3 rounded-full hover:text-red-500">
              <BsGithub />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="h-[350px] lg:h-[450px] w-auto mx-auto"
            src="/assets/img1.png"
            alt="Hero"
          />
        </motion.div>

      </div>
    </div>
  );
}