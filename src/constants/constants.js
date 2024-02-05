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

    materialColor: "#4e4d4f",
    materialColorAlfa: "rgba(78, 77, 79, 0.1)",

    priceColor: "#609729",
    unitColor: "#29567f",

    white: "#ffffff",
    black: "#000000",
    backgroundWhite: "#ffffff",
    backgroundBlack: "#000000",
    backgroundGrey: "#757373",
    primary: "#52A29D",
    muted: "#424242",
    red: "#AB0E0F",

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
  },
  radii: {
    none: "0",
    normal: "4px",
    round: "50%",
  },
});
