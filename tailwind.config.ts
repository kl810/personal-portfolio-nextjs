import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'black-rgba' : 'rgba(31, 41, 55, 0.9)',
        'gray-rgba' : 'rgba(243, 244, 246, 0.9)',
      }
    }
    },
  plugins: [],
} satisfies Config;
