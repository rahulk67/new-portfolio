
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href) => {
    setMobileMenu(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Desktop / Main Navbar */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <button
            onClick={() => handleNavigation("#home")}
            className="group flex items-center gap-3"
          >
            {/* Logo mark */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f172a] text-sm font-bold text-white transition-all duration-300 group-hover:bg-blue-600">
              RK
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                Rahul Kumawat
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.name}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-600"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigation("#contact")}
              className="group flex items-center gap-2 rounded-lg bg-[#0f172a] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600"
            >
              Let's talk

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl md:hidden"
          >
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.substring(1);

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    )}
                  </button>
                );
              })}

              <div className="my-2 h-px bg-slate-100" />

              <button
                onClick={() => handleNavigation("#contact")}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-4 py-3.5 text-sm font-medium text-white"
              >
                Let's talk
                <ArrowUpRight size={16} />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

