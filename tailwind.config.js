/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  safelist: ["animate-flip-down", "animate-flip-down-forNum"],
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

      keyframes: {
        "flip-down": {
          0: {
            transform: "rotateX(0deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },

          "100%": {
            transform: "rotateX(0deg)",
          },
        },

        "flip-down-forNum": {
          0: {
            transform: "rotateX(-45deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },

          "100%": {
            transform: "rotateX(0deg)",
          },
        },
      },

      animation: {
        "flip-down": "flip-down 300ms ease-in-out",
        "flip-down-forNum": "flip-down-forNum 400ms ease-in-out",
      },
    },
  },
  plugins: [require("./dist/plugins/openVariant")],
};
