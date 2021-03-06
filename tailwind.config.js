module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      white: {
        DEFAULT: "var(--white)",
        hover: "var(--white-o)"
      },
      // For title
      indianRed: {
        DEFAULT: "var(--indianRed)",
        hover: "var(--indianRed-hover)"
      },
      // For buttons
      fireOpal: {
        DEFAULT: "var(--fireOpal)",
        disabled: "var(--fireOpal-disabled-color)"
      },
      azure: {
        DEFAULT: "var(--azure)",
        disabled: "var(--azure-disabled-color)"
      },
      mediumGreen: {
        DEFAULT: "var(--mediumGreen)",
        disabled: "var(--mediumGreen-disabled-color)"
      },
      platinum: "var(--platinum)",
      gainsboro: "var(--gainsboro)",
      silver: "var(--silver)",

      // Dark mode
      darkWhite: "var(--dark-white)",
      black: "var(--black)",
      richBlack: "var(--rich-black)",
      eerieBlack: "var(--eerie-black)",
      jet: "var(--jet)",
      onyx: "var(--onyx)"
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      gridTemplateRows: {
        auto: "auto"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
