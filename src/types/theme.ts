import { TextmateColors } from "./textmate-colors";
import { WorkbenchColors } from "./workbench-colors";

export type VSCTheme = {
  name: string;
  colors: WorkbenchColors;
  tokenColors: TextmateColors;
  semanticHighlighting: boolean;
};

type ThemeWorkbenchColor = {
  300?: string;
  400: string;
  500: string;
  600: string;
  700?: string;
};

export type ThemeWorkbenchColors = {
  bg: ThemeWorkbenchColor;
  foreground: ThemeWorkbenchColor;
  border: string;
  accent: ThemeWorkbenchColor;
  terminal?: {
    ansiBlack: string;
    ansiBrightBlack: string;
    ansiBlue: string;
    ansiBrightBlue: string;
    ansiCyan: string;
    ansiBrightCyan: string;
    ansiGreen: string;
    ansiBrightGreen: string;
    ansiMagenta: string;
    ansiBrightMagenta: string;
    ansiRed: string;
    ansiBrightRed: string;
    ansiWhite: string;
    ansiBrightWhite: string;
    ansiYellow: string;
    ansiBrightYellow: string;
  };
  gitDecoration?: {
    addedResourceForeground: string;
    conflictingResourceForeground: string;
    deletedResourceForeground: string;
    ignoredResourceForeground: string;
    modifiedResourceForeground: string;
    renamedResourceForeground: string;
    stageDeletedResourceForeground: string;
    stageModifiedResourceForeground: string;
    submoduleResourceForeground: string;
    untrackedResourceForeground: string;
  };
};

export type ThemeTokenColors = {
  COMMENT: string;
  VARIABLE: string;
  VARIABLE_PROPERTY: string;
  VARIABLE_CONSTANT: string;
  FUNCTION: string;
  FUNCTION_PARAMETER?: string;
  KEYWORD: string;
  STORAGE: string;
  PRIMITIVE: string;
  CLASS: string;
  TAG: string;
  PUNCTUATION_TAG?: string;
  ATTRIBUTE: string;
  ID: string;
  STRING: string;
  REGEXP: string;
  CONSTANT: string;
  NUMBER: string;
  TRUTHY: string;
  FALSY: string;
  PUNCTUATION: string;
  CSS_PROPERTY_NAME: string;
  VARIABLE_READWRITE_ALIAS: string;
  JSON_KEY: string;
};
