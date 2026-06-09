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
        os: {
          dark: "#0F0F11",
          darker: "#0A0A0B",
          panel: "rgba(25, 25, 28, 0.6)",
          border: "rgba(255, 255, 255, 0.1)",
          accent: "#5E6AD2",
        },
      },
      backdropBlur: {
        os: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
