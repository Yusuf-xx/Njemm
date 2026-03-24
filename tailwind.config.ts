import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"]
      },
      colors: {
        brandTeal: "#0B5F61",
        brandTealDark: "#063D3E",
        softGold: "#D8B46A",
        ink: "#0A1118"
      },
      boxShadow: {
        lux: "0 30px 80px rgba(3, 9, 16, 0.28), 0 10px 30px rgba(3, 9, 16, 0.18)",
        glow: "0 0 0 1px rgba(216,180,106,0.25), 0 10px 40px rgba(11,95,97,0.35), 0 0 70px rgba(216,180,106,0.24)"
      }
    }
  },
  plugins: []
};

export default config;
