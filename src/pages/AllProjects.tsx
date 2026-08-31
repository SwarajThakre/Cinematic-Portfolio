import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { projects } from "../components/Showcase";

export default function AllProjects() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black px-4 py-10 text-white select-none sm:px-6">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-white/5 opacity-20 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-white/5 opacity-20 blur-3xl" />
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        type="button"
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 z-50 flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-wider text-white uppercase shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/20"
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 pt-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-[0.25em] text-white/70 uppercase">
            <Layers size={14} />
            Selected Work
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">All Projects</h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            A selection of websites and digital products built with a focus on polished interfaces
            and useful experiences.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-3xl border border-white/15 bg-zinc-900/60 p-6 backdrop-blur-2xl sm:p-10"
        >
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Layers className="text-white/80" size={24} />
            <h2 className="text-xl font-bold tracking-wide sm:text-2xl">Featured Projects</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 hover:border-white/30"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                      {project.num} · {project.category}
                    </p>
                    <h2 className="text-xl font-black tracking-tight">{project.title}</h2>
                  </div>

                  <p className="text-sm leading-relaxed text-white/60">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] tracking-wider text-white/70 uppercase"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-white uppercase transition-colors hover:text-white/60"
                  >
                    View live project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
