
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Braces,
  Database,
  GitBranch,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    icon: Layers3,
    description: "Interfaces that are clean, responsive and interactive.",
    skills: [
      {
        name: "React.js",
        level: "Advanced",
        description: "Component-based UI development",
      },
      {
        name: "Next.js",
        level: "Intermediate",
        description: "Full-stack React applications & SSR",
      },
      {
        name: "JavaScript",
        level: "Advanced",
        description: "Modern ES6+ application logic",
      },
      {
        name: "HTML / CSS",
        level: "Advanced",
        description: "Semantic markup & responsive layouts",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "Utility-first responsive styling",
      },
      {
        name: "Bootstrap",
        level: "Advanced",
        description: "Rapid responsive UI development",
      },
    ],
  },

  {
    id: "backend",
    number: "02",
    title: "Backend",
    icon: Server,
    description: "APIs and server-side systems built for real applications.",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        description: "Server-side JavaScript runtime",
      },
      {
        name: "Express.js",
        level: "Advanced",
        description: "REST API development & middleware",
      },
      {
        name: "REST APIs",
        level: "Advanced",
        description: "Scalable client-server communication",
      },
      {
        name: "Authentication",
        level: "Advanced",
        description: "JWT, protected routes & sessions",
      },
      {
        name: "Socket.IO",
        level: "Intermediate",
        description: "Real-time bi-directional communication",
      },
      {
        name: "Redis",
        level: "Intermediate",
        description: "In-memory data structure & caching",
      }
    ],
  },

  {
    id: "database",
    number: "03",
    title: "Database",
    icon: Database,
    description: "Structured and flexible data systems.",
    skills: [
      {
        name: "MongoDB",
        level: "Advanced",
        description: "NoSQL database & document modeling",
      },
      {
        name: "MySQL",
        level: "Intermediate",
        description: "Relational database development",
      },
      {
        name: "PostgreSQL",
        level: "Intermediate",
        description: "Relational data & SQL queries",
      },
    ],
  },

  {
    id: "tools",
    number: "04",
    title: "Tools & AI ",
    icon: Wrench,
    description: "Tools I use to build, test and ship applications.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        description: "Version control & collaboration",
      },
      {
        name: "Postman",
        level: "Advanced",
        description: "API testing & documentation",
      },
      {
        name: "Vercel",
        level: "Intermediate",
        description: "Deployment & hosting",
      },
      {
        name: "Docker",
        level: "Learning",
        description: "Containerized application environments",
      },
      {
        name: "ChatGPT, Gemini & Claude",
        level: "Advanced",
        description: "AI tools for problem solving",
      },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0]
  );

  return (
    <section
      id="skills"
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
                02 / Skills
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              The technologies I use to turn ideas into working
              products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              My stack is built around
              <span className="text-blue-600"> real-world development.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
              From designing interfaces to building APIs and working
              with databases, I work across the stack to build complete
              web applications.
            </p>
          </motion.div>
        </div>

        {/* Interactive stack */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[300px_1fr]">

          {/* Category navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="self-start border-t border-slate-200"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory.id === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`group flex w-full items-center justify-between border-b border-slate-200 px-2 py-6 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white pl-5"
                      : "hover:bg-white hover:pl-5"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <span
                      className={`font-mono text-xs ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-300"
                      }`}
                    >
                      {category.number}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className={
                        isActive
                          ? "text-blue-600"
                          : "text-slate-400"
                      }
                    />

                    <span
                      className={`text-sm font-medium ${
                        isActive
                          ? "text-slate-900"
                          : "text-slate-500"
                      }`}
                    >
                      {category.title}
                    </span>
                  </div>

                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      isActive
                        ? "bg-blue-600"
                        : "bg-transparent group-hover:bg-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Skills panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="min-h-[470px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.04)] sm:p-8"
          >

            {/* Panel header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-start justify-between border-b border-slate-100 pb-6">

                  <div>
                    <p className="font-mono text-xs text-blue-600">
                      {activeCategory.number} / 04
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                      {activeCategory.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {activeCategory.description}
                    </p>
                  </div>

                  <Braces
                    size={24}
                    strokeWidth={1.5}
                    className="hidden text-slate-200 sm:block"
                  />
                </div>

                {/* Technology list */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {activeCategory.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className="group relative overflow-hidden rounded-xl border border-slate-100 bg-[#fbfdff] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
                    >
                      {/* Hover accent */}
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h4 className="font-medium text-slate-900">
                            {skill.name}
                          </h4>

                          <p className="mt-2 text-xs leading-5 text-slate-400">
                            {skill.description}
                          </p>
                        </div>

                        <span
                          className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${
                            skill.level === "Advanced"
                              ? "bg-blue-50 text-blue-600"
                              : skill.level === "Intermediate"
                              ? "bg-slate-100 text-slate-500"
                              : "bg-slate-50 text-slate-400"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {/* Tiny progress line */}
                      <div className="mt-5 h-px w-full overflow-hidden bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              skill.level === "Advanced"
                                ? "88%"
                                : skill.level === "Intermediate"
                                ? "68%"
                                : "40%",
                          }}
                          transition={{
                            duration: 0.7,
                            delay: 0.1 + index * 0.05,
                          }}
                          className="h-full bg-blue-600"
                        />
                      </div>
                    </motion.div>
                  ))}

                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Stack statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col justify-between gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            I don't try to use every technology. I choose the right
            tools for the problem and keep the implementation as simple
            as possible.
          </p>

          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            <GitBranch size={15} className="text-blue-600" />
            Always learning
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

