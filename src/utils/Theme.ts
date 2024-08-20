import Color from './Color';
import { TokenColorsScheme, VSCTheme, WorkbenchColorsScheme } from './types';

const createTerminalColors = (colors: WorkbenchColorsScheme['terminal']) => {
	return colors
		? {
				'terminal.ansiBlack': colors.ansiBlack,
				'terminal.ansiBrightBlack': colors.ansiBrightBlack,
				'terminal.ansiBlue': colors.ansiBlue,
				'terminal.ansiBrightBlue': colors.ansiBrightBlue,
				'terminal.ansiCyan': colors.ansiCyan,
				'terminal.ansiBrightCyan': colors.ansiBrightCyan,
				'terminal.ansiGreen': colors.ansiGreen,
				'terminal.ansiBrightGreen': colors.ansiBrightGreen,
				'terminal.ansiMagenta': colors.ansiMagenta,
				'terminal.ansiBrightMagenta': colors.ansiBrightMagenta,
				'terminal.ansiRed': colors.ansiRed,
				'terminal.ansiBrightRed': colors.ansiBrightRed,
				'terminal.ansiWhite': colors.ansiWhite,
				'terminal.ansiBrightWhite': colors.ansiBrightWhite,
				'terminal.ansiYellow': colors.ansiYellow,
				'terminal.ansiBrightYellow': colors.ansiBrightYellow,
		  }
		: {
				'terminal.ansiBlack': '#1b1e28',
				'terminal.ansiBlue': '#89ddff',
				'terminal.ansiBrightBlack': '#a6accd',
				'terminal.ansiBrightBlue': '#ADD7FF',
				'terminal.ansiBrightCyan': '#ADD7FF',
				'terminal.ansiBrightGreen': '#5DE4c7',
				'terminal.ansiBrightMagenta': '#f087bd',
				'terminal.ansiBrightRed': '#d0679d',
				'terminal.ansiBrightWhite': '#ffffff',
				'terminal.ansiBrightYellow': '#fffac2',
				'terminal.ansiCyan': '#89ddff',
				'terminal.ansiGreen': '#5DE4c7',
				'terminal.ansiMagenta': '#f087bd',
				'terminal.ansiRed': '#d0679d',
				'terminal.ansiWhite': '#ffffff',
				'terminal.ansiYellow': '#fffac2',
		  };
};

const createGitDecorations = (gitDecoration: WorkbenchColorsScheme['gitDecoration']) => {
	return gitDecoration
		? {
				'gitDecoration.addedResourceForeground': gitDecoration.addedResourceForeground,
				'gitDecoration.conflictingResourceForeground':
					gitDecoration.conflictingResourceForeground,
				'gitDecoration.deletedResourceForeground': gitDecoration.deletedResourceForeground,
				'gitDecoration.ignoredResourceForeground': gitDecoration.ignoredResourceForeground,
				'gitDecoration.modifiedResourceForeground':
					gitDecoration.modifiedResourceForeground,
				'gitDecoration.renamedResourceForeground': gitDecoration.renamedResourceForeground,
				'gitDecoration.stageDeletedResourceForeground':
					gitDecoration.stageDeletedResourceForeground,
				'gitDecoration.stageModifiedResourceForeground':
					gitDecoration.stageModifiedResourceForeground,
				'gitDecoration.submoduleResourceForeground':
					gitDecoration.submoduleResourceForeground,
				'gitDecoration.untrackedResourceForeground':
					gitDecoration.untrackedResourceForeground,
		  }
		: {
				'gitDecoration.addedResourceForeground': '#5fb3a1',
				'gitDecoration.conflictingResourceForeground': '#d0679d',
				'gitDecoration.deletedResourceForeground': '#d0679d',
				'gitDecoration.ignoredResourceForeground': '#767c9d70',
				'gitDecoration.modifiedResourceForeground': '#ADD7FF',
				'gitDecoration.renamedResourceForeground': '#5DE4c7',
				'gitDecoration.stageDeletedResourceForeground': '#d0679d',
				'gitDecoration.stageModifiedResourceForeground': '#ADD7FF',
				'gitDecoration.submoduleResourceForeground': '#89ddff',
				'gitDecoration.untrackedResourceForeground': '#5DE4c7',
		  };
};

