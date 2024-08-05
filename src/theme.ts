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
    VARIABLE_CONSTANT: "#b2f1ff",
    FUNCTION: "#bcd3ff",
    KEYWORD: "#a9f7d6",
    STORAGE: "#919fd5",
    PRIMITIVE: "#8ba9eb",
    CLASS: "#8ba9eb",
    TAG: "#4beec9",
    ATTRIBUTE: "#919fd5",
    ID: "#b2f1ff",
    STRING: "#5de4c7",
    REGEXP: "#5ddabf",
    CONSTANT: "#5de4c7",
    NUMBER: "#5de4c7",
    TRUTHY: "#5de4c7",
    FALSY: "#eb91aa",
    PUNCTUATION: "#91b4d5",
    CSS_PROPERTY_NAME: "#eb91aa",
    VARIABLE_READWRITE_ALIAS: "#e4f0fb",
    JSON_KEY: "#e4f0fb",
  },
} satisfies Colors;
