"use client";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/Icons";
import { useTranslations } from "next-intl";

const toggleVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: 90,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    rotate: -90,
    transition: {
      duration: 0.2,
    },
  },
};

const ThemeToggle = () => {
  const t = useTranslations("shared.themeToggle");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted) return null;

  return (
    <div className="relative size-6">
      <AnimatePresence mode="wait">
        <motion.button
          key={theme}
          className={`absolute appearance-none cursor-pointer focus:outline-none focus-visible:ring-2  ${
            theme === "dark"
              ? "drop-shadow-[0px_0px_2rem_#8f9fc9]"
              : "drop-shadow-[0px_0px_1rem_#FFC800]"
          }`}
          onClick={toggleTheme}
          variants={toggleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-label={
            theme === "dark" ? t("toggleLightLabel") : t("toggleDarkLabel")
          }
          title={
            theme === "dark" ? t("toggleLightLabel") : t("toggleDarkLabel")
          }
        >
          {theme === "dark" ? (
            <MoonIcon className="size-full rounded-sm" />
          ) : (
            <SunIcon className="size-full rounded-sm" />
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
