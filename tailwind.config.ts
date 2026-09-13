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
        mint: {
          50:  "#edfff7",
          100: "#d5ffee",
          200: "#aeffdf",
          300: "#70ffca",
          400: "#38d9a9",
          500: "#2ec99a",
          600: "#22a87e",
          700: "#1b8764",
          800: "#186b51",
          900: "#155843",
          DEFAULT: "#38d9a9",
        },
        chrome: {
          DEFAULT: "#c8c8c8",
          light:   "#e8e8e8",
          dark:    "#888888",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-mint-hero":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,217,169,0.22) 0%, transparent 65%)",
        "radial-mint-sm":
          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(56,217,169,0.12) 0%, transparent 70%)",
      },
      boxShadow: {
        "mint-glow":    "0 0 20px rgba(56,217,169,0.30)",
        "mint-glow-lg": "0 0 50px rgba(56,217,169,0.40)",
        "card":         "0 0 0 1px rgba(255,255,255,0.06), 0 4px 32px rgba(0,0,0,0.50)",
      },
      animation: {
        float:   "float 5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-400% 0" },
          "100%": { backgroundPosition: " 400% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
