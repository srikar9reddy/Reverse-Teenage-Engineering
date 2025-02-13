
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sampler: {
          body: "#8E9196",
          display: "#221F26",
          orange: "#F97316",
          button: {
            dark: "#222222",
            light: "#FFFFFF",
            gray: "#4A4A4A"
          }
        },
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
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "led-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "waveform": {
          "0%": { transform: "scaleY(0.8)" },
          "50%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(0.8)" },
        },
      },
      animation: {
        "led-blink": "led-blink 1s ease-in-out infinite",
        "waveform": "waveform 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
