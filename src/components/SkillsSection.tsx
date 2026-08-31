import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    description: "Interfaces, styling, and client-side experiences.",
    skills: [
      { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "jQuery", icon: "https://cdn.simpleicons.org/jquery/0769AD" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Material UI", icon: "https://cdn.simpleicons.org/mui/007FFF" },
      { name: "Chakra UI", icon: "https://cdn.simpleicons.org/chakraui/319795" },
    ],
  },
  {
    name: "Backend",
    description: "Server-side development, APIs, and databases.",
    skills: [
      { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    ],
  },
  {
    name: "Other",
    description: "Deployment, version control, tools, and AI workflows.",
    skills: [
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "Google", icon: "https://cdn.simpleicons.org/google/4285F4" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      {
        name: "ChatGPT",
        icon: "https://api.iconify.design/simple-icons:openai.svg?color=%23ffffff",
      },
      {
        name: "VS Code",
        icon: "https://api.iconify.design/simple-icons:visualstudiocode.svg?color=%23007ACC",
      },
    ],
  },
];

const totalSkills = skillCategories.reduce((total, category) => total + category.skills.length, 0);

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden border-t border-white/10 bg-black px-4 py-16 text-white select-none sm:px-8 md:px-16 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.07),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(239,68,68,0.06),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-2 flex items-center justify-center gap-4"
        >
          <div className="h-px w-10 bg-white/20" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.45em] text-white/40">
            ✦ Core Competencies
          </span>
          <div className="h-px w-10 bg-white/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 text-center"
        >
          <h2
            className="font-black leading-none tracking-tight text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.1)]"
            style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
          >
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </h2>
          <p className="mx-auto max-w-md font-mono text-xs uppercase tracking-widest text-white/60 sm:text-sm">
            {totalSkills} Technologies · Frontend, Backend & Tools
          </p>
        </motion.div>

        <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.name}
              initial={{ opacity: 0, y: 42, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 p-5 transition-colors duration-300 hover:border-white/35 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-5 border-b border-white/10 pb-4">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-red-400">
                  {category.name}
                </p>
                <p className="text-sm text-white/55">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    <img
                      src={skill.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="font-mono text-[10px] font-medium text-white/75">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
