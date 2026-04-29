import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 py-12 bg-white text-black flex flex-col lg:flex-row items-center gap-10" id="about">

      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="h-[360px] rounded-xl shadow-lg"
          src="/assets/Me.jpg"
          alt="Me"
        />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">
          About <span className="text-red-600">Me</span>
        </h2>

        <p className="text-gray-500 mt-6">
          I am a Computer Science student from India with strong interest in
          Python Development and Devops Engineering. I enjoy building real-world applications and
          solving problems through code.
        </p>

        <p className="text-gray-500 mt-4">
          My core skills include Python, Node.js, and databases. I aim to become
          a skilled software engineer by continuously learning and working on projects.
        </p>

        <div className="mt-6 flex gap-4">
          <span className="border px-3 py-1 rounded">Fullstack</span>
          <span className="border px-3 py-1 rounded">Python</span>
          <span className="border px-3 py-1 rounded">AI</span>
          <span className="border px-3 py-1 rounded">DSA</span>
        </div>
      </motion.div>
    </div>
  );
}