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
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: '#E9F8F7', // Slightly darker minty background
        foreground: '#3A3A4C', // Darker default text
        primary: {
          DEFAULT: '#b293ba', // Slightly deeper Lavender Pink
          50: '#F9F7FA',
          100: '#F3EDF7',
          200: '#E8DBEF',
          300: '#DCC3E1',
          400: '#D1B6D8',
          500: '#BC9FC5',
          600: '#A987B2',
          700: '#946E9E',
          800: '#7E5888',
          900: '#694473',
        },
        secondary: {
          DEFAULT: '#C98894', // Darker Dusty Rose
          50: '#FFF6F7',
          100: '#FEEAEC',
          200: '#F8D1D6',
          300: '#F0B2B8',
          400: '#E39BA2',
          500: '#C98894',
          600: '#B4707C',
          700: '#9A5A66',
          800: '#814551',
          900: '#67313C',
        },
        accent: {
          DEFAULT: '#F59E8A', // Darker Soft Coral
          50: '#FFF6F4',
          100: '#FFE8E4',
          200: '#FFD0C7',
          300: '#FFB9AD',
          400: '#F59E8A',
          500: '#E58573',
          600: '#D46B5C',
          700: '#C15346',
          800: '#A63D31',
          900: '#8C271C',
        },
        dark: {
          DEFAULT: '#3A3A4C', // Darkened text main
          50: '#F5F5F8',
          100: '#EAEAEE',
          200: '#D5D5DC',
          300: '#B0B0BA',
          400: '#8B8B99',
          500: '#67677B',
          600: '#515164',
          700: '#3A3A4C',
          800: '#262634',
          900: '#12121C',
        },
        textmain: {
          DEFAULT: '#3A3A4C', // Darker main text
        },
        textsoft: {
          DEFAULT: '#676F7D', // Darker soft text
        },
        cardbg: {
          DEFAULT: '#F3EDF7', // Slightly darker Lavender
        },
        border: {
          DEFAULT: '#C9D4DA', // Darker border
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
