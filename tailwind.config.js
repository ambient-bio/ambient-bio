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
        blue: "#0249e5",
        darkblue: "#0b2540",
        green: "#13bcbc", 
      },
      fontFamily: {
        sans: ['Inter Variable', "system-ui", "-apple-system"],
      },
    },

  },
  plugins: [],
}


