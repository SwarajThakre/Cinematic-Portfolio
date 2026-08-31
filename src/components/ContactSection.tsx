import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSend = () => {
    if (!form.name || !form.message) return;

    const text = `Hello Swaraj, my name is ${form.name}%0A%0A${form.message}`;
    const phone = "919049443446";

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section
      className="relative w-full min-h-screen bg-black overflow-hidden
            px-4 sm:px-8 md:px-16 lg:px-24 py-24 text-white"
    >
      {/* premium grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/10 blur-[140px] opacity-20" />
        <div className="absolute bottom-[-220px] right-[-120px] w-[350px] h-[350px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute top-[30%] left-[-120px] w-[300px] h-[300px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center space-y-5 mb-16">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 bg-white/10 blur-[120px] rounded-full opacity-40 animate-pulse" />

          {/* label */}
          <div className="relative flex items-center justify-center gap-4 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">
            <div className="relative overflow-hidden">
              <div className="w-10 h-px bg-white/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
              Get In Touch
            </span>
            <div className="relative overflow-hidden">
              <div className="w-10 h-px bg-white/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
            </div>
          </div>

          {/* title */}
          <div className="relative overflow-hidden">
            <h1
              className="font-black tracking-tight leading-none
                            drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
                            text-white opacity-0
                            animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
              style={{
                fontSize: "clamp(42px,7vw,92px)",
              }}
            >
              <span
                className="inline-block bg-gradient-to-b
                                from-white via-white to-white/45
                                bg-clip-text text-transparent"
              >
                Let's Build Together
              </span>
            </h1>
          </div>
        </div>

        {/* layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left side */}
          <div
            className="flex flex-col items-center lg:items-start
                        text-center lg:text-left
                        justify-center gap-8 opacity-0
                        animate-[fadeSlideUp_0.8s_ease_0.35s_forwards]"
          >
            {/* heading / text */}
            <div className="space-y-4">
              <p
                className="relative text-sm sm:text-base lg:text-lg
                                leading-relaxed max-w-md
                                font-[Poppins] font-medium
                                tracking-wide
                                text-transparent bg-clip-text
                                bg-[length:200%_auto]
                                bg-gradient-to-r
                                from-white via-white/60 to-white
                                animate-[shine_4s_linear_infinite]"
              >
                Have a project, opportunity, or idea in mind? Send a message and I'll get back to
                you within 24–48 hours.
              </p>
            </div>

            {/* Direct Contact Badges */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <a
                href="mailto:swarajthakre.stud@gmail.com"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300 group"
              >
                <FaEnvelope className="text-red-400 text-lg group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Email Me
                </span>
              </a>

              <a
                href="https://wa.me/919049443446"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300 group"
              >
                <FaWhatsapp className="text-green-400 text-xl group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* contact card */}
          <div
            className="relative rounded-[32px]
                        overflow-hidden opacity-0
                        animate-[cardReveal_1s_ease_0.4s_forwards,floatCard_6s_ease-in-out_infinite]"
          >
            <motion.div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                setPosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.01,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative bg-black border border-white/15 rounded-[32px]
                            backdrop-blur-xl
                            shadow-[0_20px_80px_rgba(255,255,255,0.06)]
                            overflow-hidden group"
            >
              {/* animated border */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                <div
                  className="absolute inset-[-200%]
                                    animate-[spinGlow_10s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.18), transparent 30%)",
                  }}
                />
              </div>

              {/* glow */}
              <div
                className="absolute w-72 h-72 rounded-full pointer-events-none
                                blur-[90px] opacity-20 transition-all duration-200"
                style={{
                  left: position.x - 140,
                  top: position.y - 140,
                  background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
                }}
              />

              {/* top gradient */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%)",
                }}
              />

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/5 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

              <div className="relative z-10 p-6 sm:p-7 space-y-6">
                {/* top */}
                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                      Send Message
                    </h2>

                    <span className="text-xs uppercase tracking-widest text-white/25 font-mono">
                      Direct WhatsApp
                    </span>
                  </div>

                  <p className="text-sm text-white/35 leading-relaxed">
                    Your message opens directly in WhatsApp to talk with Swaraj in real time.
                  </p>
                </div>

                {/* form */}
                <div className="space-y-4">
                  {/* input */}
                  <div className="relative group/input">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full h-14 px-6 rounded-[16px]
                                            bg-white/[0.03] backdrop-blur-2xl
                                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
                                            hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            border border-white/10
                                            group-hover/input:border-white/20
                                            text-white placeholder:text-white/20
                                            outline-none transition-all duration-300
                                            focus:border-white/30
                                            focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            font-medium"
                    />
                  </div>

                  {/* textarea */}
                  <div className="relative group/textarea">
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your project or message..."
                      className="w-full p-5 rounded-[16px] resize-none
                                            bg-white/[0.03] backdrop-blur-2xl
                                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
                                            hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            border border-white/10
                                            group-hover/textarea:border-white/20
                                            text-white placeholder:text-white/20
                                            outline-none transition-all duration-300
                                            focus:border-white/30
                                            focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            font-medium leading-relaxed"
                    />
                  </div>

                  {/* button */}
                  <button
                    onClick={handleSend}
                    disabled={!form.name || !form.message}
                    className="group/btn relative overflow-hidden
                                        w-full h-12 rounded-[16px] mt-6
                                        bg-gradient-to-b from-white to-zinc-300
                                        text-black font-bold tracking-wide text-sm uppercase
                                        transition-all duration-400
                                        hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]
                                        hover:scale-[1.02]
                                        active:scale-[0.97]
                                        disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaWhatsapp className="w-5 h-5" />
                      Send Message via WhatsApp
                    </span>
                  </button>

                  {/* status */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-xs text-white/30 font-mono">
                      Available for freelance & full-time roles
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
                @keyframes fadeSlideDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shine {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                @keyframes headingReveal {
                    from { opacity: 0; transform: translateY(80px) scale(0.92); filter: blur(12px); }
                    to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
                }
                @keyframes lineMove {
                    from { transform: translateX(-120%); }
                    to { transform: translateX(120%); }
                }
                @keyframes cardReveal {
                    from { opacity: 0; transform: translateY(50px) scale(0.96); filter: blur(10px); }
                    to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
                }
                @keyframes spinGlow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes floatCard {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

      {/* footer */}
      <div className="relative z-10 mt-24 border-t border-white/10 pt-12 pb-8">
        <div className="relative flex flex-col items-center gap-7">
          <h2
            className="text-center font-black tracking-[0.25em] uppercase text-white/60"
            style={{ fontSize: "clamp(14px,2vw,18px)" }}
          >
            Connect With Me
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/SwarajThakre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center overflow-hidden rounded-[20px]
                            border border-white/10 bg-white/[0.05] backdrop-blur-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                            transition-all duration-500 ease-out
                            hover:-translate-y-1.5 hover:scale-105 hover:border-white/40"
            >
              <FaGithub className="relative z-10 text-[24px] sm:text-[28px] text-white transition-all duration-500 group-hover:scale-110" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/swarajst/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center overflow-hidden rounded-[20px]
                            border border-white/10 bg-white/[0.05] backdrop-blur-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                            transition-all duration-500 ease-out
                            hover:-translate-y-1.5 hover:scale-105 hover:border-blue-400/50"
            >
              <FaLinkedin className="relative z-10 text-[24px] sm:text-[28px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-blue-400" />
            </a>

            {/* Instagram - Personal */}
            <a
              href="https://www.instagram.com/dollar_thakre26/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Personal"
              className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center overflow-hidden rounded-[20px]
                            border border-white/10 bg-white/[0.05] backdrop-blur-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                            transition-all duration-500 ease-out
                            hover:-translate-y-1.5 hover:scale-105 hover:border-pink-400/50"
            >
              <FaInstagram className="relative z-10 text-[24px] sm:text-[28px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-pink-400" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/+919049443446"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center overflow-hidden rounded-[20px]
                            border border-white/10 bg-white/[0.05] backdrop-blur-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                            transition-all duration-500 ease-out
                            hover:-translate-y-1.5 hover:scale-105 hover:border-sky-400/50"
            >
              <FaTelegram className="relative z-10 text-[24px] sm:text-[28px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-sky-400" />
            </a>

            {/*Twitter */}
            <a
              href="https://x.com/thakre_swaraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center overflow-hidden rounded-[20px]
                            border border-white/10 bg-white/[0.05] backdrop-blur-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                            transition-all duration-500 ease-out
                            hover:-translate-y-1.5 hover:scale-105 hover:border-sky-400/50"
            >
              <FaTwitter className="relative z-10 text-[24px] sm:text-[28px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-sky-400" />
            </a>

            {/* Direct Phone */}
            <a
              href="tel:+919049443446"
              aria-label="Phone"
              className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center overflow-hidden rounded-[20px]
                            border border-white/10 bg-white/[0.05] backdrop-blur-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                            transition-all duration-500 ease-out
                            hover:-translate-y-1.5 hover:scale-105 hover:border-emerald-400/50"
            >
              <FaPhone className="relative z-10 text-[22px] sm:text-[24px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-400" />
            </a>
          </div>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <p className="text-center text-xs sm:text-sm tracking-[0.22em] text-white/35">
            Copyright © {new Date().getFullYear()} All Rights Reserved | Designed & Developed by{" "}
            <span className="relative inline-block text-white font-semibold uppercase">
              <span className="relative">Swaraj Thakre</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
