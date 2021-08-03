module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          darkest: `hsl(183, 100%, 15%)`,
          text: `hsl(180, 25%, 32%)`,
          "text-light": `hsl(186, 14%, 43%)`,
          "text-lightest": `hsl(184, 19%, 68%)`,
          "text-gray": `hsl(183, 15%, 56%)`,

          DEFAULT: `hsl(172, 67%, 45%)`,

          disabled: `hsl(183, 78%, 24%)`,
          active: `hsl(173, 61%, 77%)`,

          light: `hsl(185, 41%, 84%)`,
          lightest: `hsl(189, 41%, 97%)`,
        },
        red: `hsl(13, 70%, 61%)`,

        boxShadow: {
          DEFAULT: `0px 32px 43px rgba(79, 166, 175, 0.200735)`,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
