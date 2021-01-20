const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{html,ts}"],
    options: {
      safelist: [/to-/, /from-/, /via-/],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "blue-gray": colors.blueGray,
        "cool-gray": colors.coolGray,
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        "light-blue": colors.lightBlue,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
    },
  },
  variants: {
    gradientColorStops: [],
    backgroundImage: [],
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
