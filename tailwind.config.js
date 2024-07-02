/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animate: {
          "0%": {
            transform: "scale(0) translateY(0) rotate(0)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1) translateY(-90) rotate(360)",
            opacity: 0,
          },
        },
      },
      animation: {
        "linear-1": "animate 2s linear infinite",
        "linear-2": "animate 4s linear infinite",
        "linear-3": "animate 6s linear infinite",
        "linear-4": "animate 8s linear infinite",
        "linear-5": "animate 10s linear infinite",
        "linear-6": "animate 12s linear infinite",
        "linear-7": "animate 14s linear infinite",
        "linear-8": "animate 16s linear infinite",
        "linear-9": "animate 18s linear infinite",
        "linear-10": "animate 20s linear infinite",
      },
      backgroundColor: {
        linearWallpaper:
          "linear-gradient(90deg, rgba(2, 0, 0.6, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
      },
      blur: {
        right: "8px",
        bottom: "8px",
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
          opacity: 0.95,
        },
        ".blur-bottom": {
          filter: "blur(0px)",
          "-webkit-mask-image":
            "linear-gradient(to top, transparent 0%, white 70%)",
          opacity: 0.95,
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
