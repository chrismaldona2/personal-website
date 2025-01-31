"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === "light")
    return (
      <div
        className="flex min-w-4 cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        <Image src="/images/sun.png" alt="Dark mode" height={24} width={24} />
      </div>
    );

  if (resolvedTheme === "dark")
    return (
      <div
        className="flex min-w-4 cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <Image
          src="/images/moon.png"
          alt="Toggle light mode"
          height={24}
          width={24}
        />
      </div>
    );
};

export default ThemeToggle;
