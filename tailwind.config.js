/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      blur: {
        'right': '8px',
      },
      height: {
        100: "25rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        192: "48rem",
        200: "50rem",
      },
      width: {
        100: "25rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        192: "48rem",
        200: "50rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".blur-right": {
          filter: "blur(0px)",
          "-webkit-mask-image":
            "linear-gradient(to left, transparent 0%, white 100%)",
            opacity: 0.95
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
