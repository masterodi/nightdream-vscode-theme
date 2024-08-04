import { ThemeTokenColors, ThemeWorkbenchColors } from "./types/theme";

type Colors = {
  workbench: ThemeWorkbenchColors;
  tokens: ThemeTokenColors;
};

export const colors = {
  workbench: {
    bg: {
      300: "#3d4159",
      400: "#32364a",
      500: "#282a39",
      600: "#1e1f2a",
    },
    foreground: {
      400: "#d8dfff",
      500: "#bbc1dc",
      600: "#8c94b6",
      700: "#636980",
    },
    border: "#00000000",
    accent: {
      400: "#b6b8ff",
      500: "#a2beff",
      600: "#9495cf",
      700: "#8686bb",
    },
  },
  tokens: {
    COMMENT: "#5d6090",
    VARIABLE: "#e4f0fb",
    VARIABLE_PROPERTY: "#e4f0fb",
    VARIABLE_CONSTANT: "#b2daff",
    FUNCTION: "#8ba9eb",
    KEYWORD: "#a9f7d6",
    STORAGE: "#9fa7ca",
    PRIMITIVE: "#5ebacd",
    CLASS: "#5ebacd",
    TAG: "#4beec9",
    ATTRIBUTE: "#9fa7ca",
    ID: "#b2daff",
    STRING: "#5de4c7",
    REGEXP: "#5ddabf",
    CONSTANT: "#5de4c7",
    NUMBER: "#5de4c7",
    TRUTHY: "#5de4c7",
    FALSY: "#eb91aa",
    PUNCTUATION: "#b2daff",
    CSS_PROPERTY_NAME: "#eb91aa",
    VARIABLE_READWRITE_ALIAS: "#e4f0fb",
    JSON_KEY: "#e4f0fb",
  },
} satisfies Colors;
