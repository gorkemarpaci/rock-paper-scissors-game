/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient1: "hsl(214, 47%, 23%)",
        gradient2: "hsl(237, 49%, 15%)",
        headerOutline: "hsl(217, 16%, 45%)",
        scoreText: "hsl(229, 64%, 46%)",
        darkText: "hsl(229, 25%, 31%)",
        paper1: "hsl(230, 89%, 62%)",
        paper2: "hsl(230, 89%, 65%)",
        scissors1: "hsl(39, 89%, 49%)",
        scissors2: "hsl(40, 84%, 53%)",
        rock1: "hsl(349, 71%, 52%)",
        rock2: "hsl(349, 70%, 56%)",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
      },
      minWidth: {
        scoreBoardWidth: "20%",
        selectedItemWidth: "188px",
      },
      minHeight: {
        selectedItemHeight: "222px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        buttonTopShadow: "inset 0 6px 1px rgba(200, 200, 200, 0.9)",
        buttonBottomShadow: "inset 0 -4px 1px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
