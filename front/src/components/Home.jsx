
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Code2,Code,UserShield } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7fbff] text-[#0f172a]"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(#dbeafe 1px, transparent 1px),
              linear-gradient(90deg, #dbeafe 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Small blue accent */}
      <div className="absolute top-32 right-[12%] h-2 w-2 rounded-full bg-blue-600" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}
          <div>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-sm font-medium text-slate-600">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              I build digital
              <br />

              <span className="text-blue-600">
                experiences
              </span>{" "}
              that work.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-500"
            >
              I'm Rahul Kumawat, a Full Stack Developer focused on
              building clean, scalable and user-focused web applications
              with React, Next.js, Node.js and modern technologies.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-lg bg-[#0f172a] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600"
              >
                View my work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
              >
                Let's talk
              </a>
              <a
  href="https://collection.cloudinary.com/rahulk/a5676da371bbf741e20a63b0dd18eb28"
  download
  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
>
  Download Resume
</a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-slate-900"
                aria-label="GitHub"
              >
                <img src="/assets/github.svg" alt="GitHub" className="h-7 w-7" />
              </a>

              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
              </a>

              <span className="h-px w-12 bg-slate-200" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Jaipur · India
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Developer interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">

              {/* Main panel */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">

                {/* Window header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Code2 size={14} />
                    developer.js
                  </div>

                  <div className="text-xs text-slate-300">
                    01
                  </div>
                </div>

                {/* Code */}
                <div className="p-7 font-mono text-sm leading-7">

                  <div>
                    <span className="text-blue-600">const</span>{" "}
                    <span className="text-slate-800">developer</span>{" "}
                    = {"{"}
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-green-600">
                      "Rahul Kumawat"
                    </span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-green-600">
                      "Full Stack Developer"
                    </span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">stack:</span>{" "}
                    <span className="text-green-600">
                      "MERN"
                    </span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-slate-400">focus:</span>{" "}
                    <span className="text-green-600">
                      "Clean & scalable apps"
                    </span>
                  </div>

                  <div>{"}"}</div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-slate-100" />

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-xl bg-[#f7fbff] p-4">
                      <p className="text-2xl font-semibold text-slate-900">
                        2+
                      </p>
                      <p className="mt-1 font-sans text-xs text-slate-400">
                        Years experience
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#f7fbff] p-4">
                      <p className="text-2xl font-semibold text-slate-900">
                        10+
                      </p>
                      <p className="mt-1 font-sans text-xs text-slate-400">
                        Technologies
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 -top-5 hidden rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg sm:block"
              >
                <div className="text-[10px] uppercase tracking-widest text-slate-400">
                  Currently
                </div>

                <div className="mt-1 text-sm font-semibold text-blue-600">
                  Building things
                </div>
              </motion.div>

              {/* Small bottom tag */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
                <div className="text-xs text-slate-400">
                  Based in
                </div>

                <div className="text-sm font-semibold text-slate-800">
                  India 🇮🇳
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 md:flex"
      >
        Scroll to explore
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
};

export default Home;