const createWorkbenchColors = (
	colors: WorkbenchColorsScheme,
	minimal: boolean = true
): VSCTheme['colors'] => ({
	foreground: colors.foreground[500],
	focusBorder: colors.foreground[600],
	'icon.foreground': colors.foreground[400] ?? colors.accent[600],
	'badge.background': colors.background[400],
	'badge.foreground': colors.foreground[400],
	'input.background': colors.background[400],
	'input.foreground': colors.foreground[400],
	'inputOption.activeBackground': colors.background[600],
	'inputOption.activeForeground': colors.accent[400],
	'inputOption.activeBorder': colors.border,
	'button.background': colors.background[600],
	'button.foreground': colors.foreground[400],
	'button.hoverBackground': colors.background.alpha[600],
	'button.secondaryBackground': colors.background[600],
	'button.secondaryForeground': colors.foreground[400],
	'button.secondaryHoverBackground': colors.background.alpha[600],
	'dropdown.background': colors.background[600],
	'dropdown.border': colors.border,
	'dropdown.foreground': colors.foreground[500],

	'activityBar.activeBackground': '#00000000',
	'activityBar.activeBorder': colors.foreground[400],
	'activityBar.activeFocusBorder': colors.accent[500],
	'activityBar.background': colors.background[minimal ? 500 : 600],
	'activityBar.border': colors.border,
	'activityBar.foreground': colors.foreground[500],
	'activityBar.inactiveForeground': colors.foreground[600],
	'activityBarBadge.background': colors.background[400],
	'activityBarBadge.foreground': colors.foreground[400],

	'sideBar.background': colors.background[minimal ? 500 : 600],
	'sideBar.border': colors.border,
	'sideBarSectionHeader.background': colors.background[minimal ? 500 : 600],
	'list.activeSelectionBackground': colors.background[400],
	'list.activeSelectionForeground': colors.foreground[400],
	'list.hoverBackground': colors.background[300] ?? colors.background[400],
	'list.inactiveSelectionBackground': colors.background[400],
	'list.inactiveSelectionForeground': colors.foreground[400],
	'list.highlightForeground': colors.accent[500],

	'statusBar.background': colors.background[minimal ? 500 : 600],
	'statusBar.foreground': colors.foreground[500],
	'statusBar.border': colors.border,
	'statusBar.noFolderBackground': colors.background[500],
	'statusBar.debuggingBackground': colors.background[400],

	'editor.background': colors.background[500],
	'editor.foreground': colors.foreground[400],
	'editor.lineHighlightBackground': `${colors.background[400]}bb`,
	'editorLineNumber.foreground': colors.foreground[700] ?? colors.foreground[600],
	'editorLineNumber.activeForeground': colors.foreground[400],
	'editorLineNumber.dimmedForeground': colors.foreground[700] ?? colors.foreground[600],
	'editor.selectionBackground': colors.background[300] ?? colors.background[400],
	'editor.wordHighlightBackground': colors.background.alpha[500],
	'editor.wordHighlightBorder': colors.foreground.alpha[400],

	'editorWidget.background': colors.background[minimal ? 500 : 600],
	'editorWidget.foreground': colors.foreground[500],
	'editorSuggestWidget.highlightForeground': colors.accent[500],
	'editorSuggestWidget.focusHighlightForeground': colors.accent[400],

	'peekViewEditor.background': colors.background[minimal ? 500 : 600],
	'peekView.border': colors.border,
	'peekViewEditorGutter.background': colors.background[minimal ? 500 : 600],
	'peekViewResult.background': colors.background[minimal ? 500 : 600],
	'peekViewTitle.background': colors.background[minimal ? 500 : 600],
	'peekViewTitleLabel.foreground': colors.foreground[400],
	'peekViewResult.lineForeground': colors.foreground[600],
	'peekViewTitleDescription.foreground': colors.foreground[600],

	'debugToolBar.background': colors.background[minimal ? 500 : 600],

	'titleBar.activeBackground': colors.background[minimal ? 500 : 600],
	'titleBar.inactiveBackground': colors.background[minimal ? 500 : 600],
	'titleBar.activeForeground': colors.foreground[500],
	'titleBar.border': colors.border,

	'menu.background': colors.background[minimal ? 500 : 600],
	'menu.foreground': colors.foreground[500],
	'menu.separatorBackground': colors.border,
	'menu.selectionForeground': colors.foreground[400],
	'menu.selectionBackground': colors.background[400],
	'menubar.selectionBackground': colors.background[400],
	'menubar.selectionForeground': colors.foreground[400],

	'editorGroupHeader.tabsBackground': colors.background[500],

	'tab.activeBackground': colors.background[400],
	'tab.activeForeground': colors.accent[400],
	'tab.inactiveForeground': colors.foreground[700] ?? colors.foreground[600],
	'tab.inactiveBackground': colors.background[500],

	'breadcrumb.background': colors.background[500],
	'breadcrumb.foreground': colors.foreground[500],

	'panel.background': colors.background[minimal ? 500 : 600],
	'panelTitle.activeForeground': colors.foreground[500],
	'panel.border': colors.border,
	'terminal.foreground': colors.foreground[500],

	...createTerminalColors(colors.terminal),
	...createGitDecorations(colors.gitDecoration),
});

