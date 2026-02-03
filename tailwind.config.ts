import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1.75": "0.4375rem", // Correspondance exacte pour les marqueurs de coin
      },
      animation: {
        "move-background": "move-background 20s linear infinite",
      },
      keyframes: {
        "move-background": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
      },
      // ... autres extensions
    },
  },
  plugins: [],
};
export default config;
