import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { TbSend, TbCheck, TbX, TbLoader2 } from "react-icons/tb";


// ─── EmailJS config ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    Template variables used: {{from_name}}, {{from_email}}, {{website}}, {{message}}
// 4. Go to Account → API Keys → copy your Public Key
// Replace the placeholders below with your actual values:
const EMAILJS_SERVICE_ID  = "service_gjjx7as";
const EMAILJS_TEMPLATE_ID = "template_khpwrjk";
const EMAILJS_PUBLIC_KEY  = "bqZAsjOG2vZw2c3Xc";
// ─────────────────────────────────────────────────────────────────

const socials = [
  { icon: IoMdMail,      href: "mailto:chruthwik3@gmail.com", label: "Email"    },
  { icon: IoLogoLinkedin,href: "https://www.linkedin.com/in/ruthwik-chikatimalla-11530033a/",                           label: "LinkedIn" },
  { icon: BsGithub,      href: "https://github.com/ruthwik21ch",                           label: "GitHub"   },
];

export default function Contact() {
  const ref    = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const [status, setStatus]   = useState("idle"); // idle | sending | success | error
  const [form,   setForm]     = useState({ name: "", email: "", website: "", message: "" });
  const [errors, setErrors]   = useState({});

  // ── Validation ──
  const validate = () => {
    const e = {};
    if (!form.name.trim())                          e.name    = "Name is required";
    if (!form.email.trim())                         e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))     e.email   = "Invalid email";
    if (!form.message.trim())                       e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  // ── Submit ──
  const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length) { setErrors(errs); return; }

  setStatus("sending");
  try {
    await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id:  EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id:     EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name:  form.name,
          from_email: form.email,
          website:    form.website || "—",
          message:    form.message,
        },
      }),
    });
    setStatus("success");
    setForm({ name: "", email: "", website: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  } catch {
    setStatus("error");
    setTimeout(() => setStatus("idle"), 4000);
  }
};

  // ── Field styles ──
  const fieldBase = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "14px 18px",
    color: "#fff",
    fontSize: "0.9rem",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.25s, background 0.25s",
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="bg-[#080808] text-white py-28 px-6 lg:px-16 relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:ital,wght@0,400;0,500&display=swap');
        .tag { font-family: 'DM Mono', monospace; }
        .contact-input:focus { border-color: rgba(255,255,255,0.35) !important; background: rgba(255,255,255,0.07) !important; }
        .contact-input::placeholder { color: rgba(255,255,255,0.25); }
        .contact-input.err { border-color: rgba(255,80,80,0.6) !important; }
        .social-btn { transition: all 0.25s ease; }
        .social-btn:hover { border-color: rgba(255,255,255,0.5) !important; background: rgba(255,255,255,0.07) !important; transform: translateY(-2px); }
        .send-btn { position: relative; overflow: hidden; }
        .send-btn::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,0.1);
          transform: translateX(-100%); transition: transform 0.4s ease;
        }
        .send-btn:hover::before { transform: translateX(0); }
        .info-row { transition: transform 0.3s ease, color 0.3s ease; }
        .info-row:hover { transform: translateX(8px); }
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

      {/* Faint radial glow */}
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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
              Get In Touch
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <h2
            className="text-[clamp(2.8rem,9vw,6.5rem)] font-extrabold leading-none"
            style={{ letterSpacing: "-0.04em" }}
          >
            LET'S
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              Connect
            </span>
          </h2>
        </motion.div>

        {/* ── Two columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">

              {/* Name */}
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`contact-input ${errors.name ? "err" : ""}`}
                  style={fieldBase}
                />
                {errors.name && (
                  <p className="tag text-xs mt-1" style={{ color: "rgba(255,100,100,0.9)" }}>{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={`contact-input ${errors.email ? "err" : ""}`}
                  style={fieldBase}
                />
                {errors.email && (
                  <p className="tag text-xs mt-1" style={{ color: "rgba(255,100,100,0.9)" }}>{errors.email}</p>
                )}
              </div>

              {/* Website (optional) */}
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="Your website (optional)"
                className="contact-input"
                style={fieldBase}
              />

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`contact-input ${errors.message ? "err" : ""}`}
                  style={{ ...fieldBase, resize: "none" }}
                />
                {errors.message && (
                  <p className="tag text-xs mt-1" style={{ color: "rgba(255,100,100,0.9)" }}>{errors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileTap={{ scale: 0.97 }}
                className="send-btn w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-sm tracking-wide"
                style={{
                  background: status === "success" ? "#00C896"
                            : status === "error"   ? "#FF3B30"
                            : "#fff",
                  color: status === "success" || status === "error" ? "#fff" : "#080808",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "'Syne', sans-serif",
                  transition: "background 0.4s ease",
                }}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2">
                      Send Message <TbSend size={17} />
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2">
                      <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        style={{ display: "inline-flex" }}>
                        <TbLoader2 size={17} />
                      </motion.span>
                      Sending…
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2">
                      <TbCheck size={17} /> Message Sent!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2">
                      <TbX size={17} /> Failed — Try Again
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

            </form>
          </motion.div>

          {/* ── RIGHT: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-12"
          >
            {/* Tagline */}
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                I love building modern applications and pushing creativity to the next level.
                Let's collaborate and create something
                <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}> amazing</span> together.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              <p className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                Direct contact
              </p>

              <a href="mailto:chruthwik3@gmail.com" className="info-row flex items-center gap-4"
                style={{ textDecoration: "none", color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif" }}>
                <span
                  style={{
                    width: "42px", height: "42px", borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <IoMdMail size={17} />
                </span>
                chruthwik3@gmail.com
              </a>

              <a href="tel:8125639000" className="info-row flex items-center gap-4"
                style={{ textDecoration: "none", color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif" }}>
                <span
                  style={{
                    width: "42px", height: "42px", borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaPhone size={15} />
                </span>
                8125639054
              </a>
            </div>

            {/* Socials */}
            <div className="space-y-5">
              <p className="tag text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="social-btn flex items-center gap-2 px-4 py-2 rounded-full text-sm"
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
              </div>
            </div>

            {/* Decorative divider */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "2rem",
              }}
            >
              <p className="tag text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
                Response time: usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
