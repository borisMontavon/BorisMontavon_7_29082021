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
        hover: "var(--fireOpal-border-hover)"
      },
      azure: {
        DEFAULT: "var(--azure)",
        hover: "var(--azure-border-hover)"
      },
      mediumGreen: {
        DEFAULT: "var(--mediumGreen)",
        hover: "var(--mediumGreen-border-hover)"
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
        "inter": ["Inter", "sans-serif"]
      },
      gridTemplateRows: {
        "auto": "auto"
      }
    },
    // 'sm': '640px',
    // 'md': '768px',
    // 'lg': '1024px',
    // 'xl': '1280px',
    // '2xl': '1536px',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
