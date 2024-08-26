import { saveTheme, Theme } from 'painless-vsctheming';

const Nightdream = Theme.fromBases('Nightdream', {
	background: '#1f212b',
	foreground: '#bbc1dc',
	accent: '#5de4c7',
	border: '#00000000',
	tokens: {
		COMMENT: '#5d6090',
		VARIABLE: '#e4f0fb',
		VARIABLE_PROPERTY: '#e4f0fb',
		VARIABLE_CONSTANT: '#c2e4ff',
		FUNCTION: '#bcd3ff',
		KEYWORD: '#89cbde',
		STORAGE: '#7a95bc',
		CLASS: '#909caa',
		TAG: '#4beec9',
		ATTRIBUTE: '#7a95bc',
		ID: '#b2f1ff',
		STRING: '#5de4c7',
		REGEXP: '#5ddabf',
		CONSTANT: '#5de4c7',
		TRUTHY: '#5de4c7',
		FALSY: '#eb91aa',
		PUNCTUATION: '#a6b6cf',
		PROPERTY_NAME: '#e2e4ec',
	},
});

const NightdreamMonoguai = Theme.fromBases('Nightdream Monoguai', {
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
saveTheme(NightdreamMonoguai);
