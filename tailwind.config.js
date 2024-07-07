/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-50": "#383850",
        "midnight-100": "#363648",
        "midnight-200": "#333344",
        "midnight-300": "#2E2E38",
        "midnight-400": "#2C2C36",
        "midnight-500": "#272733",
        "midnight-600": "#25252E",
        "midnight-700": "#23232C",
        "midnight-800": "#1E1E27",
        "midnight-900": "#121225",

        "pearl-50": "#FAFAFA",
        "pearl-100": "#F2F2F2",
        "pearl-200": "#EEEEEE",
        "pearl-300": "#E0E0E0",
        "pearl-400": "#DCDCDC",
        "pearl-500": "#CFCFCF",
        "pearl-600": "#C2C2C2",
        "pearl-700": "#B4B4B4",
        "pearl-800": "#A5A5A5",
        "pearl-900": "#8C8C8C",
      },
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
        "linear-3": "animate 5s linear infinite",
        "linear-4": "animate 8s linear infinite",
        "linear-5": "animate 11s linear infinite",
        "linear-6": "animate 13s linear infinite",
        "linear-7": "animate 15s linear infinite",
        "linear-8": "animate 19s linear infinite",
        "linear-9": "animate 21s linear infinite",
        "linear-10": "animate 23s linear infinite",
      },
      backgroundColor: {
        linearWallpaper:
          "linear-gradient(90deg, #1E1E27 0%, #2E2E2E 35%, #383850 100%)",
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
        ".blur-right-2": {
          filter: "blur(0px)",
          "-webkit-mask-image":
            "linear-gradient(225deg , transparent 0%, #121225 100%)",
        },
        ".blur-right-4": {
          filter: "blur(0px)",
          "-webkit-mask-image":
            "linear-gradient(240deg ,transparent 20%, #1f1fff22 30%, #000033 100%)",
        },
        ".blur-bottom": {
          filter: "blur(0px)",
          "-webkit-mask-image":
            "linear-gradient(to top, transparent 0%, white 70%)",
          opacity: 0.95,
        },
        ".blur-bottom-2": {
          filter: "blur(2px)",
          "-webkit-mask-image":
            "linear-gradient(to top, transparent 80%, white 100%)",
          opacity: 0.75,
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
