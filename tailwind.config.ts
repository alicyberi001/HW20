import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: '0', transform: "scale(0.95)" },
          "100%": { opacity: '1', transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
export default config;
