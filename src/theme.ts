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
			400: '#d5dff8',
			500: '#a7bef8',
			600: '#5b5e7c',
			700: '#323444',
		},
	},
	tokens: {
		COMMENT: '#5d6090',
		VARIABLE: '#ced3ff',
		VARIABLE_PROPERTY: '#e4f0fb',
		VARIABLE_CONSTANT: '#badcff',
		FUNCTION: '#94b7ff',
		FUNCTION_PARAMETER: '#c3c7f3',
		KEYWORD: '#8b88ff',
		STORAGE: '#9ea2e1',
		PRIMITIVE: '#8ff3e1',
		CLASS: '#8ff3ec',
		TAG: '#67eed0',
		PUNCTUATION_TAG: '#fff',
		ATTRIBUTE: '#9ea2e1',
		ID: '#b2f8ff',
		STRING: '#67eed0',
		REGEXP: '#5ddabf',
		CONSTANT: '#67eed0',
		NUMBER: '#67eed0',
		TRUTHY: '#37d3bc',
		FALSY: '#eb91aa',
		OPERATOR: '#9ea2e1',
		CSS_PROPERTY_NAME: '#eb91aa',
		VARIABLE_READWRITE_ALIAS: '#add7ff',
		JSON_KEY: '#acb0e6',
	},
} satisfies Colors;
