// Документація як робити тему
// https://theme-ui.com/theme-spec

// styled-system працює як tailwind
// https://github.com/styled-system/styled-system

export const theme = Object.freeze({
  colors: {
    mainLevelColor: "#125b56",
    maitLevelColorAlfa: "rgba(18, 91, 86, 0.1)",

    firstLevelColor: "#567637",
    firstLevelColorAlfa: "rgba(86, 118, 55, 0.1)",

    secondLevelColor: "#29567f",
    secondLevelColorAlfa: "rgba(41, 86, 127, 0.1)",

    thirdLevelColor: "#44297f",
    thirdLevelColorAlfa: "rgba(68, 41, 127, 0.1)",

    fourLevelColor: "#78297F",
    fiveLevelColor: "#7F2929",
    // fourLevelColorAlfa: "rgba(68, 41, 127, 0.1)",

    materialColor: "#4e4d4f",
    materialColorAlfa: "rgba(78, 77, 79, 0.1)",

    priceColor: "#609729",
    unitColor: "#29567f",

    white: "#ffffff",
    black: "#000000",
    grey: "#9c9a9a",
    backgroundWhite: "#ffffff",
    backgroundBlack: "#000000",
    backgroundGrey: "#EDEDED",
    backgroundSticker: "#fcf6c0",
    backgroundMain: "#d5e8e6",

    primary: "#3b7572",
    hover: "#52A29D",
    atention: "#F6C23E",
    accent: "#10af10",
    accentHover: "#4fe04f",
    muted: "#424242",
    red: "#AB0E0F",
    green: "#609729",
    orange: "#cc5506",
    invalid: "#E74A3B",
    valid: "#3CBC81",

    textBlackColor: "#000000",
    textWhiteColor: "#ffffff",
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "24px",
    xl: "32px",
    xxl: "64px",
  },
  borders: {
    none: "none",
    normal: "1px solid",
    bold: "2px solid",
    hevy: "4px solid",
  },
  radii: {
    none: "0",
    normal: "4px",
    round: "50%",
  },
  shadows: {
    shadow:
      "0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)",
    full: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    inside: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;",
  },
});
