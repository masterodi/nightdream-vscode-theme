import { TextmateColors } from './types/textmate-colors';
import { WorkbenchColors } from './types/workbench-colors';

const colors = {
	bg: {
		TRANSPARENT: '#00000000',
		BASE: '#24273a',
		LIGHT: '#2e314a',
		LIGHTEST: '#373b5a',
		DARK: '#1f2132',
	},
	foreground: {
		BASE: '#bfc4f8',
		LIGHT: '#d5d9f8',
		DIMMED: '#5b5e7c',
		DIMMED_EXTRA: '#323444',
	},
	border: {
		BASE: '#00000000',
	},
	accent: {
		BASE: '#b7bdf8',
		LIGHT: '#d5d9f8',
		DARK: '#5b5e7c',
		DARKEST: '#323444',
	},
	tokens: {
		COMMENT: '#5b5e7c',
		VARIABLE: '#ced3ff',
		VARIABLE_PROPERTY: '#ecf3ff',
		VARIABLE_CONSTANT: '',
		FUNCTION: '#abc3f5',
		FUNCTION_PARAMETER: '#c3c7f3',
		KEYWORD: '#cdb5ff',
		STORAGE: '#8da6cb',
		PRIMITIVE: '#91d7e3',
		CLASS: '#91d7e3',
		TAG: '#91d7e3',
		PUNCTUATION_TAG: '#6a9ea6',
		ATTRIBUTE: '#b7aeff',
		ID: '#98efff',
		STRING: '#a7f0bd',
		REGEXP: '#bfffd2',
		CONSTANT: '#a7f0bd',
		NUMBER: '#a7f0bd',
		FALSY: '#eb91aa',
		OPERATOR: '#91d7e3',
		CSS_PROPERTY_NAME: '#eb91aa',
		VARIABLE_READWRITE_ALIAS: '#ecf3ff',
		JSON_KEY: '#cdb5ff',
	},
};

type Theme = {
	name: string;
	colors: WorkbenchColors;
	tokenColors: TextmateColors;
	semanticHighlighting: boolean;
};

