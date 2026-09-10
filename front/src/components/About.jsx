
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    Layers3,
    Lightbulb,
    Terminal,
    UserRound,
} from "lucide-react";

const aboutPoints = [
    {
        id: "01",
        title: "How I think",
        icon: Lightbulb,
        description:
            "I start with the problem before jumping into the code. My focus is to understand what needs to be built, why it matters, and how it can stay simple as it grows.",
    },
    {
        id: "02",
        title: "How I build",
        icon: Layers3,
        description:
            "I like building applications with a clean structure, reusable components and APIs that are easy to maintain. I care about both the user experience and the code behind it.",
    },
    {
        id: "03",
        title: "What I care about",
        icon: Terminal,
        description:
            "Performance, clean UI, maintainable code and real-world usability. A good application should not only work — it should feel right to use and make sense to maintain.",
    },
];

const About = () => {
    const [activePoint, setActivePoint] = useState(aboutPoints[0]);

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-28 text-[#0f172a]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Section heading */}
                <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">

                    {/* Left label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-blue-600" />

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                                01 / About
                            </span>
                        </div>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                            A little more about the person behind the code.
                        </p>
                    </motion.div>

                    {/* Main intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                            I don't just write code.
                            <br />

                            <span className="text-blue-600">
                                I build products.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500">
                            I'm Rahul, a Full Stack Developer who enjoys turning ideas
                            into practical web applications. I work across the frontend
                            and backend, with a strong focus on React, Next.js, Node.js
                            and modern web technologies.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive area */}
                <div className="mt-20 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* LEFT — selectable points */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="border-t border-slate-200"
                    >
                        {aboutPoints.map((point) => {
                            const Icon = point.icon;
                            const isActive = activePoint.id === point.id;

                            return (
                                <button
                                    key={point.id}
                                    onClick={() => setActivePoint(point)}
                                    className={`group flex w-full items-center justify-between border-b border-slate-200 py-6 text-left transition-all duration-300 ${isActive
                                            ? "pl-3"
                                            : "hover:pl-3"
                                        }`}
                                >
                                    <div className="flex items-center gap-5">

                                        <span
                                            className={`font-mono text-xs transition-colors ${isActive
                                                    ? "text-blue-600"
                                                    : "text-slate-300"
                                                }`}
                                        >
                                            {point.id}
                                        </span>

                                        <div className="flex items-center gap-3">
                                            <Icon
                                                size={17}
                                                strokeWidth={1.7}
                                                className={
                                                    isActive
                                                        ? "text-blue-600"
                                                        : "text-slate-400"
                                                }
                                            />

                                            <span
                                                className={`text-base font-medium transition-colors ${isActive
                                                        ? "text-slate-900"
                                                        : "text-slate-500 group-hover:text-slate-900"
                                                    }`}
                                            >
                                                {point.title}
                                            </span>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={17}
                                        className={`transition-all duration-300 ${isActive
                                                ? "translate-x-0 -translate-y-0 text-blue-600"
                                                : "-translate-x-1 translate-y-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* RIGHT — dynamic content */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative min-h-[330px] overflow-hidden rounded-2xl bg-[#f4f9ff] p-8 sm:p-10 lg:p-12"
                    >
                        {/* Decorative number */}
                        <div className="absolute right-8 top-6 font-mono text-[100px] font-bold leading-none text-blue-600/[0.05]">
                            {activePoint.id}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePoint.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.25 }}
                                className="relative z-10"
                            >
                                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                                    {(() => {
                                        const Icon = activePoint.icon;
                                        return <Icon size={21} strokeWidth={1.7} />;
                                    })()}
                                </div>

                                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-600">
                                    {activePoint.id} — Perspective
                                </p>

                                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                    {activePoint.title}
                                </h3>

                                <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
                                    {activePoint.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom line */}
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600/10">
                            <motion.div
                                key={activePoint.id}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.5 }}
                                className="h-full bg-blue-600"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 grid border-y border-slate-200 sm:grid-cols-3"
                >
                    <div className="flex items-center gap-4 border-b border-slate-200 px-2 py-6 sm:border-b-0 sm:border-r sm:px-8">
                        <UserRound size={19} className="text-blue-600" />

                        <div>
                            <p className="text-xl font-semibold text-slate-900">
                                2+
                            </p>

                            <p className="text-xs text-slate-400">
                                Years building
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border-b border-slate-200 px-2 py-6 sm:border-b-0 sm:border-r sm:px-8">
                        <Layers3 size={19} className="text-blue-600" />

                        <div>
                            <p className="text-xl font-semibold text-slate-900">
                                MERN
                            </p>

                            <p className="text-xs text-slate-400">
                                Primary stack
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 px-2 py-6 sm:px-8">
                        <Terminal size={19} className="text-blue-600" />

                        <div>
                            <p className="text-xl font-semibold text-slate-900">
                                Full Stack
                            </p>

                            <p className="text-xs text-slate-400">
                                Development focus
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
