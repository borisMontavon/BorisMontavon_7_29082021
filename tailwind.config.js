module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
      silver: "var(--silver)"
    },
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
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
