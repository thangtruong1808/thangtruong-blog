import defaultTheme from "tailwindcss/defaultTheme";

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        line: token("line"),
        fg: token("fg"),
        muted: token("muted"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
        "accent-soft": token("accent-soft"),
        success: token("success"),
        danger: token("danger"),
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: defaultTheme.fontFamily.mono,
      },
      fontSize: {
        display: ["clamp(2.5rem, 6vw, 4.25rem)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        h1: ["clamp(2rem, 4.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h2: ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h3: ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.0625rem, 1.6vw, 1.25rem)", { lineHeight: "1.65" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
      },
      spacing: {
        section: "var(--space-section)",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      keyframes: {
        "page-in": {
          from: { opacity: "0.4", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "none" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "page-in": "page-in 280ms cubic-bezier(0.2, 0.7, 0.2, 1) backwards",
        "fade-up": "fade-up 320ms cubic-bezier(0.2, 0.7, 0.2, 1) backwards",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};
