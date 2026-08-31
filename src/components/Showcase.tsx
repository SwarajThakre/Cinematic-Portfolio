import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioImage from "../assets/projects/portfolio.png";
import currencyImage from "../assets/projects/currency.png";
import ecommerceImage from "../assets/projects/Ecom.png";
import locationImage from "../assets/projects/location.png";
import wanderlustImage from "../assets/projects/Wanderlust.png";
import weatherImage from "../assets/projects/weather.png";
import passwordGeneratorImage from "../assets/projects/passwordgenerator.png";

export const projects = [
  {
    id: "01",
    num: "01",
    shortName: "Portfolio",
    title: "Personal Portfolio",
    category: "Portfolio Website",
    tech: ["React", "Tailwind CSS"],
    description:
      "My personal portfolio, built to present my frontend work, technical skills, and services through a polished, responsive experience.",
    image: portfolioImage,
    live: "https://swarajthakre26.netlify.app/",
    glowColor: "rgba(239, 68, 68, 0.25)",
    accentBg: "from-red-600/30 via-orange-600/10 to-transparent",
  },
  {
    id: "02",
    num: "02",
    shortName: "Currency Exchange",
    title: "Currency Exchange Platform",
    category: "Financial Platform",
    tech: ["JavaScript", "HTML5", "CSS3", "RestAPI"],
    description:
      "A currency exchange interface that lets users compare conversion rates and calculate exchanges through a clear, easy-to-use workflow.",
    image: currencyImage,
    live: "https://globexrates.netlify.app/",
    glowColor: "rgba(59, 132, 246, 0.25)",
    accentBg: "from-blue-600/30 via-cyan-600/10 to-transparent",
  },
  {
    id: "03",
    num: "03",
    shortName: "Ecommerce",
    title: "Ecommerce Website",
    category: "Ecommerce Platform",
    tech: ["JavaScript", "HTML5", "CSS3"],
    description:
      "A responsive ecommerce storefront designed to help users browse products, explore details, and enjoy a smooth online shopping experience.",
    image: ecommerceImage,
    live: "https://wood-ecomm-site.netlify.app/",
    glowColor: "rgba(30, 105, 129, 0.25)",
    accentBg: "from-emerald-600/30 via-teal-600/10 to-transparent",
  },
  {
    id: "04",
    num: "04",
    shortName: "Tracking Site",
    title: "Tracking Website",
    category: "Tracking Platform",
    tech: ["EJS", "leaflet", "Express", "NodeJS"],
    description:
      "A real-time location tracking website that uses an interactive map to display and follow live location updates.",
    image: locationImage,
    live: "https://real-time-tracking-system-34ae.onrender.com/",
    glowColor: "rgba(145, 158, 11, 0.25)",
    accentBg: "from-amber-600/30 via-yellow-600/10 to-transparent",
  },
  {
    id: "05",
    num: "05",
    shortName: "Wanderlust",
    title: "Wanderlust Travel Agency",
    category: "Travel Agency",
    tech: ["HTML5", "CSS3"],
    description:
      "A travel agency website that helps visitors discover destinations, explore travel options, and plan their next trip.",
    image: wanderlustImage,
    live: "https://swarajthakre.github.io/WanderLust/",
    glowColor: "rgba(234, 179, 8, 0.25)",
    accentBg: "from-yellow-600/30 via-amber-600/10 to-transparent",
  },
  {
    id: "06",
    num: "06",
    shortName: "Weather App",
    title: "Weather App",
    category: "Weather App",
    tech: ["React", "Next.js", "Tailwind CSS"],
    description:
      "A weather application that presents current conditions and forecasts in a simple, responsive interface.",
    image: weatherImage,
    live: "https://weather-report-sites.netlify.app/",
    glowColor: "rgba(236, 72, 153, 0.25)",
    accentBg: "from-pink-600/30 via-rose-600/10 to-transparent",
  },
  {
    id: "07",
    num: "07",
    shortName: "Password Generator",
    title: "Password Generator",
    category: "Password Generator",
    tech: ["React", "HTML5", "CSS3"],
    description:
      "A password generator that creates strong, customizable passwords to help users improve account security.",
    image: passwordGeneratorImage,
    live: "https://password-generator-react-pi-two.vercel.app/",
    glowColor: "rgba(99, 102, 241, 0.25)",
    accentBg: "from-indigo-600/30 via-purple-600/10 to-transparent",
  },
];

