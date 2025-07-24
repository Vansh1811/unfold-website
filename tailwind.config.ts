import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Your exact brand colors
        navy: {
          50: '#f0f4f8',
          100: '#d9e8f4',
          200: '#b3d1e8',
          300: '#8cbadc',
          400: '#66a3d0',
          500: '#4085c4',
          600: '#0f1b2b',
          700: '#0d1623',
          800: '#0a111a',
          900: '#071012',
          DEFAULT: '#0f1b2b'
        },
        gold: {
          50: '#fef9f3',
          100: '#fdf0e3',
          200: '#fbe1c7',
          300: '#f7cca0',
          400: '#f2b479',
          500: '#ed9c52',
          600: '#c59364',
          700: '#a67a52',
          800: '#876141',
          900: '#6d4e34',
          DEFAULT: '#c59364'
        },
        white: {
          DEFAULT: '#ffffff'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        'heading': ['Nexa Bold', 'Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
