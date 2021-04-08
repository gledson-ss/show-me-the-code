interface typeColor {
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
    blue: "#03BFFE",
    gray: " #f2f2f2",
    darkGray: "#ddd",
    black: "#151515",
    white: "#ffff",
  },
};
export type ThemeType = typeof theme;

export { theme };

export default ThemeType;