export const theme: Theme = {
	name: 'Nightdream',
	colors: {
		foreground: colors.foreground.BASE,
		focusBorder: colors.accent.BASE,
		'icon.foreground': colors.accent.BASE,
		'badge.background': colors.accent.BASE,
		'badge.foreground': colors.accent.DARKEST,
		'input.background': colors.bg.BASE,
		'input.foreground': colors.foreground.LIGHT,

		'activityBar.activeBackground': colors.bg.TRANSPARENT,
		'activityBar.activeBorder': colors.bg.TRANSPARENT,
		'activityBar.activeFocusBorder': colors.accent.BASE,
		'activityBar.background': colors.bg.DARK,
		'activityBar.border': colors.border.BASE,
		'activityBar.foreground': colors.foreground.BASE,
		'activityBar.inactiveForeground': colors.foreground.DIMMED,
		'activityBarBadge.background': colors.accent.BASE,
		'activityBarBadge.foreground': colors.accent.DARKEST,

		'sideBar.background': colors.bg.DARK,
		'sideBarSectionHeader.background': colors.bg.DARK,
		'list.activeSelectionBackground': colors.bg.LIGHT,
		'list.hoverBackground': colors.bg.LIGHTEST,
		'list.inactiveSelectionBackground': colors.bg.LIGHT,

		'statusBar.background': colors.bg.DARK,
		'statusBar.foreground': colors.foreground.BASE,
		'statusBar.noFolderBackground': colors.bg.BASE,
		'statusBar.debuggingBackground': colors.bg.LIGHT,

		'editor.background': colors.bg.BASE,
		'editor.foreground': colors.foreground.BASE,
		'editor.lineHighlightBackground': colors.bg.LIGHT,
		'editorLineNumber.foreground': colors.foreground.DIMMED,
		'editorLineNumber.activeForeground': colors.foreground.LIGHT,
		'editorLineNumber.dimmedForeground': colors.foreground.DIMMED_EXTRA,
		'editor.selectionBackground': colors.bg.LIGHT,

		'editorWidget.background': colors.bg.DARK,
		'editorSuggestWidget.highlightForeground': colors.accent.BASE,
		'editorSuggestWidget.focusHighlightForeground': colors.accent.LIGHT,

		'titleBar.activeBackground': colors.bg.DARK,
		'titleBar.inactiveBackground': colors.bg.DARK,
		'titleBar.activeForeground': colors.foreground.BASE,

		'menu.background': colors.bg.DARK,
		'menu.foreground': colors.foreground.BASE,
		'menu.separatorBackground': colors.border.BASE,
		'menu.selectionForeground': colors.foreground.LIGHT,
		'menu.selectionBackground': colors.bg.LIGHT,
		'menubar.selectionBackground': colors.bg.LIGHT,
		'menubar.selectionForeground': colors.foreground.LIGHT,

		'editorGroupHeader.tabsBackground': colors.bg.DARK,

		'tab.activeBackground': colors.bg.LIGHT,
		'tab.inactiveBackground': colors.bg.DARK,

		'breadcrumb.background': colors.bg.DARK,

		'panel.background': colors.bg.DARK,
		'panelTitle.activeForeground': colors.foreground.BASE,
		'panel.border': colors.border.BASE,

		'terminal.ansiBlack': '#1e2030',
		'terminal.ansiBlue': '#8aadf4',
		'terminal.ansiBrightBlack': '#5b6078',
		'terminal.ansiBrightBlue': '#8aadf4',
		'terminal.ansiBrightCyan': '#91d7e3',
		'terminal.ansiBrightGreen': '#a6da95',
		'terminal.ansiBrightMagenta': '#c6a0f6',
		'terminal.ansiBrightRed': '#ed8796',
		'terminal.ansiBrightWhite': '#cad3f5',
		'terminal.ansiBrightYellow': '#eed49f',
		'terminal.ansiCyan': '#91d7e3',
		'terminal.ansiGreen': '#a6da95',
		'terminal.ansiMagenta': '#c6a0f6',
		'terminal.ansiRed': '#ed8796',
		'terminal.ansiWhite': '#cad3f5',
		'terminal.ansiYellow': '#eed49f',

		'gitDecoration.addedResourceForeground': '#a6da95',
		'gitDecoration.conflictingResourceForeground': '#eed49f',
		'gitDecoration.deletedResourceForeground': '#ed8796',
		'gitDecoration.ignoredResourceForeground': '#6e738d',
		'gitDecoration.modifiedResourceForeground': '#91d7e3',
		'gitDecoration.renamedResourceForeground': '#8bd5ca',
		'gitDecoration.stageDeletedResourceForeground': '#ed8796',
		'gitDecoration.stageModifiedResourceForeground': '#eed49f',
		'gitDecoration.submoduleResourceForeground': '#91d7e3',
		'gitDecoration.untrackedResourceForeground': '#a6da95',
	},
	tokenColors: [
		{
			name: 'Comment',
			scope: ['comment'],
			settings: {
				foreground: colors.tokens.COMMENT,
			},
		},
		{
			name: 'Variable',
			scope: ['variable'],
			settings: { foreground: colors.tokens.VARIABLE },
		},
		{
			name: 'Variable other property',
			scope: [
				'support.variable',
				'variable.other.predefined',
				'variable.other.property',
				'meta.object.member',
			],
			settings: {
				foreground: colors.tokens.VARIABLE_PROPERTY,
			},
		},
		{
			name: 'Variable other constant object',
			scope: ['variable.other.constant.object'],
			settings: {
				foreground: colors.tokens.VARIABLE_CONSTANT,
			},
		},
		{
			name: 'Function',
			scope: [
				'entity.name.function',
				'support.function',
				'meta.function-call.generic',
				'support.function.magic',
				'punctuation.definition.template-expression',
			],
			settings: { foreground: colors.tokens.FUNCTION },
		},
		{
			name: 'Function parameter',
			scope: ['variable.parameter'],
			settings: {
				foreground: colors.tokens.FUNCTION_PARAMETER,
			},
		},
		{
			name: 'Keyword | Keyword operator',
			scope: ['keyword', 'meta.method.declaration storage.type'],
			settings: {
				foreground: colors.tokens.KEYWORD,
			},
		},
		{
			name: 'Storage (let, const, async, function, class, extends, ...) | Variable language | Keyword operator expression | Keyword operator new',
			scope: [
				'storage',
				'variable.language',
				'keyword.operator.expression',
				'keyword.operator.new',
				'keyword.function',
			],
			settings: {
				foreground: colors.tokens.STORAGE,
			},
		},
		{
			name: 'Primitive',
			scope: [
				'support.type.primitive',
				'entity.other.attribute-name.pseudo-class',
				'entity.other.attribute-name.pseudo-element',
			],
			settings: {
				foreground: colors.tokens.PRIMITIVE,
			},
		},
		{
			name: 'Class',
			scope: [
				'support.class',
				'entity.name.type',
				'entity.other.inherited-class',
				'entity.name.scope-resolution',
				'support.type',
			],
			settings: {
				foreground: colors.tokens.CLASS,
			},
		},
		{
			name: 'Tag',
			scope: [
				'entity.name.tag',
				'variable.language.this',
				'variable.language.super',
				'variable.parameter.function.language.special.self',
				'variable.language.special.self',
				'entity.name.tag.reference',
			],
			settings: {
				foreground: colors.tokens.TAG,
			},
		},
		{
			name: 'Punctuation tag',
			scope: [
				'punctuation.definition.tag.begin',
				'punctuation.definition.tag.end',
				'punctuation.definition.typeparameters.begin',
				'punctuation.definition.typeparameters.end',
			],
			settings: {
				foreground: colors.tokens.PUNCTUATION_TAG,
			},
		},
		{
			name: 'Attribute name',
			scope: ['entity.other.attribute-name'],
			settings: {
				foreground: colors.tokens.ATTRIBUTE,
			},
		},
		{
			name: 'Id',
			scope: ['entity.other.attribute-name.id'],
			settings: {
				foreground: colors.tokens.ID,
			},
		},
		{
			name: 'String',
			scope: ['string'],
			settings: {
				foreground: colors.tokens.STRING,
			},
		},
		{
			name: 'String regexp',
			scope: ['string.regexp'],
			settings: {
				foreground: colors.tokens.REGEXP,
			},
		},
		{
			name: 'Constant',
			scope: [
				'support.constant',
				'constant.language',
				'support.type.builtin',
			],
			settings: {
				foreground: colors.tokens.CONSTANT,
			},
		},
		{
			name: 'Number',
			scope: ['constant.numeric'],
			settings: {
				foreground: colors.tokens.NUMBER,
			},
		},
		{
			name: 'Falsy',
			scope: [
				'support.class.error',
				'keyword.control.trycatch',
				'keyword.operator.expression.delete',
				'keyword.operator.expression.void',
				'keyword.operator.void',
				'keyword.operator.delete',
				'constant.language.null',
				'constant.language.boolean.false',
				'constant.language.undefined',
			],
			settings: {
				foreground: colors.tokens.FALSY,
			},
		},
		{
			name: 'Keyword operator',
			scope: [
				'keyword.operator',
				'keyword.operator.assignment',
				'punctuation.accessor',
				'punctuation.separator.key-value',
				'punctuation.definition.block.sequence.item',
				'punctuation.separator.dictionary.key-value',
				'punctuation.definition.variable',
				'punctuation.separator.colon',
				'punctuation.separator.period',
				'punctuation.section',
				'keyword.other.unit',
				'punctuation.definition.block',
				'punctuation.definition.string',
			],
			settings: {
				foreground: colors.tokens.OPERATOR,
			},
		},
		{
			name: 'CSS property name',
			scope: ['source.css support.type.property-name'],
			settings: {
				foreground: colors.tokens.CSS_PROPERTY_NAME,
			},
		},
		{
			name: 'Variable other readwrite alias',
			scope: ['variable.other.readwrite.alias', 'entity.name.namespace'],
			settings: {
				foreground: colors.tokens.VARIABLE_READWRITE_ALIAS,
			},
		},
		{
			name: 'Json key, Yaml key',
			scope: [
				'support.type.property-name.json',
				'source.yaml entity.name.tag',
			],
			settings: {
				foreground: colors.tokens.JSON_KEY,
			},
		},
	],
	semanticHighlighting: true,
};
