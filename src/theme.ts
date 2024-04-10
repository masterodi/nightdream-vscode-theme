import { TextmateColors } from './types/textmate-colors';
import { WorkbenchColors } from './types/workbench-colors';

type Theme = {
	name: string;
	colors: WorkbenchColors;
	tokenColors: TextmateColors;
	semanticHighlighting: boolean;
};

export const theme: Theme = {
	name: 'Nightdream',
	colors: {},
	tokenColors: [],
	semanticHighlighting: true,
};
