/** @type {import('tailwindcss').Config} */
/* eslint-disable */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /gap-(1|1.5|2|3|3.5|4|5|6|7|8|9|10)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /gap-x-(1|1.5|2|3|3.5|4|5|6|7|8|9|10)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /gap-y-(1|1.5|2|3|3.5|4|5|6|7|8|9|10)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /items-(start|end|center|stretch)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /justify-(start|end|center|stretch|between|around|evenly)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /flex-col/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /flex-row/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /^basis(\w?)-/,
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  theme: {
    colors: {
      primary: "#0A1128",
      secondary: "#848484",
      transparent: "#00000000",
      dark: "#0C0F1E",
      gray: "#A5B1C3",
      lime: "#7ee787",
      blue: "#64B5F6",
      darkGray: "#242526",
      grayFont: "#8F8F8F",
      darkButton: "#0D0D0D",
      "bitcoin-orange": "#F7931A",
      background: "#F0F0F0",
      "bg-dark": "#181818",
      borderColor1: "#3E3E3E",
      borderColor2: "#2B2B2C",
      borderColor3: "#59595A",
      tColor1: "#9DA4AE",
      tColor2: "#E5E7Eb",
      tColor3: "#F9FAFB",
      tColor4: "#646464",
      tColor5: "#E3891C",
      tColor6: "#696969",
      tColor7: "#D7D5D5",
      bgColor1: "#333333",
      bgColor2: "#242526",
      bgColor3: "#0D0D0D",
      bgColor4: "#8C4100",
      bgColor5: "#F7931A",
      bgColor6: "#464646",
      bgColor7: "#303132",
      bgColor8: "#121212",
      bgColor9: "#090909",
      bgColor10: "#1C1C1C",
      bgColor11: "#2B2B2B",
      bgColor12: "#6C6C6C",
    },
    fontFamily: {},
    extend: {
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(50% 100% at 25% 3%, #13355BEE 0%, #0F203EEE 40%, #0A1128EE 100%)",
      },
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
        impact: ["Impact", "sans-serif"],
      },
      spacing: {
        "96px": "96px", // Custom top value
      },
      textStroke: {
        sm: "1px",
        md: "2px",
        lg: "3px",
      },
      textStrokeColor: {
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
});
