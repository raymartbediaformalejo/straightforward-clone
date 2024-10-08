/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gray: "hsl(var(--gray))",
        "gray-600": "hsl(var(--gray) / 0.251)",
        "gray-650": "hsl(var(--gray) / 0.5 )",
        "gray-700": "hsl(var(--gray) / 0.502 )",
        "light-gray": "hsl(var(--light-gray))",
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
      letterSpacing: {
        widest: "0.2em",
      },
      objectPosition: {
        "center-center": "cneter center",
      },
      backgroundPosition: {
        "center-center": "50% 50%",
      },
      transitionDuration: {
        350: "350ms",
        400: "400ms",
        450: "450ms",
        8000: "8000ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        "in-card": "cubic-bezier(0.645, 0.045, 0.355, 1)",
        "zoom-in-bg": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      transformOrigin: {
        "left-center": "left center",
      },
      height: {
        "header-height": "59px",
        "100%-header-height": "calc(100% - 59px)",
      },
      width: {
        "sheet-width": "calc(100vw - 65px)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "divider-bottom": "0 -1px #d0d0d0 inset",
        "divider-top": "0 -1px #d0d0d0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
