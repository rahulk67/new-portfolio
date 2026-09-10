import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Database,
  Globe,
  Layers3,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "Frontend Systems",
    short: "Interfaces that feel fast and intentional.",
    icon: Globe,
    description:
      "I build responsive frontend experiences with React and Next.js, focusing on clean component architecture, usability and performance.",
    handles: [
      "React.js applications",
      "Next.js interfaces",
      "Responsive layouts",
      "Reusable components",
      "State management",
      "Performance optimization",
    ],
    stack: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "Backend & APIs",
    short: "Reliable logic behind the interface.",
    icon: Server,
    description:
      "I develop backend systems and REST APIs using Node.js and Express.js with a focus on maintainable structure, validation and authentication.",
    handles: [
      "REST API development",
      "Node.js backends",
      "Express.js servers",
      "Authentication",
      "Authorization",
      "API integration",
    ],
    stack: ["Node.js", "Express.js", "REST API", "JWT"],
  },
  {
    id: "03",
    title: "Database Architecture",
    short: "Data structures built around real application needs.",
    icon: Database,
    description:
      "I work with both SQL and NoSQL databases and design data structures that support application requirements, scalability and efficient querying.",
    handles: [
      "MongoDB schemas",
      "MySQL databases",
      "PostgreSQL",
      "CRUD operations",
      "Query optimization",
      "Data relationships",
    ],
    stack: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "04",
    title: "Full Stack Products",
    short: "From the first screen to the final API.",
    icon: Layers3,
    description:
      "I connect frontend, backend and database layers into complete web applications instead of treating each part as a separate system.",
    handles: [
      "MERN applications",
      "Admin dashboards",
      "SaaS products",
      "E-commerce platforms",
      "Booking systems",
      "Role-based applications",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "05",
    title: "API Integration",
    short: "Making different systems work together.",
    icon: Braces,
    description:
      "I integrate third-party and internal APIs into web applications, handling requests, responses, authentication and application-side data flow.",
    handles: [
      "Third-party APIs",
      "REST integrations",
      "Authentication flows",
      "Request handling",
      "Error handling",
      "Frontend API consumption",
    ],
    stack: ["REST", "Axios", "Postman", "Node.js"],
  },
  {
    id: "06",
    title: "Deployment & Workflow",
    short: "Taking applications from code to production.",
    icon: Terminal,
    description:
      "I understand the development workflow beyond writing code — Git, deployment, environment configuration and containerization.",
    handles: [
      "Git & GitHub workflow",
      "Production builds",
      "Environment variables",
      "Vercel deployment",
      "Docker basics",
      "API testing",
    ],
    stack: ["Git", "GitHub", "Vercel", "Docker"],
  },
];

function Capabilities() {
  const [active, setActive] = useState(capabilities[0]);

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 md:px-10 lg:px-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
            backgroundSize: "55px 55px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
          }}
        />

        <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-xs font-medium tracking-[0.25em] text-blue-600">
              05 / CAPABILITIES
            </span>

            <div className="h-px w-12 bg-blue-200" />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            What I can build
            <span className="text-blue-600">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            I work across the complete web development stack — from interface
            architecture to APIs, databases and deployment.
          </p>
        </div>

        {/* Main */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="border-b border-slate-200 lg:border-b-0 lg:border-r">
            {capabilities.map((item) => {
              const Icon = item.icon;
              const isActive = active.id === item.id;

              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setActive(item)}
                  onClick={() => setActive(item)}
                  className={`group flex w-full items-center gap-5 border-b border-slate-100 px-6 py-6 text-left transition-all last:border-b-0 md:px-8 ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${
                      isActive ? "text-blue-400" : "text-slate-400"
                    }`}
                  >
                    {item.id}
                  </span>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
                      isActive
                        ? "border-white/10 bg-white/10"
                        : "border-slate-200 bg-slate-50 group-hover:border-blue-200"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">{item.title}</h3>

                    <p
                      className={`mt-1 text-sm ${
                        isActive ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {item.short}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform ${
                      isActive
                        ? "translate-x-0 text-blue-400"
                        : "-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-blue-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right */}
          <div className="relative min-h-[520px] overflow-hidden bg-slate-50 p-7 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 flex h-full flex-col"
              >
                {/* Number */}
                <div className="mb-10 flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs tracking-[0.2em] text-blue-600">
                      CAPABILITY / {active.id}
                    </span>

                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                      {active.title}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-blue-600 shadow-sm">
                    <active.icon size={21} />
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-xl text-base leading-7 text-slate-600">
                  {active.description}
                </p>

                {/* Handles */}
                <div className="mt-10">
                  <div className="mb-4 flex items-center gap-3">
                    <Zap size={15} className="text-blue-600" />

                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                      What I handle
                    </span>
                  </div>

                  <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {active.handles.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.2,
                        }}
                        className="flex items-center gap-3 border-b border-slate-200 py-2.5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                        <span className="text-sm text-slate-700">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="mt-auto pt-10">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                    Typical stack
                  </span>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-xs text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative number */}
            <div className="pointer-events-none absolute bottom-[-35px] right-[-10px] select-none font-mono text-[180px] font-bold leading-none text-slate-200/60">
              {active.id}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-slate-200 pt-7 md:flex-row md:items-center">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            The goal isn't to use every technology. It's to choose the right
            tools for the product and build something that is easy to maintain.
          </p>

          <div className="font-mono text-xs text-slate-400">
            frontend → backend → database → production
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;