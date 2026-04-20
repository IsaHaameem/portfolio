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
        background: "#0A0A0A",
        surface: "#121212",
        border: "#1E1E1E",
        accent: "#4F46E5", // Indigo 600
        muted: "#A3A3A3", // Neutral 400
      },
    },
  },
  plugins: [],
};
export default config;