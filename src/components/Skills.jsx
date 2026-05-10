import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaJs, FaReact, FaNodeJs, FaPython,
  FaDatabase, FaJava, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiC, SiRuby, SiPerl } from "react-icons/si";
import { FaDocker, FaJenkins } from "react-icons/fa";

const skills = [
  { id: 1,  name: "JavaScript",  icon: FaJs,               color: "#F7DF1E", category: "Language"  },
  { id: 2,  name: "Python",      icon: FaPython,           color: "#3776AB", category: "Language"  },
  { id: 3,  name: "Java",        icon: FaJava,             color: "#ED8B00", category: "Language"  },
  { id: 4,  name: "C",           icon: SiC,                color: "#A8B9CC", category: "Language"  },
  { id: 5,  name: "Ruby",        icon: SiRuby,             color: "#CC342D", category: "Language"  },
  { id: 6,  name: "Perl",        icon: SiPerl,             color: "#39457E", category: "Language"  },
  { id: 7,  name: "React",       icon: FaReact,            color: "#61DAFB", category: "Frontend"  },
  { id: 8,  name: "Next.js",     icon: RiNextjsFill,       color: "#ffffff", category: "Frontend"  },
  { id: 9,  name: "HTML",        icon: FaHtml5,            color: "#E34F26", category: "Frontend"  },
  { id: 10, name: "CSS",         icon: FaCss3Alt,          color: "#1572B6", category: "Frontend"  },
  { id: 11, name: "Tailwind",    icon: RiTailwindCssFill,  color: "#06B6D4", category: "Frontend"  },
  { id: 12, name: "Node.js",     icon: FaNodeJs,           color: "#339933", category: "Backend"   },
  { id: 13, name: "MongoDB",     icon: FaDatabase,         color: "#47A248", category: "Backend"   },
  { id: 14, name: "SQL",         icon: FaDatabase,         color: "#4479A1", category: "Backend"   },
  { id: 15, name: "Git",         icon: FaGitAlt,           color: "#F05032", category: "Tools"     },
  { id: 16, name: "GitHub",      icon: FaGithub,           color: "#ffffff", category: "Tools"     },
  { id: 17, name: "Docker",   icon: FaDocker,  color: "#2496ED", category: "Tools" },
  { id: 18, name: "Jenkins",  icon: FaJenkins, color: "#D24939", category: "Tools" },
];

const categories = ["All", "Language", "Frontend", "Backend", "Tools"];

const stats = [
  { value: "3+",       label: "Projects Completed" },
  { value: "Fresher",  label: "Experience Level"   },
  { value: "Python",   label: "Core Specialty"     },
];

export default function Skills() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filtered = activeFilter === "All"
    ? skills
    : skills.filter(s => s.category === activeFilter);

  return (
    <section
      ref={ref}
      id="skills"
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="bg-[#080808] text-white py-28 px-6 lg:px-16 relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        .tag  { font-family: 'DM Mono', monospace; }
        .body { font-family: 'DM Sans', sans-serif; }

        .skill-card {
          position: relative; cursor: default;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 28px 16px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 14px;
          background: rgba(255,255,255,0.03);
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          overflow: hidden;
        }
        .skill-card:hover {
          border-color: var(--skill-color, rgba(255,255,255,0.3));
          background: rgba(255,255,255,0.06);
          transform: translateY(-4px);
        }
        .skill-card .glow {
          position: absolute; inset: 0; border-radius: 16px;
          opacity: 0; transition: opacity 0.4s;
          pointer-events: none;
        }
        .skill-card:hover .glow { opacity: 1; }

        .filter-btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 18px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent; color: rgba(255,255,255,0.4);
          cursor: pointer; transition: all 0.25s ease;
        }
        .filter-btn:hover { border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.8); }
        .filter-btn.active {
          background: #fff; color: #080808;
          border-color: #fff; font-weight: 600;
        }

        .stat-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 32px 24px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s, background 0.3s;
        }
        .stat-card:hover {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.05);
        }

        .edu-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 28px 32px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.35s;
        }
        .edu-card:hover { border-color: rgba(255,59,48,0.4); }

        .section-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 80px 0;
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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── SKILLS HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
              Tech Stack
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="tag text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              {skills.length} Skills
            </span>
          </div>

          <h2
            className="text-[clamp(2.8rem,9vw,6.5rem)] font-extrabold leading-none"
            style={{ letterSpacing: "-0.04em" }}
          >
            MY
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              SKILLS
            </span>
          </h2>
        </motion.div>

        {/* ── FILTER TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── SKILLS GRID ── */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        >
          {filtered.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="skill-card"
                style={{ "--skill-color": skill.color }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Glow layer */}
                <div
                  className="glow"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}18 0%, transparent 70%)`,
                  }}
                />

                <Icon
                  size={36}
                  style={{
                    color: hoveredSkill === skill.id ? skill.color : "rgba(255,255,255,0.55)",
                    transition: "color 0.3s ease",
                  }}
                />
                <p
                  className="tag text-xs text-center"
                  style={{
                    color: hoveredSkill === skill.id ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── DIVIDER ── */}
        <div className="section-divider" />

        {/* ── EDUCATION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
              Background
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <h2
            className="text-[clamp(2.8rem,9vw,6.5rem)] font-extrabold leading-none"
            style={{ letterSpacing: "-0.04em" }}
          >
            MY
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              EDUCATION
            </span>
          </h2>
        </motion.div>

        {/* ── EDU CARD + STATS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6"
        >
          {/* College card */}
          <div className="edu-card">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="tag text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
                  2021 — Present
                </p>
                <h3
                  className="text-xl lg:text-2xl font-bold"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  B.Tech — Computer Science
                </h3>
                <p
                  className="body mt-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Sree Chaitanya College of Engineering
                </p>
              </div>
              {/* Degree badge */}
              <span
                className="tag text-xs px-3 py-1 rounded-full flex-shrink-0"
                style={{
                  border: "1px solid rgba(255,59,48,0.4)",
                  color: "rgba(255,100,80,0.9)",
                  background: "rgba(255,59,48,0.07)",
                }}
              >
                CSE
              </span>
            </div>

            <p
              className="body text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Focused on software engineering, algorithms, data structures,
              and modern full-stack development. Building real-world projects
              alongside coursework to sharpen practical skills.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="stat-card flex items-center justify-between"
              >
                <p
                  className="body text-sm"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="font-extrabold text-xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