const createTokenColors = (colors: TokenColorsScheme): VSCTheme['tokenColors'] => [
	{
		scope: ['comment', 'punctuation.definition.comment'],
		settings: {
			foreground: colors.COMMENT,
		},
	},
	{
		scope: ['variable'],
		settings: { foreground: colors.VARIABLE },
	},
	{
		scope: ['support.variable', 'variable.other.predefined', 'variable.other.property'],
		settings: {
			foreground: colors.VARIABLE_PROPERTY,
		},
	},
	{
		scope: ['variable.other.constant.object', 'string.unquoted'],
		settings: {
			foreground: colors.VARIABLE_CONSTANT ?? colors.VARIABLE,
		},
	},
	{
		scope: [
			'entity.name.function',
			'support.function',
			'punctuation.definition.template-expression',
			'meta.function-call',
		],
		settings: { foreground: colors.FUNCTION },
	},
	{
		scope: ['variable.parameter'],
		settings: {
			foreground: colors.FUNCTION_PARAMETER ?? colors.VARIABLE,
		},
	},
	{
		scope: ['keyword'],
		settings: {
			foreground: colors.KEYWORD,
		},
	},
	{
		scope: ['storage.type', 'keyword.operator'],
		settings: {
			foreground: colors.STORAGE ?? colors.KEYWORD,
		},
	},
	{
		scope: ['storage.modifier.async', 'storage.modifier'],
		settings: {
			foreground: colors.KEYWORD,
		},
	},
	{
		scope: ['support.type.primitive', 'storage.type.java'],
		settings: {
			foreground: colors.PRIMITIVE ?? colors.CLASS,
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
			foreground: colors.PUNCTUATION_TAG ?? colors.PUNCTUATION,
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
			foreground: colors.ID ?? colors.ATTRIBUTE,
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
			foreground: colors.REGEXP ?? colors.STRING,
		},
	},
	{
		scope: ['support.constant', 'constant.language'],
		settings: {
			foreground: colors.CONSTANT,
		},
	},
	{
		scope: ['constant.numeric', 'keyword.other.unit'],
		settings: {
			foreground: colors.NUMBER ?? colors.CONSTANT,
		},
	},
	{
		scope: ['keyword.operator.new', 'keyword.control.new'],
		settings: {
			foreground: colors.TRUTHY ?? colors.CONSTANT,
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
			foreground: colors.FALSY ?? colors.CONSTANT,
		},
	},
	{
		scope: ['keyword.operator.assignment', 'punctuation'],
		settings: {
			foreground: colors.PUNCTUATION,
		},
	},
	{
		scope: ['support.type.property-name'],
		settings: {
			foreground: colors.PROPERTY_NAME,
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
			foreground: colors.VARIABLE_READWRITE_ALIAS ?? colors.VARIABLE,
		},
	},
];

export default class Theme {
	name: string;
	workbench: WorkbenchColorsScheme;
	tokens: TokenColorsScheme;

	constructor(name: string, workbench: WorkbenchColorsScheme, tokens: TokenColorsScheme) {
		this.name = name;
		this.workbench = workbench;
		this.tokens = tokens;
	}

	getName() {
		return `${this.name.replace(' ', '-')}-color-theme.json`;
	}

	build(minimal = true): VSCTheme {
		return {
			name: this.name,
			colors: createWorkbenchColors(this.workbench, minimal),
			tokenColors: createTokenColors(this.tokens),
			semanticHighlighting: true,
		};
	}

	static fromBases(name: string, { background, foreground, accent, border, tokens }) {
		const theme = new Theme(
			name,
			{
				background: new Color(background, { brighten: 0.2, darken: 0.1 }),
				foreground: new Color(foreground, { darken: 2 }),
				accent: new Color(accent),
				border: border,
			},
			tokens
		);

		console.log('Workbench colors:');
		console.table(theme.workbench);

		return theme;
	}
}
