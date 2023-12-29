/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sriracha: ["Sriracha", "sans-serif"],
      },
      backgroundImage: {
        vessel2: "url(/vessel-gen2.jpeg)",
        gd: "url(/Gd1.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
