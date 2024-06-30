import { ThemeTokenColors, ThemeWorkbenchColors } from './types/theme';

type Colors = {
	workbench: ThemeWorkbenchColors;
	tokens: ThemeTokenColors;
};

export const colors = {
	workbench: {
		bg: {
			300: '#2c2f3d',
			400: '#232631',
			500: '#1c1e27',
			600: '#181a22',
		},
		foreground: {
			400: '#d5d9f8',
			500: '#969ac3',
			600: '#7c80aa',
			700: '#323444',
		},
		border: '#00000000',
		accent: {
			400: '#88ffe3',
			500: '#4beec9',
			600: '#5ad1b6',
			700: '#4fb9a1',
		},
	},
	tokens: {
		COMMENT: '#5d6090',
		VARIABLE: '#c9cdf8',
		VARIABLE_PROPERTY: '#e4f0fb',
		VARIABLE_CONSTANT: '#add7ff',
		FUNCTION: '#96bbff',
		FUNCTION_PARAMETER: '#c9cdf8',
		KEYWORD: '#7685c8',
		STORAGE: '#7685c8',
		PRIMITIVE: '#3cd6d0',
		CLASS: '#3cd6d0',
		TAG: '#4beec9',
		PUNCTUATION_TAG: '#fff',
		ATTRIBUTE: '#7685c8',
		ID: '#96bbff',
		STRING: '#4beec9',
		REGEXP: '#5ddabf',
		CONSTANT: '#4beec9',
		NUMBER: '#4beec9',
		TRUTHY: '#4beec9',
		FALSY: '#eb91aa',
		OPERATOR: '#add7ff',
		CSS_PROPERTY_NAME: '#eb91aa',
		VARIABLE_READWRITE_ALIAS: '#add7ff',
		JSON_KEY: '#7685c8',
	},
} satisfies Colors;
