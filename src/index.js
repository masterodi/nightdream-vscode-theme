import { saveTheme, Theme } from 'painless-vsctheming';

const Nightdream = Theme.fromBases('Nightdream', {
	background: '#20232f',
	foreground: '#adb4d6',
	accent: '#83e1c8',
	border: '#00000000',
	tokens: {
		COMMENT: '#5d6090',
		VARIABLE: '#e4f0fb',
		VARIABLE_PROPERTY: '#e4f0fb',
		VARIABLE_CONSTANT: '#e4f0fb',
		VARIABLE_READWRITE_ALIAS: '#a6accdCC',
		FUNCTION: '#add7ff',
		KEYWORD: '#a2bbec',
		STORAGE: '#91b4d5',
		CLASS: '#a6accdCC',
		TAG: '#5de4c7',
		ATTRIBUTE: '#b5d6fb',
		ID: '#5de4c7',
		STRING: '#5de4c7',
		REGEXP: '#ff0000',
		CONSTANT: '#5de4c7',
		TRUTHY: '#5de4c7',
		FALSY: '#d0679d',
		PUNCTUATION: '#a6accd',
		PROPERTY_NAME: '#e4f0fb',
	},
});

const NightdreamMonokai = Theme.fromBases('Nightdream Monokai', {
	background: '#282a39',
	foreground: '#eaf2f1',
	accent: '#a99dec',
	border: '#00000000',
	tokens: {
		COMMENT: '#696D77',
		VARIABLE: '#eaf2f1',
		VARIABLE_PROPERTY: '#eaf2f1',
		VARIABLE_CONSTANT: '#a99dec',
		FUNCTION: '#bad761',
		FUNCTION_PARAMETER: '#ffaf7f',
		KEYWORD: '#FF657A',
		STORAGE: '#9CD1BB',
		CLASS: '#9cb4d1',
		TAG: '#FF657A',
		ATTRIBUTE: '#9CD1BB',
		ID: '#9cb4d1',
		STRING: '#FFD76D',
		CONSTANT: '#a99dec',
		PUNCTUATION: '#888D94',
		TRUTHY: '#9CD1BB',
		FALSY: '#FF657A',
		PROPERTY_NAME: '#EAF2F1',
	},
});

saveTheme(Nightdream);
saveTheme(NightdreamMonokai);
