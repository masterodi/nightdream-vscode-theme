import { TextmateColors } from '../types/textmate-colors';
import { WorkbenchColors } from '../types/workbench-colors';
import Color from './Color';

export type WorkbenchColorsScheme = {
	background: Color;
	foreground: Color;
	accent: Color;
	border: string;
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

export type TokenColorsScheme = {
	COMMENT: string;
	VARIABLE: string;
	VARIABLE_PROPERTY: string;
	VARIABLE_CONSTANT?: string;
	FUNCTION: string;
	FUNCTION_PARAMETER?: string;
	KEYWORD: string;
	STORAGE?: string;
	PRIMITIVE?: string;
	CLASS: string;
	TAG: string;
	PUNCTUATION_TAG?: string;
	ATTRIBUTE: string;
	ID?: string;
	STRING: string;
	REGEXP?: string;
	CONSTANT: string;
	NUMBER?: string;
	TRUTHY?: string;
	FALSY?: string;
	PUNCTUATION: string;
	PROPERTY_NAME: string;
	VARIABLE_READWRITE_ALIAS?: string;
};

export type VSCTheme = {
	name: string;
	colors: WorkbenchColors;
	tokenColors: TextmateColors;
	semanticHighlighting: boolean;
};
