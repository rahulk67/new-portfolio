
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Monitor,
} from "lucide-react";
import { Tooltip } from "react-tooltip";

const projects = [
  {
    id: "01",
    title: "TaskFlow AI",
    category: "AI / SaaS",
    year: "2026",
    featured: true,

    description:
      "An AI-powered project management SaaS designed to help teams organize projects, tasks and workflows from one place.",

    problem:
      "Managing projects often means switching between multiple tools, making it difficult to keep tasks, progress and collaboration in one place.",

    solution:
      "A centralized project workspace combining task management, team workflows and AI-assisted productivity features.",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "AI",
      "Tailwind CSS",
    ],

    github: "#",
    live: "#",

    accent: "AI",
    number: "01",
  },
  {
    id: "02",
    title: "CarePlus",
    category: "Patient Management System",
    year: "2026",
    featured: false,

    description:
      "A comprehensive patient management system designed to help healthcare providers manage patient information, appointments, medical records, and billing.",

    problem:
      "Managing patient information often means switching between multiple tools, making it difficult to keep track of patient data, appointments, and medical records.",

    solution:
      "A centralized patient management system combining patient data, appointment scheduling, medical records and billing.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Tailwind CSS",
    ],

    github: "https://github.com/rahulk67",
    live: "https://care-plus-frontend-tau.vercel.app",

    accent: "PS",
    number: "02",
  },

  {
    id: "03",
    title: "PoojaClick",
    category: "E-commerce / Booking",
    year: "2026",
    featured: false,

    description:
      "A complete digital platform for pooja products, online ordering and pooja event booking and management.",

    problem:
      "Traditional pooja shopping and event arrangements can involve multiple offline steps and disconnected communication.",

    solution:
      "A unified web experience where users can explore pooja products and manage pooja-related bookings through a single platform.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],

    github: "#",
    live: "https://poojaclick.com",

    accent: "EC",
    number: "03",
  },

  {
    id: "04",
    title: "MERN Admin Platform",
    category: "Full Stack",
    year: "2025",
    featured: false,

    description:
      "A full-stack administration platform focused on authentication, role-based access, APIs and data management.",

    problem:
      "Admin systems require secure authentication, structured APIs and an interface that makes complex data easy to manage.",

    solution:
      "A reusable full-stack architecture with protected routes, authentication middleware, APIs and responsive admin interfaces.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],

    github: "#",
    live: "#",

    accent: "FS",
    number: "04",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f7fbff] py-28 text-[#0f172a]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                04 / Projects
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Selected work, experiments and products I've built.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Things I've
              <br />
              <span className="text-blue-600">built with code.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
              A selection of applications where I worked across
              interfaces, APIs, databases and product functionality.
            </p>
          </motion.div>
        </div>

        {/* Project Explorer */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[280px_1fr]">

          {/* Project navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-slate-200"
          >
            {projects.map((project) => {
              const isActive = activeProject.id === project.id;

              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`group relative w-full border-b border-slate-200 p-5 text-left transition-all duration-300 ${isActive
                      ? "bg-white"
                      : "hover:bg-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="projectIndicator"
                      className="absolute bottom-0 left-0 top-0 w-1 bg-blue-600"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs ${isActive
                              ? "text-blue-600"
                              : "text-slate-300"
                            }`}
                        >
                          {project.number}
                        </span>

                        {project.featured && (
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-blue-600">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3
                        className={`mt-3 text-base font-semibold transition-colors ${isActive
                            ? "text-slate-900"
                            : "text-slate-500 group-hover:text-slate-900"
                          }`}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        {project.category}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className={`mt-1 transition-all duration-300 ${isActive
                          ? "text-blue-600"
                          : "text-slate-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        }`}
                    />
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Main project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >

                {/* Project visual */}
                <div className="relative min-h-[280px] overflow-hidden bg-[#0f172a] p-7 sm:min-h-[330px] sm:p-10">

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(#ffffff 1px, transparent 1px),
                        linear-gradient(90deg, #ffffff 1px, transparent 1px)
                      `,
                      backgroundSize: "45px 45px",
                    }}
                  />

                  {/* Large project number */}
                  <div className="absolute -right-4 -top-10 font-mono text-[190px] font-bold leading-none text-white/[0.035]">
                    {activeProject.number}
                  </div>

                  {/* Browser window */}
                  <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl">

                    {/* Browser header */}
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      </div>

                      <div className="font-mono text-[10px] text-white/30">
                        {activeProject.title.toLowerCase().replaceAll(" ", "-")}
                        .app
                      </div>

                      <Monitor
                        size={13}
                        className="text-white/30"
                      />
                    </div>

                    {/* Fake interface */}
                    <div className="p-5 sm:p-7">

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-2 w-20 rounded-full bg-white/20" />

                          <div className="mt-3 h-3 w-40 rounded-full bg-white/10" />
                        </div>

                        <div className="h-8 w-8 rounded-lg bg-blue-500/80" />
                      </div>

                      <div className="mt-8 grid grid-cols-3 gap-3">

                        <div className="h-24 rounded-lg border border-white/10 bg-white/[0.04]" />

                        <div className="h-24 rounded-lg border border-blue-400/20 bg-blue-500/10" />

                        <div className="h-24 rounded-lg border border-white/10 bg-white/[0.04]" />

                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="h-14 rounded-lg border border-white/10 bg-white/[0.03]" />
                        <div className="h-14 rounded-lg border border-white/10 bg-white/[0.03]" />
                      </div>

                    </div>
                  </div>

                  {/* Floating project label */}
                  <div className="absolute bottom-6 left-6 hidden sm:block">
                    <span className="font-mono text-xs text-blue-400">
                      PROJECT_{activeProject.number}
                    </span>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <span className="font-mono text-xs text-white/30">
                      {activeProject.year}
                    </span>
                  </div>
                </div>

                {/* Project information */}
                <div className="p-7 sm:p-10">

                  {/* Title row */}
                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

                    <div>
                      <div className="flex items-center gap-2">
                        <Layers3
                          size={16}
                          className="text-blue-600"
                        />

                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-blue-600">
                          {activeProject.category}
                        </span>
                      </div>

                      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                        {activeProject.title}
                      </h3>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">

                      <a
                        data-tooltip-id="my-first-tooltip"
                        data-tooltip-content="View on GitHub"

                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                        aria-label="GitHub"
                      >
                        <img src="/assets/github.svg" alt="GitHub" className="h-7 w-7" />
                      </a>

                      <Tooltip id="my-first-tooltip" place="top"
                        style={{
                          backgroundColor: "#0F172A",
                          color: "#F8FAFC",
                          fontSize: "12px",
                          fontWeight: "500",
                          padding: "3px 3px",
                          borderRadius: "6px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          border: "1px solid #1E293B",
                          maxWidth: "220px",
                          zIndex: 9999,
                        }} />


                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-[#0f172a] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-blue-600"
                      >
                        Live project
                        <ExternalLink size={14} />
                      </a>

                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
                    {activeProject.description}
                  </p>

                  {/* Problem / Solution */}
                  <div className="mt-9 grid gap-5 border-y border-slate-100 py-7 md:grid-cols-2">

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        The problem
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {activeProject.problem}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        The solution
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {activeProject.solution}
                      </p>
                    </div>

                  </div>

                  {/* Technologies */}
                  <div className="mt-7">

                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Built with
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-slate-200 bg-[#fbfdff] px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-600"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              More projects coming
            </span>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-blue-600"
          >
            Have a project in mind?

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

