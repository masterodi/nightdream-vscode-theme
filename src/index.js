import { saveTheme, Theme } from 'painless-vsctheming';

const Nightdream = Theme.fromBases('Nightdream', {
	background: '#222630',
	foreground: '#e6f0fa',
	accent: '#83e1c8',
	border: '#00000000',
	tokens: {
		COMMENT: '#5d6090',
		VARIABLE: '#e6f0fa',
		VARIABLE_PROPERTY: '#e6f0fa',
		VARIABLE_CONSTANT: '#e6f0fa',
		FUNCTION: '#a8eff0',
		KEYWORD: '#b5d6fb',
		STORAGE: '#b5d6fb',
		CLASS: '#a6accdCC',
		TAG: '#83e1c8',
		ATTRIBUTE: '#b5d6fb',
		ID: '#a8eff0',
		STRING: '#83e1c8',
		REGEXP: '#5ddabf',
		CONSTANT: '#83e1c8',
		TRUTHY: '#83e1c8',
		FALSY: '#eb91aa',
		PUNCTUATION: '#e6f0fa',
		PROPERTY_NAME: '#e6f0fa',
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
