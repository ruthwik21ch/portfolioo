import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const socials = [
  { icon: BiLogoGmail,    href: "mailto:chruthwik3@gmail.com",                           label: "Gmail"    },
  { icon: IoLogoLinkedin, href: "https://linkedin.com/in/ruthwik-chikatimalla-11530033a", label: "LinkedIn" },
  { icon: BsGithub,       href: "https://github.com/ruthwik21ch",                        label: "GitHub"   },
];

export default function Home() {
  return (
    <section
      id="home"
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="bg-[#080808] text-white min-h-screen flex items-center px-6 lg:px-16 relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        .tag { font-family: 'DM Mono', monospace; }
        .social-btn { transition: all 0.25s ease; }
        .social-btn:hover {
          border-color: rgba(255,255,255,0.5) !important;
          background: rgba(255,255,255,0.07) !important;
          transform: translateY(-2px);
        }
        .img-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
        }
        .img-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(8,8,8,0.85) 100%
          );
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

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,59,48,0.06) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-28 pb-16 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            {/* Section tag */}
            <div className="flex items-center gap-4 mb-8">
              <span className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                Hello I'm
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* Full name — stacked editorial style */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-extrabold leading-none"
                style={{
                  fontSize: "clamp(2rem,8vw,6rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                RUTHWIK
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-extrabold leading-none"
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 3rem)",
                  letterSpacing: "-0.03em",
                  WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                  color: "transparent",
                }}
              >
                CHIKATIMALLA
              </motion.h1>
            </div>

            {/* Type animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="tag text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>&gt;_</span>
              <span className="tag text-sm" style={{ color: "rgba(255,59,48,0.85)" }}>
                <TypeAnimation
                  sequence={["Python Developer", 1800, "CS Student", 1500, "Based in India", 1500]}
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "400px",
              }}
              className="mb-10"
            >
              Computer Science student passionate about building modern web
              applications. Focused on fast, responsive, and
              <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}> user-friendly</span> experiences.
            </motion.p>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex gap-3 flex-wrap"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-btn flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    textDecoration: "none",
                  }}
                >
                  <Icon size={15} />
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div style={{ position: "relative", width: "clamp(260px, 42vw, 380px)" }}>

              {/* Main image card */}
              <div className="img-card" style={{ width: "100%", aspectRatio: "3/4" }}>
                <img
                  src="/assets/img1.png"
                  alt="Ruthwik Chikatimalla"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />

                {/* Name overlay at bottom of image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    zIndex: 2,
                    padding: "20px 20px 22px",
                  }}
                >
                  <p className="tag text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                    AI Enthusiast
                  </p>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Ruthwik Chikatimalla
                  </p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 }}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "-16px",
                  background: "rgba(12,12,12,0.85)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "10px 16px",
                  backdropFilter: "blur(16px)",
                  zIndex: 3,
                }}
              >
                <p className="tag text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Based in</p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                  India
                </p>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                style={{
                  position: "absolute",
                  bottom: "80px",
                  left: "-16px",
                  background: "rgba(12,12,12,0.85)",
                  border: "1px solid rgba(255,59,48,0.2)",
                  borderRadius: "14px",
                  padding: "10px 16px",
                  backdropFilter: "blur(16px)",
                  zIndex: 3,
                }}
              >
                <p className="tag text-xs" style={{ color: "rgba(255,59,48,0.6)" }}>Status</p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                  Open to work ✦
                </p>
              </motion.div>

              {/* Decorative corner accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "80px",
                  height: "80px",
                  borderBottom: "1px solid rgba(255,59,48,0.2)",
                  borderRight: "1px solid rgba(255,59,48,0.2)",
                  borderRadius: "0 0 16px 0",
                  zIndex: 0,
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
