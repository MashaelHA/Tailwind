/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // transparent: "transparent",
      // white: "#ffffff",
      Natural: {
        50: "#F3F4F6",
        100: "#EFEFEF",
        200: "#E5E4E4",
        300: "#CACACA",
        400: "#A8A8A8",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#262626",
      },
      Primary: {
        50: "#F5F0FF",
        300: "#ECE2FF",
        500: "#D2BAFF",
        700: "#9E6CFF", // #6B3CC7   #9E6CFF
        900: "#6B3CC7",
      },
      Success: {
        50: "#ECF6F3",
        300: "#9BE8D2",
        500: "#08BC7E",
        700: "#01764E",
        900: "#014832",
      },
      Warning: {
        50: "#FFFBEB",
        300: "#FDE895",
        500: "#FCD34D",
        700: "#F59E0B",
        900: "#B97604",
      },
      Error: {
        50: "#FEF1F1",
        300: "#FCBDBD",
        500: "#EF4444",
        700: "#B91C1C",
        900: "#7F1D1D",
      },
      Shades: {
        0: "#FFFFFF",
        100: "#000000",
        yellow: "#FFCD2E",
        red: "#FF8389",
      },
    },
  },
  plugins: [],
}

