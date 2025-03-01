import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          150: "#ededed",
          250: "#dbdbdb",
          450: "#808080",
          550: "#5c5c5c",
          850: "#1f1f1f",
          925: "#131313",
        },
      },
      animation: {
        "rotate-in": "rotate-in 300ms ease-in-out backwards",
        "rotate-out": "rotate-out 350ms ease-in-out forwards",
      },
      keyframes: {
        "rotate-in": {
          "0%": { transform: "rotate(90deg) scale(0)" },
          "60%": { transform: "rotate(10deg) scale(1.15)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        "rotate-out": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(-30deg) scale(1.15)" },
          "100%": { transform: "rotate(-90deg) scale(0)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
