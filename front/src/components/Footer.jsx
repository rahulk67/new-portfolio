import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  MoveUpRight,
} from "lucide-react";

import { FaGithub , FaLinkedin } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-6 pb-8 pt-20 text-white md:px-10 lg:px-16">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm font-semibold">
                RK
              </div>

              <div>
                <p className="font-semibold">Rahul Kumawat</p>

                <p className="font-mono text-xs text-slate-500">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-500">
              Building clean, scalable and user-focused web applications
              with modern JavaScript technologies.
            </p>

            {/* Availability */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="font-mono text-xs text-slate-400">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
              Navigate
            </p>

            <div className="flex flex-col items-start gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <span>{link.name}</span>

                  <MoveUpRight
                    size={13}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Stack + socials */}
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
              Built with
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle developer status */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-xs text-slate-600">
            <span className="text-blue-400">rahul@portfolio</span>
            <span className="text-slate-700">:</span>
            <span className="text-slate-500">~</span>
            <span className="text-slate-700">$</span>{" "}
            <span className="text-slate-500">
              status --current
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            system.online
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Rahul Kumawat. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-slate-600">
              Designed & built with code.
            </span>

            {/* Back to top */}
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ArrowUp
                size={17}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;