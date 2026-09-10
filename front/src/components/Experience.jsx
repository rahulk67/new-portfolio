
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
} from "lucide-react";

const experiences = [
  {
    id: "02",
    year: "2024 — 2026",
    period: "Sep 2024 — Apr 2026",
    company: "Infayou Digital",
    role: "Software Developer",
    type: "Full Time",
    location: "On-site",
    description:
      "Worked on real-world web applications across frontend and backend, contributing to application development, APIs and database-driven features.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    highlights: [
      "Developed responsive and reusable React interfaces",
      "Built and integrated RESTful APIs",
      "Worked with MongoDB data models and queries",
      "Collaborated on real-world application features",
    ],
  },
  {
    id: "01",
    year: "2024",
    period: "Jul 2024 — Aug 2024",
    company: "Zidio Development",
    role: "Web Developer",
    type: "Internship",
    location: "Remote",
    description:
      "Worked on MERN-based web development projects with a focus on frontend interfaces, backend APIs and MongoDB integration.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    highlights: [
      "Built MERN stack application features",
      "Created RESTful APIs using Node and Express",
      "Worked with MongoDB schemas and queries",
      "Improved database queries and application performance",
    ],
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(
    experiences[0]
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-28 text-[#0f172a]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section heading */}
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
                03 / Experience
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              A timeline of where I've worked, what I've built and
              what I've learned.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Experience,
              <br />
              <span className="text-blue-600">
                one version at a time.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
              Every role has added something to the way I approach
              problems, write code and build products.
            </p>
          </motion.div>
        </div>

        {/* Experience changelog */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT — Experience list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-slate-200"
          >
            {experiences.map((experience) => {
              const isActive =
                activeExperience.id === experience.id;

              return (
                <button
                  key={experience.id}
                  onClick={() => setActiveExperience(experience)}
                  className={`group relative w-full border-b border-slate-200 p-6 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#f7fbff]"
                      : "hover:bg-[#fbfdff]"
                  }`}
                >
                  {/* Active vertical line */}
                  {isActive && (
                    <motion.div
                      layoutId="experienceLine"
                      className="absolute bottom-0 left-0 top-0 w-1 bg-blue-600"
                    />
                  )}

                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs ${
                            isActive
                              ? "text-blue-600"
                              : "text-slate-300"
                          }`}
                        >
                          v{experience.id}
                        </span>

                        <span className="text-xs text-slate-400">
                          {experience.year}
                        </span>
                      </div>

                      <h3
                        className={`mt-3 text-lg font-semibold transition-colors ${
                          isActive
                            ? "text-slate-900"
                            : "text-slate-500 group-hover:text-slate-900"
                        }`}
                      >
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {experience.company}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className={`mt-1 transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* RIGHT — Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f7fbff] p-7 sm:p-10"
          >
            {/* Background version number */}
            <div className="pointer-events-none absolute right-5 top-0 font-mono text-[160px] font-bold leading-none text-blue-600/[0.035]">
              {activeExperience.id}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeExperience.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-5 border-b border-slate-200 pb-7">

                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <BriefcaseBusiness
                        size={16}
                        className="text-blue-600"
                      />

                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-blue-600">
                        Experience / {activeExperience.id}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                      {activeExperience.role}
                    </h3>

                    <p className="mt-2 text-base font-medium text-slate-500">
                      {activeExperience.company}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500">
                    {activeExperience.type}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-7 gap-y-3 border-b border-slate-200 py-5">

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CalendarDays size={14} />
                    {activeExperience.period}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Code2 size={14} />
                    {activeExperience.location}
                  </div>

                </div>

                {/* Description */}
                <p className="mt-7 text-sm leading-7 text-slate-500">
                  {activeExperience.description}
                </p>

                {/* Highlights */}
                <div className="mt-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Key contributions
                  </p>

                  <div className="space-y-3">
                    {activeExperience.highlights.map(
                      (highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.07,
                          }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <Check size={12} />
                          </span>

                          <span className="text-sm leading-6 text-slate-600">
                            {highlight}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-9 border-t border-slate-200 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {activeExperience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-600"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom progress */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600/10">
              <motion.div
                key={activeExperience.id}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                className="h-full bg-blue-600"
              />
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-6"
        >
          <span className="font-mono text-xs text-blue-600">
            $ git log --career
          </span>

          <span className="h-px flex-1 bg-slate-200" />

          <span className="hidden text-xs text-slate-400 sm:block">
            Still writing the next version...
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;

