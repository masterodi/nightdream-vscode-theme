import { ThemeTokenColors, ThemeWorkbenchColors } from "./types/theme";

type Colors = {
  workbench: ThemeWorkbenchColors;
  tokens: ThemeTokenColors;
};

export const colors = {
  workbench: {
    bg: {
      300: "#2c2f3d",
      400: "#232631",
      500: "#1c1e27",
      600: "#181a22",
    },
    foreground: {
      400: "#d5d9f8",
      500: "#969ac3",
      600: "#7c80aa",
      700: "#323444",
    },
    border: "#00000000",
    accent: {
      400: "#88ffe3",
      500: "#4beec9",
      600: "#5ad1b6",
      700: "#4fb9a1",
    },
  },
  tokens: {
    COMMENT: "#5d6090",
    VARIABLE: "#e4f0fb",
    VARIABLE_PROPERTY: "#e4f0fb",
    VARIABLE_CONSTANT: "#b7e4ff",
    FUNCTION: "#96bbff",
    KEYWORD: "#7c8cd2",
    STORAGE: "#7c8cd2",
    PRIMITIVE: "#22a2bb",
    CLASS: "#22a2bb",
    TAG: "#4beec9",
    ATTRIBUTE: "#7685c8",
    ID: "#96bbff",
    STRING: "#5de4c7",
    REGEXP: "#5ddabf",
    CONSTANT: "#5de4c7",
    NUMBER: "#5de4c7",
    TRUTHY: "#5de4c7",
    FALSY: "#eb91aa",
    PUNCTUATION: "#a6accd",
    CSS_PROPERTY_NAME: "#eb91aa",
    VARIABLE_READWRITE_ALIAS: "#e4f0fb",
    JSON_KEY: "#e4f0fb",
  },
} satisfies Colors;
