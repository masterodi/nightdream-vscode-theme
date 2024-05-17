import { TextmateColors } from './types/textmate-colors';
import { WorkbenchColors } from './types/workbench-colors';

const colors = {
	bg: {
		TRANSPARENT: '#00000000',
		BASE: '#1b1b27',
		LIGHT: '#292b39',
		LIGHTEST: '#2d2f3f',
		LIGHTESTLIGHTEST: '#464962',
		DARK: '#181b24',
	},
	foreground: {
		BASE: '#969ac3',
		LIGHT: '#d5d9f8',
		DIMMED: '#7c80aa',
		DIMMED_EXTRA: '#323444',
	},
	border: {
		BASE: '#00000000',
	},
	accent: {
		BASE: '#a7bef8',
		LIGHT: '#d5dff8',
		DARK: '#5b5e7c',
		DARKEST: '#323444',
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
		'input.background': colors.bg.DARK,
		'input.foreground': colors.foreground.LIGHT,
		'inputOption.activeBackground': colors.bg.LIGHT,
		'inputOption.activeForeground': colors.foreground.LIGHT,
		'inputOption.activeBorder': colors.border.BASE,
		'button.background': colors.accent.BASE,
		'button.foreground': colors.foreground.DIMMED_EXTRA,
		'button.hoverBackground': colors.accent.LIGHT,
		'dropdown.background': colors.bg.DARK,
		'dropdown.border': colors.border.BASE,
		'dropdown.foreground': colors.foreground.BASE,

		'activityBar.activeBackground': colors.bg.TRANSPARENT,
		'activityBar.activeBorder': colors.accent.BASE,
		'activityBar.activeFocusBorder': colors.accent.BASE,
		'activityBar.background': colors.bg.BASE,
		'activityBar.border': colors.border.BASE,
		'activityBar.foreground': colors.foreground.BASE,
		'activityBar.inactiveForeground': colors.foreground.DIMMED,
		'activityBarBadge.background': colors.accent.BASE,
		'activityBarBadge.foreground': colors.accent.DARKEST,

		'sideBar.background': colors.bg.BASE,
		'sideBarSectionHeader.background': colors.bg.BASE,
		'list.activeSelectionBackground': colors.bg.LIGHT,
		'list.activeSelectionForeground': colors.foreground.LIGHT,
		'list.hoverBackground': colors.bg.LIGHTEST,
		'list.inactiveSelectionBackground': colors.bg.LIGHT,
		'list.inactiveSelectionForeground': colors.foreground.LIGHT,
		'list.highlightForeground': colors.accent.BASE,

		'statusBar.background': colors.bg.BASE,
		'statusBar.foreground': colors.foreground.BASE,
		'statusBar.noFolderBackground': colors.bg.BASE,
		'statusBar.debuggingBackground': colors.bg.LIGHT,

		'editor.background': colors.bg.BASE,
		'editor.foreground': colors.foreground.LIGHT,
		'editor.lineHighlightBackground': colors.bg.LIGHT,
		'editorLineNumber.foreground': colors.foreground.DIMMED_EXTRA,
		'editorLineNumber.activeForeground': colors.foreground.LIGHT,
		'editorLineNumber.dimmedForeground': colors.foreground.DIMMED_EXTRA,
		'editor.selectionBackground': colors.bg.LIGHTESTLIGHTEST,
		'editor.wordHighlightBackground': colors.bg.LIGHTEST,

		'editorWidget.background': colors.bg.DARK,
		'editorWidget.foreground': colors.foreground.BASE,
		'editorSuggestWidget.highlightForeground': colors.accent.BASE,
		'editorSuggestWidget.focusHighlightForeground': colors.accent.LIGHT,

		'peekViewEditor.background': colors.bg.DARK,
		'peekView.border': colors.border.BASE,
		'peekViewEditorGutter.background': colors.bg.DARK,
		'peekViewResult.background': colors.bg.DARK,
		'peekViewTitle.background': colors.bg.DARK,
		'peekViewTitleLabel.foreground': colors.foreground.LIGHT,
		'peekViewResult.lineForeground': colors.foreground.DIMMED,
		'peekViewTitleDescription.foreground': colors.foreground.DIMMED,

		'debugToolBar.background': colors.bg.DARK,

		'titleBar.activeBackground': colors.bg.BASE,
		'titleBar.inactiveBackground': colors.bg.BASE,
		'titleBar.activeForeground': colors.foreground.BASE,

		'menu.background': colors.bg.DARK,
		'menu.foreground': colors.foreground.BASE,
		'menu.separatorBackground': colors.border.BASE,
		'menu.selectionForeground': colors.foreground.LIGHT,
		'menu.selectionBackground': colors.bg.LIGHT,
		'menubar.selectionBackground': colors.bg.LIGHT,
		'menubar.selectionForeground': colors.foreground.LIGHT,

		'editorGroupHeader.tabsBackground': colors.bg.BASE,

		'tab.activeBackground': colors.bg.LIGHT,
		'tab.inactiveBackground': colors.bg.BASE,

		'breadcrumb.background': colors.bg.BASE,
		'breadcrumb.foreground': colors.foreground.BASE,

		'panel.background': colors.bg.BASE,
		'panelTitle.activeForeground': colors.foreground.BASE,
		'panel.border': colors.border.BASE,
		'terminal.foreground': colors.foreground.BASE,

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
			scope: ['comment'],
			settings: {
				foreground: colors.tokens.COMMENT,
			},
		},
		{
			scope: ['variable'],
			settings: { foreground: colors.tokens.VARIABLE },
		},
		{
			scope: [
				'support.variable',
				'variable.other.predefined',
				'variable.other.property',
			],
			settings: {
				foreground: colors.tokens.VARIABLE_PROPERTY,
			},
		},
		{
			scope: ['variable.other.constant.object'],
			settings: {
				foreground: colors.tokens.VARIABLE_CONSTANT,
			},
		},
		{
			scope: [
				'entity.name.function',
				'support.function',
				'punctuation.definition.template-expression',
			],
			settings: { foreground: colors.tokens.FUNCTION },
		},
		{
			scope: ['variable.parameter'],
			settings: {
				foreground: colors.tokens.FUNCTION_PARAMETER,
			},
		},
		{
			scope: ['keyword'],
			settings: {
				foreground: colors.tokens.KEYWORD,
			},
		},
		{
			scope: ['storage'],
			settings: {
				foreground: colors.tokens.STORAGE,
			},
		},
		{
			scope: ['storage.modifier.async', 'storage.modifier'],
			settings: {
				foreground: colors.tokens.KEYWORD,
			},
		},
		{
			scope: ['support.type.primitive'],
			settings: {
				foreground: colors.tokens.PRIMITIVE,
			},
		},
		{
			scope: [
				'support.class',
				'support.type',
				'entity.name.type',
				'entity.other.inherited-class',
				'entity.name.scope-resolution',
				'variable.language.this',
				'variable.language.super',
				'variable.parameter.function.language.special.self',
			],
			settings: {
				foreground: colors.tokens.CLASS,
			},
		},
		{
			scope: ['entity.name.tag', 'support.class.component'],
			settings: {
				foreground: colors.tokens.TAG,
			},
		},
		{
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
			scope: ['entity.other.attribute-name'],
			settings: {
				foreground: colors.tokens.ATTRIBUTE,
			},
		},
		{
			scope: ['entity.other.attribute-name.id'],
			settings: {
				foreground: colors.tokens.ID,
			},
		},
		{
			scope: ['string', 'entity.other.attribute-name.pseudo-class'],
			settings: {
				foreground: colors.tokens.STRING,
			},
		},
		{
			scope: ['string.regexp'],
			settings: {
				foreground: colors.tokens.REGEXP,
			},
		},
		{
			scope: ['support.constant', 'constant.language'],
			settings: {
				foreground: colors.tokens.CONSTANT,
			},
		},
		{
			scope: ['constant.numeric'],
			settings: {
				foreground: colors.tokens.NUMBER,
			},
		},
		{
			scope: ['keyword.operator.new', 'keyword.control.new'],
			settings: {
				foreground: colors.tokens.TRUTHY,
			},
		},
		{
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
				'punctuation.definition.string',
			],
			settings: {
				foreground: colors.tokens.OPERATOR,
			},
		},
		{
			scope: ['source.css support.type.property-name'],
			settings: {
				foreground: colors.tokens.CSS_PROPERTY_NAME,
			},
		},
		{
			scope: [
				'variable.other.readwrite.alias',
				'entity.name.namespace',
				'storage.modifier.import',
				'storage.modifier.package',
			],
			settings: {
				foreground: colors.tokens.VARIABLE_READWRITE_ALIAS,
			},
		},
		{
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
