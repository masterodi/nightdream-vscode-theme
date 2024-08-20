import Theme from './utils/Theme';

export const Nightdream = Theme.fromBases('Nightdream', {
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