// CINEMATIC PROJECT REVEAL CAROUSEL COMPONENT
function CinematicProjectReveal() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const activeProject = projects[activeIdx];
  const prevIdx = (activeIdx - 1 + projects.length) % projects.length;
  const nextIdx = (activeIdx + 1) % projects.length;

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // 3D Tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -4,
      y: (x / (rect.width / 2)) * 4,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) handleNext();
    if (dx > 40) handlePrev();
    touchStartX.current = null;
  };

  // Calculate progress indicator width percentage
  const progressPct = ((activeIdx + 1) / projects.length) * 100;

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center space-y-12">
      {/* DYNAMIC AMBIENT BACKDROP GLOW */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 blur-3xl opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${activeProject.glowColor}, transparent 70%)`,
        }}
      />

      {/* CAROUSEL CONTAINER WITH PEEKING PREVIEWS */}
      <div
        className="relative w-full flex items-center justify-center min-h-[500px] sm:min-h-[560px] overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* LEFT PEEKING PREVIEW (PREVIOUS) */}
        <div
          onClick={handlePrev}
          className="hidden md:flex absolute left-[-12%] lg:left-[-5%] z-10 w-[300px] lg:w-[380px] aspect-[16/10] rounded-2xl border border-white/10 bg-zinc-950/80 opacity-40 hover:opacity-75 scale-90 transition-all duration-700 ease-out cursor-pointer overflow-hidden backdrop-blur-md items-center justify-center group"
        >
          <img
            src={projects[prevIdx].image}
            alt="Previous"
            className="w-full h-full object-cover object-top opacity-50 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute left-6 flex items-center gap-3 text-white/80 group-hover:text-white">
            <div className="w-10 h-10 rounded-full border border-white/20 bg-black/60 flex items-center justify-center backdrop-blur-md">
              <ChevronLeft size={20} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                Previous
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {projects[prevIdx].shortName}
              </span>
            </div>
          </div>
        </div>

        {/* CENTER ACTIVE HERO PROJECT CARD */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`,
            transition: "transform 0.15s ease-out, border-color 0.5s",
          }}
          className="relative z-20 w-full max-w-3xl rounded-3xl border border-white/20 bg-zinc-950/90 backdrop-blur-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] group"
        >
          {/* Subtle Ambient Accent Mesh */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${activeProject.accentBg} opacity-40 pointer-events-none`}
          />

          {/* Floating Device Screen Frame */}
          <div className="relative z-20 px-6 sm:px-10 pt-8 pb-8 space-y-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl animate-float">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Floating Live Badge inside Screen */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/70 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                >
                  <span>View Live Project</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Active Project Title & Metadata */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
              <div className="space-y-2 max-w-xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 font-bold">
                  ✦ {activeProject.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  {activeProject.title}
                </h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  {activeProject.description}
                </p>
              </div>

              {/* Tech Badges Stack */}
              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
                {activeProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PEEKING PREVIEW (NEXT) */}
        <div
          onClick={handleNext}
          className="hidden md:flex absolute right-[-12%] lg:right-[-5%] z-10 w-[300px] lg:w-[380px] aspect-[16/10] rounded-2xl border border-white/10 bg-zinc-950/80 opacity-40 hover:opacity-75 scale-90 transition-all duration-700 ease-out cursor-pointer overflow-hidden backdrop-blur-md items-center justify-center group"
        >
          <img
            src={projects[nextIdx].image}
            alt="Next"
            className="w-full h-full object-cover object-top opacity-50 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
          <div className="absolute right-6 flex items-center gap-3 text-white/80 group-hover:text-white text-right">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                Next
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {projects[nextIdx].shortName}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 bg-black/60 flex items-center justify-center backdrop-blur-md">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION CHEVRON CONTROLS FOR ALL SCREENS */}
      <div className="flex items-center justify-between w-full max-w-md px-4">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Previous</span>
        </button>

        <span className="font-mono text-xs font-bold text-white/50 tracking-widest">
          {activeProject.num} / 06
        </span>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* BOTTOM CONTEXTUAL NAVIGATION LIST & PROGRESS LINE */}
      <div className="w-full space-y-6 pt-4 border-t border-white/10">
        {/* Thin Progress Indicator Line */}
        <div className="relative w-full max-w-xl mx-auto h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-white transition-all duration-500 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Project Name List Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {projects.map((p, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`group flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white font-bold scale-105" : "text-white/40 hover:text-white/70"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold ${isActive ? "text-red-500" : "text-white/30"}`}
                >
                  {p.num}
                </span>
                <span className="text-xs uppercase tracking-wider font-mono">{p.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 overflow-hidden select-none">
      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto space-y-8">
        {/* Label */}
        <div className="relative flex items-center justify-center gap-4 mb-2">
          <div className="w-10 h-px bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/40 font-mono font-medium">
            ✦ Selected Work
          </span>
          <div className="w-10 h-px bg-white/20" />
        </div>

        {/* Section Headline */}
        <div className="relative overflow-hidden mb-4 text-center">
          <h1
            className="font-black tracking-tight leading-none text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.1)]"
            style={{ fontSize: "clamp(36px, 6vw, 84px)" }}
          >
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Where Ideas Become Interfaces.
            </span>
          </h1>
        </div>

        {/* PROJECTS CAROUSEL */}
        <CinematicProjectReveal />

        <Link
          to="/all-projects"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          View All Projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
