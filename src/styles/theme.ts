interface typeColor {
  orange: string;
  blue: string;
  gray: string;
  darkGray: string;
  black: string;
  white: string;
}

interface colorTheme {
  colors: typeColor;
}

const theme: colorTheme = {
  colors: {
    orange: "#FC7C1C",
    blue: "#03BFFE",
    gray: "#9e9ea7",
    darkGray: "#eeeeee",
    black: "#151515",
    white: "#FFFFFF",
  },
};
export type ThemeType = typeof theme;

export { theme };

export default ThemeType;
