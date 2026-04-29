import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Medical Ecommerce Website",
    description: "Developed a full-stack web application that enables users to browse medicines, manage prescriptions, and place orders through an intuitive interface. Implemented secure authentication, cart management, and order tracking using React Context API for state management. Integrated AI-powered features including a chatbot and prescription scanner to assist users in identifying medicines and obtaining information. Built an admin dashboard for managing medicines and monitoring platform activity. The frontend was developed using React and TypeScript with Vite for optimized performance, while the backend server handles database operations and API services..",
    image: "/assets/cel.jpg",
    link: "https://github.com/ruthwik21ch/Medigen"
  },
  {
    id: 2,
    title: "NewsFeed Application",
    description: "A News Application that retrieves news from newsapi and delivers real time news.Developed a desktop-based news reader application using Python and Tkinter that fetches real-time news headlines through the NewsAPI. Implemented a user authentication system with SQLite database support for secure login and registration. The application displays news articles with images, titles, and descriptions, and includes navigation features to browse multiple articles. Integrated text-to-speech functionality using pyttsx3 to enable voice-assisted news reading. Users can also open full articles in a web browser for detailed reading.",
    image: "/assets/game.png",
    link: "https://github.com/ruthwik21ch/NewsFeed"
  },
  {
    id: 3,
    title: "SteganoPro Application",
    description: "Steganography based application that encode and decode the data inside a image.Developed a desktop-based steganography application using Python and Tkinter that enables users to securely hide and extract secret messages within image files. Implemented image processing techniques with the Pillow library to encode and decode data without visibly altering the image. The application provides a simple and user-friendly interface for both encryption and decryption operations. Added optional password protection to enhance data security. Designed the system to support common image formats and ensure efficient and reliable data concealment",
    image: "/assets/port.png",
    link: "https://github.com/ruthwik21ch/SteganoPro"
  }
];

export default function Projects() {
  return (
    <div className="bg-white px-5 lg:px-28 py-16 text-black" id="projects">

      {/* TITLE */}
      <h2 className="text-3xl lg:text-5xl text-center mb-12 font-bold">
        My{" "}
        <span className="text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">
          Projects
        </span>
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-10`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >

            {/* IMAGE */}
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden border border-gray-300">
              <img
                className="w-full h-full object-cover transition duration-500 hover:scale-110 hover:brightness-90"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* TEXT */}
            <div className="lg:w-1/2 space-y-4">

              {/* NUMBER */}
              <h2 className="text-5xl font-extrabold text-red-600">
                {String(project.id).padStart(2, "0")}
              </h2>

              {/* TITLE */}
              <p className="font-bold text-black text-2xl lg:text-3xl">
                {project.title}
              </p>

              {/* DESC */}
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                {project.description}
              </p>

              {/* LINK */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-black transition"
              >
                View Project
                <TbExternalLink size={20} />
              </a>

            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}