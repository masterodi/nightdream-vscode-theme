import { ThemeTokenColors, ThemeWorkbenchColors } from './types/theme';

type Colors = {
	workbench: ThemeWorkbenchColors;
	tokens: ThemeTokenColors;
};

export const colors = {
	workbench: {
		bg: {
			300: '#3a3d52',
			400: '#292b39',
			500: '#1f1f2c',
			600: '#181b24',
		},
		foreground: {
			400: '#d5d9f8',
			500: '#969ac3',
			600: '#7c80aa',
			700: '#323444',
		},
		border: '#00000000',
		accent: {
			400: '#c1e0ff',
			500: '#add7ff',
			600: '#7c9ab8',
			700: '#627b92',
		},
	},
	tokens: {
		COMMENT: '#5d6090',
		VARIABLE: '#c9cdf8',
		VARIABLE_PROPERTY: '#e4f0fb',
		VARIABLE_CONSTANT: '#add7ff',
		FUNCTION: '#84b1ff',
		FUNCTION_PARAMETER: '#c3c7f3',
		KEYWORD: '#7aaecf',
		STORAGE: '#77aead',
		PRIMITIVE: '#8ff3e1',
		CLASS: '#add7ff',
		TAG: '#67eed0',
		PUNCTUATION_TAG: '#fff',
		ATTRIBUTE: '#9eace7',
		ID: '#b2f8ff',
		STRING: '#67eed0',
		REGEXP: '#5ddabf',
		CONSTANT: '#67eed0',
		NUMBER: '#67eed0',
		TRUTHY: '#37d3bc',
		FALSY: '#eb91aa',
		OPERATOR: '#add7ff',
		CSS_PROPERTY_NAME: '#eb91aa',
		VARIABLE_READWRITE_ALIAS: '#add7ff',
		JSON_KEY: '#add7ff',
	},
} satisfies Colors;
