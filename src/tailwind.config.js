module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        "menu-purple": "#EFEDFF",
        activePurple: "#5A48E0",
        graydivider: "#D8D8D8",
      },
      spacing: {
        26: "6.5rem",
        60: "15rem",
        92: "23rem",
        126: "31.5rem",
      },
      height: {
        px: "1px",
        18: "4.5rem",
        36: "9rem",
        content: "calc(100% - 6.5rem)",
      },
    },
  },
};
