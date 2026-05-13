import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbArrowUpRight, TbX, TbZoomIn } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "NewsFeed Application",
    description:
      "Desktop-based real-time news application using Python, Tkinter, SQLite, NewsAPI, and voice-assisted text-to-speech functionality.",
    image: "/assets/game.png",
    github: "https://github.com/ruthwik21ch/Newssfeed",
    demo: "https://newssfeed.vercel.app/",
    tech: ["Python", "Tkinter", "SQLite", "NewsAPI"],
    category: "Desktop App",
    year: "2024",
    accent: "#0066FF",
  },
  {
    id: "02",
    title: "SteganoPro Application",
    description:
      "Steganography application for hiding and extracting secret messages from images using Python and Pillow.",
    image: "/assets/port.png",
    github: "https://github.com/ruthwik21ch/SteganoPro",
    demo: "https://steganoproh.vercel.app/",
    tech: ["Python", "Tkinter", "Pillow"],
    category: "Security",
    year: "2024",
    accent: "#00C896",
  },
  {
  id: "03",
  title: "Weather Web Application",
  description:
    "Real-time weather application built using Python, Flask, HTML, CSS, and JavaScript. Integrated external weather APIs to fetch live weather data including temperature, humidity, and weather conditions with a responsive and user-friendly interface.",
  image: "/assets/port1.png",
  github: "https://github.com/ruthwik21ch",
  demo: "https://weathera2z.vercel.app/",
  tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Weather API"],
  category: "Web App",
  year: "2024",
  accent: "#00C2FF",
  },
  {
    id: "04",
    title: "Medical Ecommerce Website",
    description:
      "AI-powered medical ecommerce platform with chatbot, prescription scanner, secure authentication, cart management, and admin dashboard.",
    image: "/assets/cel.jpg",
    github: "https://github.com/ruthwik21ch/genmed",
    demo: "https://medigen-gamma.vercel.app/",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Full-Stack",
    year: "2024",
    accent: "#FF3B30",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [lightbox, setLightbox] = useState(null); // holds the project object when open

  // Close on Escape key
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="projects"
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="bg-[#080808] text-white min-h-screen py-28 px-6 lg:px-16 relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        .project-row { border-top: 1px solid rgba(255,255,255,0.08); }
        .project-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .tag { font-family: 'DM Mono', monospace; }
        .marquee-track {
          display: flex; gap: 2rem;
          animation: marquee 18s linear infinite; white-space: nowrap;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .project-thumb {
          transition: transform 0.6s cubic-bezier(0.77,0,0.175,1), filter 0.5s ease;
        }
        .project-row:hover .project-thumb {
          transform: scale(1.06);
          filter: grayscale(0%) brightness(1) !important;
        }
        .thumb-wrap {
          position: relative; cursor: zoom-in;
          overflow: hidden; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .zoom-hint {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.45);
          opacity: 0; transition: opacity 0.25s ease;
          border-radius: 16px;
        }
        .thumb-wrap:hover .zoom-hint { opacity: 1; }
        .num-slide { transition: transform 0.4s cubic-bezier(0.77,0,0.175,1); }
        .project-row:hover .num-slide { transform: translateX(10px); }
        .link-btn { position: relative; overflow: hidden; }
        .link-btn::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 100%; height: 1px; background: currentColor;
          transform: scaleX(0); transform-origin: right; transition: transform 0.3s ease;
        }
        .link-btn:hover::after { transform: scaleX(1); transform-origin: left; }
        .lightbox-img {
          max-width: 90vw; max-height: 82vh;
          width: auto; height: auto;
          border-radius: 18px;
          box-shadow: 0 40px 120px rgba(0,0,0,0.9);
          display: block;
        }
      `}</style>

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(0,0,0,0.88)",
              backdropFilter: "blur(12px)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "20px", padding: "24px",
              cursor: "zoom-out",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: "20px", right: "20px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "50%", width: "44px", height: "44px",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", cursor: "pointer",
              }}
            >
              <TbX size={20} />
            </button>

            {/* Expanded image */}
            <motion.img
              key={lightbox.image}
              src={lightbox.image}
              alt={lightbox.title}
              className="lightbox-img"
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: "default" }}
            />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ textAlign: "center", cursor: "default" }}
            >
              <p
                className="tag text-xs tracking-widest uppercase mb-1"
                style={{ color: lightbox.accent }}
              >
                {lightbox.category}
              </p>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.1rem", fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "-0.01em",
                }}
              >
                {lightbox.title}
              </h3>
              <p
                className="tag text-xs mt-1"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Press Esc or click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-24 relative z-10"
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
            Selected Work
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="tag text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            {projects.length} Projects
          </span>
        </div>
        <h2
          className="text-[clamp(3rem,10vw,7rem)] font-extrabold leading-none tracking-tight"
          style={{ letterSpacing: "-0.04em" }}
        >
          FEATURED
          <br />
          <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
            PROJECTS
          </span>
        </h2>
      </motion.div>

      {/* Project List */}
      <div className="relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-row"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 lg:gap-10 items-start cursor-default">

              {/* Left: Number + Category */}
              <div className="flex lg:flex-col gap-4 lg:gap-3 items-center lg:items-start">
                <span
                  className="num-slide tag text-5xl lg:text-7xl font-bold leading-none"
                  style={{ color: "rgba(255,255,255,0.07)" }}
                >
                  {project.id}
                </span>
                <span
                  className="tag text-xs tracking-widest uppercase px-3 py-1 rounded-full border mt-1"
                  style={{
                    borderColor: hovered === index ? project.accent : "rgba(255,255,255,0.1)",
                    color: hovered === index ? project.accent : "rgba(255,255,255,0.35)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Center: Content */}
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="text-2xl lg:text-3xl font-bold leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {project.title}
                  </h3>

                  {/* Clickable thumbnail */}
                  <div
                    className="thumb-wrap hidden lg:block flex-shrink-0"
                    style={{ width: "210px", height: "140px" }}
                    onClick={() => setLightbox(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-thumb w-full h-full object-cover"
                      style={{
                        filter: hovered === index
                          ? "grayscale(0%) brightness(1)"
                          : "grayscale(80%) brightness(0.5)",
                        transition: "filter 0.5s ease",
                      }}
                    />
                    {/* Zoom icon overlay */}
                    <div className="zoom-hint">
                      <TbZoomIn size={32} color="#fff" />
                    </div>
                  </div>
                </div>

                <p
                  className="text-base leading-relaxed max-w-xl"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="tag text-xs px-3 py-1 rounded"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Links + Year */}
              <div className="flex lg:flex-col items-center lg:items-end justify-start lg:justify-between h-full gap-4 lg:gap-0">
                <span
                  className="tag text-xs hidden lg:block"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {project.year}
                </span>

                <div className="flex lg:flex-col gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium link-btn"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <FaGithub size={14} />
                    Github
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                    style={{ background: project.accent, color: "#fff" }}
                  >
                    Live Demo
                    <TbArrowUpRight size={15} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Accent line on hover */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hovered === index ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
              style={{
                height: "1px", background: project.accent,
                transformOrigin: "left", marginTop: "-1px",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Marquee Footer */}
      <div
        className="mt-24 overflow-hidden py-6 border-t border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="marquee-track">
          {[...Array(2)].flatMap(() =>
            ["React", "TypeScript", "Python", "Node.js", "MongoDB", "SQLite", "Tkinter", "Pillow", "AI", "Full-Stack"].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="tag text-xs tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                {t} &nbsp;—&nbsp;
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
