import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: "var(--font-jost)",
      },
      colors: {
        backgroud: {
          DEFAULT: "hsl(var(--background))",
          light: "hsl(var(--background-light))",
        },
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
      },
    },
  },
  plugins: [],
};
export default config;
