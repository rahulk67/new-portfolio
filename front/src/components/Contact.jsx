import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Mail,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Temporary frontend behavior
//     setSent(true);

//     setTimeout(() => {
//       setSent(false);
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//     }, 3000);
//   };

// const handleSubmitEmAILJS = async (e) => {
//   e.preventDefault();

//   try {
//     await emailjs.send(
//       "YOUR_SERVICE_ID",
//       "YOUR_TEMPLATE_ID",
//       {
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message,
//       },
//       "YOUR_PUBLIC_KEY"
//     );

//     setSent(true);

//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });

//     setTimeout(() => {
//       setSent(false);
//     }, 3000);
//   } catch (error) {
//     console.error("Email failed:", error);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      `${'http://localhost:5000'}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    setSent(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:px-10 lg:px-16"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Soft blue light */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.25em] text-blue-400">
              06 / CONTACT
            </span>

            <div className="h-px w-12 bg-blue-500/40" />
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Let's build something
            <span className="text-blue-400"> useful.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Have a project, opportunity or idea you'd like to discuss?
            Send me a message and let's start a conversation.
          </p>
        </div>

        {/* Contact workspace */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left panel */}
          <div className="flex flex-col justify-between border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
            <div>
              {/* Terminal heading */}
              <div className="mb-10 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <span className="font-mono text-xs text-slate-500">
                  rahul@developer:~
                </span>
              </div>

              <div className="font-mono">
                <p className="text-sm text-slate-500">
                  $ ./start-conversation
                </p>

                <p className="mt-4 text-lg text-white">
                  Let's talk<span className="text-blue-400">_</span>
                </p>
              </div>

              {/* Availability */}
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>

                  <span className="text-sm font-medium text-white">
                    Available for opportunities
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Open to full-time roles, interesting products and
                  meaningful collaborations.
                </p>
              </div>

              {/* Contact links */}
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:rahulkumawat6767@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition hover:border-blue-400/30 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={17} className="text-blue-400" />
                    <span className="text-sm text-slate-300">
                      Email me
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 transition group-hover:text-blue-400"
                  />
                </a>

                <a
                  href="https://github.com/rahulk67/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition hover:border-blue-400/30 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub size={17} className="text-blue-400"  />
                    <span className="text-sm text-slate-300">
                      GitHub
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 transition group-hover:text-blue-400"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/rahulk67/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition hover:border-blue-400/30 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3">
                   <FaLinkedin size={17} className="text-blue-400"  />
                    <span className="text-sm text-slate-300">
                      LinkedIn
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 transition group-hover:text-blue-400"
                  />
                </a>
              </div>
            </div>

            <div className="mt-12 font-mono text-xs text-slate-600">
              India · IST (UTC +5:30)
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white p-7 text-slate-900 md:p-10">
            <div className="mb-10">
              <span className="font-mono text-xs tracking-[0.2em] text-blue-600">
                NEW MESSAGE
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Tell me about your idea.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-400"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  className="w-full border-b border-slate-200 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-400"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="w-full border-b border-slate-200 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  className="w-full resize-none border-b border-slate-200 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-blue-500"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sent}
                className={`flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-medium transition ${
                  sent
                    ? "bg-green-600 text-white"
                    : "bg-slate-950 text-white hover:bg-blue-600"
                }`}
              >
                {sent ? (
                  <>
                    <Check size={17} />
                    Message ready to send
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Start conversation
                  </>
                )}
              </motion.button>
            </form>

            <p className="mt-5 text-center text-xs text-slate-400">
              I usually respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <span className="font-mono text-xs text-slate-600">
            connection.status = "open"
          </span>

          <span className="font-mono text-xs text-slate-600">
            ready_for_new_challenges()
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;