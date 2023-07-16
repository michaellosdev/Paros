/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(../public/hero.webp)",
        "hero-mobile": "url(../public/hero-mobile.webp)",
      },
      colors: {
        primary: "#00AEEF",
        dark: "#0066B3",
        darker: "#024F90",

        "gray-light": "#666666",
        "gray-lighter": "#999999",
        "gray-lightest": "#CCCCCC",
      },
      fontFamily: {
        main: ["var(--montserrat)"],
        cursive: ["var(--kaushan-script)"],
      },
      fontSize: {
        display: [
          "96px",
          {
            lineHeight: "115px",
            letterSpacing: "2px",
            fontWeight: "700",
          },
        ],
        h1: [
          "72px",
          {
            lineHeight: "80px",
            letterSpacing: "-2px",
            fontWeight: "800",
          },
        ],
        h2: [
          "56px",
          {
            lineHeight: "64px",
            letterSpacing: "-1px",
            fontWeight: "800",
          },
        ],
        h3: [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "800",
          },
        ],
        h4: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "700",
            letterSpacing: "1px",
          },
        ],
        h5: [
          "16px",
          {
            textTransform: "uppercase",
            lineHeight: "32px",
            fontWeight: "400",
            letterSpacing: "3px",
          },
        ],
        label: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        labelSmall: [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        labelMedium: [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
        bodySmall: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        bodyLarge: [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
      },
      boxShadow: {
        elevation1: " 0px 2px 4px 0px rgba(0, 0, 0, 0.12)",
        elevation2: " 0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
        elevation3: " 0px 6px 10px 0px rgba(0, 0, 0, 0.25)",
        elevation4: " 0px 8px 12px 0px rgba(0, 0, 0, 0.30)",
      },
    },
  },
  plugins: [],
};
