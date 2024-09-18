/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /*    Primary */
        "grayish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",

        /*  Neutral */
        "dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(235, 16%, 14%)",
        "mostly-dark-blue": "hsl(234, 17%, 12%)",
        "kinda-red": "hsl(350, 35%, 13%)",
      },
      fontWeight: {
        "fw-bold": 700,
      },
      screens: {
        "max-xm": { max: "310px" }, // Custom extra small breakpoint
      },
      gridTemplateColumns: {
        "fill-minmax": "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
      },
    },
  },
  plugins: [],
};
