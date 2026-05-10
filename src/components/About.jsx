import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tags = ["Fullstack", "Python", "AI", "DSA", "DevOps"];

export default function About() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="bg-[#080808] text-white py-28 px-6 lg:px-16 relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        .tag  { font-family: 'DM Mono', monospace; }
        .body { font-family: 'DM Sans', sans-serif; }

        .about-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 18px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          transition: border-color 0.25s, color 0.25s, background 0.25s;
          cursor: default;
        }
        .about-tag:hover {
          border-color: rgba(255,255,255,0.35);
          color: rgba(255,255,255,0.95);
          background: rgba(255,255,255,0.05);
        }

        .fact-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 20px 18px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s, background 0.3s;
          text-align: center;
        }
        .fact-card:hover {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
        }

        .img-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .img-frame::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 55%);
          pointer-events: none;
          border-radius: 24px;
        }
        .img-frame img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.7s cubic-bezier(0.77,0,0.175,1);
        }
        .img-frame:hover img { transform: scale(1.04); }

        .accent-line {
          width: 48px; height: 3px;
          background: #FF3B30; border-radius: 2px;
          margin-bottom: 1.5rem;
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

      {/* Subtle red glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,59,48,0.05) 0%, transparent 70%)",
          top: "30%", left: "-10%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header label ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
            Who I Am
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>

        {/* ── Two columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="img-frame" style={{ height: "clamp(320px, 45vw, 520px)" }}>
              <img src="/assets/Me.jpg" alt="Profile photo" />
            </div>

            {/* Fact strip below image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="fact-card"
                >
                  <p className="font-extrabold text-lg" style={{ letterSpacing: "-0.03em" }}>
                    {f.value}
                  </p>
                  <p className="tag text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {f.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Big heading */}
            <h2
              className="text-[clamp(2.6rem,8vw,5.5rem)] font-extrabold leading-none mb-8"
              style={{ letterSpacing: "-0.04em" }}
            >
              ABOUT
              <br />
              <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
                ME
              </span>
            </h2>

            <div className="accent-line" />

            <p
              className="body text-base leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              I'm a Computer Science student from India with a strong interest in
              <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}> Python development </span>
              and
              <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}> DevOps engineering</span>.
              I enjoy building real-world applications and solving problems through code.
            </p>

            <p
              className="body text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              My core skills include Python, Node.js, and databases. I aim to become
              a skilled software engineer by continuously learning and shipping
              meaningful projects.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                  className="about-tag"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "14px 32px", borderRadius: "999px",
                background: "#fff", color: "#080808",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textDecoration: "none",
                textTransform: "uppercase",
                transition: "background 0.25s",
              }}
            >
              Let's Work Together
              <span style={{ fontSize: "1.1rem" }}>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
