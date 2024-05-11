import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green01: "#49CB00",
        green02: "#02260B",
        gray01: "#B3B3B3",
        gray02: "#2E3230",
        gray03: "#BABABA",
        white01: "#B8B9B9",
        white02: "#F5F5F5",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
export default config;
