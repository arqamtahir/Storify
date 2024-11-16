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
        base: {
          DEFAULT: '#074b6c',
        },
        primary: {
          DEFAULT: '#fffcd6b2',
        },
      },
      dropShadow: {
        base: [
          "0 0px 20px #074b6c6e",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ],
        primary: [
          
        ]
      }
    },
  },
  plugins: [],
};
export default config;
