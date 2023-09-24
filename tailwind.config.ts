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
        "primary-black": "#1F2023",
        "secondary-black": "#F9F9F926",
        "primary-gray": "rgba(249, 249, 249, 0.1)",
        "primary-white": "rgba(249, 249, 249, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
