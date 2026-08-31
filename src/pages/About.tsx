import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  Cpu,
  Code,
  Layers,
  Sparkles,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1wLQu3d7mrBuSIBYblyAlmVNXDwLkfhyA";

export default function About() {
  const navigate = useNavigate();
  const text = "About Swaraj";

  const [displayedText, setDisplayedText] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isPreparingDownload, setIsPreparingDownload] = useState(false);

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    if (isPreparingDownload) return;

    setIsPreparingDownload(true);
    setCountdown(3);

    let secondsRemaining = 3;
    const timer = window.setInterval(() => {
      secondsRemaining -= 1;
      setCountdown(secondsRemaining);

      if (secondsRemaining === 0) {
        window.clearInterval(timer);
        setIsPreparingDownload(false);
        setCountdown(null);
        window.location.assign(RESUME_URL);
      }
    }, 1000);
  };

  const coreExpertise = [
    {
      category: "Frontend",
      icon: Code,
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      icon: Cpu,
      skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    },
    {
      category: "Development Tools",
      icon: Sparkles,
      skills: [
        "Git & GitHub",
        "VS Code",
        "Vite",
        "npm",
        "Chrome DevTools",
        "Vercel",
      ],
    },
    {
      category: "Other Skills",
      icon: Layers,
      skills: [
        "Responsive UI/UX",
        "SEO Optimization",
        "Performance Optimization",
        "Authentication Systems",
        "Dashboard Development",
        "API Integrations",
        "Deployment & Hosting",
      ],
    },
  ];

  const whatIBuild = [
    "Corporate Websites",
    "Business Websites",
    "Portfolio Websites",
    "Landing Pages",
    "Dashboards",
    "Admin Panels",
    "E-commerce Websites",
    "Web Applications",
  ];

  const whyChooseMe = [
    "Premium UI/UX",
    "Fast communication",
    "Clean, maintainable code",
    "Mobile-first development",
    "SEO-friendly architecture",
    "High-performance websites",
    "User-friendly interfaces",
    "Scalable solutions",
    "On-time delivery",
    "Long-term support",
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden text-white px-4 sm:px-6 py-10 select-none">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/10
          backdrop-blur-xl
          hover:bg-white/20
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
          cursor-pointer
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline font-medium text-xs tracking-wider uppercase">Back</span>
      </motion.button>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto pt-12 gap-10">
        {/* HERO TITLE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs text-white/70 font-mono uppercase tracking-[0.25em]">
            ✦ Frontend Web Developer
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            {displayedText}
            <span className="animate-pulse ml-2 text-white/50">|</span>
          </h1>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
            I'm a Frontend Web Developer focused on transforming ideas into
            user friendly web experiences.
          </p>
        </motion.div>

        {/* BIO & APPROACH CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-3xl border border-white/15 bg-zinc-900/60 backdrop-blur-2xl p-6 sm:p-10 space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Sparkles className="text-white/80" size={24} />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
              My Approach & Philosophy
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            I’m a Frontend Developer focused on building modern, responsive, and user-friendly web
            applications. I enjoy turning ideas and designs into clean, interactive interfaces with
            an emphasis on performance, usability, and maintainable code.
          </p>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            I primarily work with React and JavaScript, continuously improving my skills by building
            projects, exploring modern frontend practices, and creating digital experiences that
            feel polished, intuitive, and enjoyable to use.
          </p>
        </motion.div>

        {/* CORE EXPERTISE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Cpu className="text-white/80" size={24} />
            <h2 className="text-2xl font-bold tracking-wide">Core Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreExpertise.map((group, i) => {
              const IconComp = group.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/15 bg-zinc-900/50 backdrop-blur-xl p-6 space-y-4 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                      <IconComp size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* WHAT I BUILD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Layers className="text-white/80" size={24} />
            <h2 className="text-2xl font-bold tracking-wide">What I Build</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {whatIBuild.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center gap-2.5 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-white/70" />
                <span className="text-xs sm:text-sm font-medium text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* WHAT YOU CAN EXPECT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <ShieldCheck className="text-white/80" size={24} />
            <h2 className="text-2xl font-bold tracking-wide">What You Can Expect</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whyChooseMe.map((reason, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/15 bg-zinc-900/60 backdrop-blur-xl flex items-center gap-3 hover:border-white/30 transition-all duration-300"
              >
                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                <span className="text-sm font-semibold text-white">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RESUME DOWNLOAD BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          type="button"
          onClick={handleResumeDownload}
          disabled={isPreparingDownload}
          className="
            group
            relative
            overflow-hidden
            flex
            items-center
            justify-center
            gap-3
            px-10
            py-4
            mt-4
            rounded-2xl
            border
            border-white/20
            bg-white
            text-black
            font-bold
            text-sm
            uppercase
            tracking-wider
            hover:bg-zinc-200
            hover:scale-105
            disabled:cursor-not-allowed
            disabled:opacity-60
            transition-all
            duration-300
            shadow-2xl
            cursor-pointer
          "
        >
          <div className="relative z-10 flex items-center gap-3">
            <Download
              size={20}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span>
              {isPreparingDownload ? `Downloading in ${countdown}s...` : "Download Resume"}
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
