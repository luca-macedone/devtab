/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2c7359",
          dark: "#174031"
        },
        secondary: {
          light: "#d2eae4",
          dark: "#9bb5bf"
        },
        light: {
          light: "#f2f2f2",
          dark: "#d0d3d8"
        },
        dark: {
          light: "#262626",
          dark: "#0d0d0d"
        },
        muted: {
          light: "#737373",
          dark: "#404040"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

