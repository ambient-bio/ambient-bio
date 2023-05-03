/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verylightblue: "#f6f9fc", 
        darkblue: "#0b2540"
      },
      fontFamily: {
        sans: ["questrial", "system-ui", "-apple-system"],
      },
    },

  },
  plugins: [],
}


