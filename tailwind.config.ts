import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#E4CBE8', // Muted Lavender Pink
        },
        secondary: {
          DEFAULT: '#DB9EAA', // Dusty Rose
        },
        cta: {
          DEFAULT: '#FFBBA4', // Soft Coral
        },
        textmain: {
          DEFAULT: '#46465A', // Slate Gray
        },
        textsoft: {
          DEFAULT: '#788291', // Cool Gray
        },
        cardbg: {
          DEFAULT: '#F7F2FF', // Light Lavender
        },
        border: {
          DEFAULT: '#DCE6EB', // Soft Silver
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
