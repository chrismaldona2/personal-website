"use client";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/Icons";

const toggleVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted) return;

  return (
    <div className="relative size-6">
      <AnimatePresence>
        {theme === "dark" ? (
          <motion.button
            key="light"
            className="absolute appearance-none cursor-pointer drop-shadow-[0px_0px_2rem_#8f9fc9] "
            onClick={toggleTheme}
            variants={toggleVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-label="Toggle light mode"
          >
            <MoonIcon className="size-full rounded-sm" />
          </motion.button>
        ) : (
          <motion.button
            key="dark"
            className="absolute appearance-none cursor-pointer drop-shadow-[0px_0px_1rem_#FFC800]"
            onClick={toggleTheme}
            variants={toggleVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-label="Toggle dark mode"
          >
            <SunIcon className="size-full rounded-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
