import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] font-mono text-sm font-semibold text-white">
              RK
            </div>

            <p className="mt-5 font-mono text-xs tracking-[0.25em] text-slate-500">
              INITIALIZING...
            </p>

            <div className="mx-auto mt-4 h-1 w-32 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="h-full w-full bg-blue-500"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;