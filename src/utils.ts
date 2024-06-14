import {
	ThemeTokenColors,
	ThemeWorkbenchColors,
	VSCTheme,
} from './types/theme';

const createWorkbenchColors = (
	colors: ThemeWorkbenchColors,
	minimal: boolean = true
): VSCTheme['colors'] => ({
	foreground: colors.foreground[500],
	focusBorder: colors.accent[500],
	'icon.foreground': colors.accent[500],
	'badge.background': colors.accent[500],
	'badge.foreground': colors.accent[700] ?? colors.accent[600],
	'input.background': colors.bg[600],
	'input.foreground': colors.foreground[400],
	'inputOption.activeBackground': colors.bg[400],
	'inputOption.activeForeground': colors.foreground[400],
	'inputOption.activeBorder': colors.border,
	'button.background': colors.accent[500],
	'button.foreground': colors.foreground[700] ?? colors.foreground[600],
	'button.hoverBackground': colors.accent[400],
	'dropdown.background': colors.bg[600],
	'dropdown.border': colors.border,
	'dropdown.foreground': colors.foreground[500],

	'activityBar.activeBackground': '#00000000',
	'activityBar.activeBorder': colors.accent[500],
	'activityBar.activeFocusBorder': colors.accent[500],
	'activityBar.background': minimal ? colors.bg[500] : colors.bg[600],
	'activityBar.border': '#00000000',
	'activityBar.foreground': colors.foreground[500],
	'activityBar.inactiveForeground': colors.foreground[600],
	'activityBarBadge.background': colors.accent[500],
	'activityBarBadge.foreground': colors.accent[700] ?? colors.accent[600],

	'sideBar.background': minimal ? colors.bg[500] : colors.bg[600],
	'sideBar.border': colors.border,
	'sideBarSectionHeader.background': minimal
		? colors.bg[500]
		: colors.bg[600],
	'list.activeSelectionBackground': colors.bg[400],
	'list.activeSelectionForeground': colors.foreground[400],
	'list.hoverBackground': colors.bg[300] ?? colors.bg[400],
	'list.inactiveSelectionBackground': colors.bg[400],
	'list.inactiveSelectionForeground': colors.foreground[400],
	'list.highlightForeground': colors.accent[500],

	'statusBar.background': minimal ? colors.bg[500] : colors.bg[600],
	'statusBar.foreground': colors.foreground[500],
	'statusBar.border': colors.border,
	'statusBar.noFolderBackground': colors.bg[500],
	'statusBar.debuggingBackground': colors.bg[400],

	'editor.background': colors.bg[500],
	'editor.foreground': colors.foreground[400],
	'editor.lineHighlightBackground': `${colors.bg[400]}bb`,
	'editorLineNumber.foreground':
		colors.foreground[700] ?? colors.foreground[600],
	'editorLineNumber.activeForeground': colors.foreground[400],
	'editorLineNumber.dimmedForeground':
		colors.foreground[700] ?? colors.foreground[600],
	'editor.selectionBackground': colors.bg[300] ?? colors.bg[400],
	'editor.wordHighlightBackground':
		`${colors.bg[300]}ee` ?? `${colors.bg[400]}ee`,

	'editorWidget.background': colors.bg[600],
	'editorWidget.foreground': colors.foreground[500],
	'editorSuggestWidget.highlightForeground': colors.accent[500],
	'editorSuggestWidget.focusHighlightForeground': colors.accent[400],

	'peekViewEditor.background': colors.bg[600],
	'peekView.border': colors.border,
	'peekViewEditorGutter.background': colors.bg[600],
	'peekViewResult.background': colors.bg[600],
	'peekViewTitle.background': colors.bg[600],
	'peekViewTitleLabel.foreground': colors.foreground[400],
	'peekViewResult.lineForeground': colors.foreground[600],
	'peekViewTitleDescription.foreground': colors.foreground[600],

	'debugToolBar.background': colors.bg[600],

	'titleBar.activeBackground': minimal ? colors.bg[500] : colors.bg[600],
	'titleBar.inactiveBackground': minimal ? colors.bg[500] : colors.bg[600],
	'titleBar.activeForeground': colors.foreground[500],
	'titleBar.border': colors.border,

	'menu.background': colors.bg[600],
	'menu.foreground': colors.foreground[500],
	'menu.separatorBackground': colors.border,
	'menu.selectionForeground': colors.foreground[400],
	'menu.selectionBackground': colors.bg[400],
	'menubar.selectionBackground': colors.bg[400],
	'menubar.selectionForeground': colors.foreground[400],

	'editorGroupHeader.tabsBackground': colors.bg[500],

	'tab.activeBackground': colors.bg[400],
	'tab.inactiveBackground': colors.bg[500],

	'breadcrumb.background': colors.bg[500],
	'breadcrumb.foreground': colors.foreground[500],

	'panel.background': minimal ? colors.bg[500] : colors.bg[600],
	'panelTitle.activeForeground': colors.foreground[500],
	'panel.border': colors.border,
	'terminal.foreground': colors.foreground[500],

	'terminal.ansiBlack': colors.terminal?.ansiBlack ?? '#1e2030',
	'terminal.ansiBrightBlack': colors.terminal?.ansiBrightBlack ?? '#5b6078',
	'terminal.ansiBlue': colors.terminal?.ansiBlue ?? '#8aadf4',
	'terminal.ansiBrightBlue': colors.terminal?.ansiBrightBlue ?? '#8aadf4',
	'terminal.ansiCyan': colors.terminal?.ansiCyan ?? '#91d7e3',
	'terminal.ansiBrightCyan': colors.terminal?.ansiBrightCyan ?? '#91d7e3',
	'terminal.ansiGreen': colors.terminal?.ansiGreen ?? '#a6da95',
	'terminal.ansiBrightGreen': colors.terminal?.ansiBrightGreen ?? '#a6da95',
	'terminal.ansiMagenta': colors.terminal?.ansiMagenta ?? '#c6a0f6',
	'terminal.ansiBrightMagenta':
		colors.terminal?.ansiBrightMagenta ?? '#c6a0f6',
	'terminal.ansiRed': colors.terminal?.ansiRed ?? '#ed8796',
	'terminal.ansiBrightRed': colors.terminal?.ansiBrightRed ?? '#ed8796',
	'terminal.ansiWhite': colors.terminal?.ansiWhite ?? '#cad3f5',
	'terminal.ansiBrightWhite': colors.terminal?.ansiBrightWhite ?? '#cad3f5',
	'terminal.ansiYellow': colors.terminal?.ansiYellow ?? '#eed49f',
	'terminal.ansiBrightYellow': colors.terminal?.ansiBrightYellow ?? '#eed49f',

	'gitDecoration.addedResourceForeground':
		colors.gitDecoration?.addedResourceForeground ?? '#a6da95',
	'gitDecoration.conflictingResourceForeground':
		colors.gitDecoration?.conflictingResourceForeground ?? '#eed49f',
	'gitDecoration.deletedResourceForeground':
		colors.gitDecoration?.deletedResourceForeground ?? '#ed8796',
	'gitDecoration.ignoredResourceForeground':
		colors.gitDecoration?.ignoredResourceForeground ?? '#6e738d',
	'gitDecoration.modifiedResourceForeground':
		colors.gitDecoration?.modifiedResourceForeground ?? '#91d7e3',
	'gitDecoration.renamedResourceForeground':
		colors.gitDecoration?.renamedResourceForeground ?? '#8bd5ca',
	'gitDecoration.stageDeletedResourceForeground':
		colors.gitDecoration?.stageDeletedResourceForeground ?? '#ed8796',
	'gitDecoration.stageModifiedResourceForeground':
		colors.gitDecoration?.stageModifiedResourceForeground ?? '#eed49f',
	'gitDecoration.submoduleResourceForeground':
		colors.gitDecoration?.submoduleResourceForeground ?? '#91d7e3',
	'gitDecoration.untrackedResourceForeground':
		colors.gitDecoration?.untrackedResourceForeground ?? '#a6da95',
});

const createTokenColors = (
	colors: ThemeTokenColors
): VSCTheme['tokenColors'] => [
	{
		scope: ['comment'],
		settings: {
			foreground: colors.COMMENT,
		},
	},
	{
		scope: ['variable'],
		settings: { foreground: colors.VARIABLE },
	},
	{
		scope: [
			'support.variable',
			'variable.other.predefined',
			'variable.other.property',
		],
		settings: {
			foreground: colors.VARIABLE_PROPERTY,
		},
	},
	{
		scope: ['variable.other.constant.object'],
		settings: {
			foreground: colors.VARIABLE_CONSTANT,
		},
	},
	{
		scope: [
			'entity.name.function',
			'support.function',
			'punctuation.definition.template-expression',
		],
		settings: { foreground: colors.FUNCTION },
	},
	{
		scope: ['variable.parameter'],
		settings: {
			foreground: colors.FUNCTION_PARAMETER,
		},
	},
	{
		scope: ['keyword'],
		settings: {
			foreground: colors.KEYWORD,
		},
	},
	{
		scope: ['storage'],
		settings: {
			foreground: colors.STORAGE,
		},
	},
	{
		scope: ['storage.modifier.async', 'storage.modifier'],
		settings: {
			foreground: colors.KEYWORD,
		},
	},
	{
		scope: ['support.type.primitive'],
		settings: {
			foreground: colors.PRIMITIVE,
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
			foreground: colors.CLASS,
		},
	},
	{
		scope: ['entity.name.tag', 'support.class.component'],
		settings: {
			foreground: colors.TAG,
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
			foreground: colors.PUNCTUATION_TAG,
		},
	},
	{
		scope: ['entity.other.attribute-name'],
		settings: {
			foreground: colors.ATTRIBUTE,
		},
	},
	{
		scope: ['entity.other.attribute-name.id'],
		settings: {
			foreground: colors.ID,
		},
	},
	{
		scope: ['string', 'entity.other.attribute-name.pseudo-class'],
		settings: {
			foreground: colors.STRING,
		},
	},
	{
		scope: ['string.regexp'],
		settings: {
			foreground: colors.REGEXP,
		},
	},
	{
		scope: ['support.constant', 'constant.language'],
		settings: {
			foreground: colors.CONSTANT,
		},
	},
	{
		scope: ['constant.numeric'],
		settings: {
			foreground: colors.NUMBER,
		},
	},
	{
		scope: ['keyword.operator.new', 'keyword.control.new'],
		settings: {
			foreground: colors.TRUTHY,
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
			foreground: colors.FALSY,
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
			foreground: colors.OPERATOR,
		},
	},
	{
		scope: ['source.css support.type.property-name'],
		settings: {
			foreground: colors.CSS_PROPERTY_NAME,
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
			foreground: colors.VARIABLE_READWRITE_ALIAS,
		},
	},
	{
		scope: [
			'support.type.property-name.json',
			'source.yaml entity.name.tag',
		],
		settings: {
			foreground: colors.JSON_KEY,
		},
	},
];

export class Theme {
	name: string;
	workbench: ThemeWorkbenchColors;
	tokens: ThemeTokenColors;

	constructor(
		name: string,
		workbench: ThemeWorkbenchColors,
		tokens: ThemeTokenColors
	) {
		this.name = name;
		this.workbench = workbench;
		this.tokens = tokens;
	}

	build(minimal = true): VSCTheme {
		return {
			name: this.name,
			colors: createWorkbenchColors(this.workbench, minimal),
			tokenColors: createTokenColors(this.tokens),
			semanticHighlighting: true,
		};
	}
}
