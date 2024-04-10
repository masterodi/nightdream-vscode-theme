import { writeFileSync } from 'fs';
import { theme } from './theme';

const themeJson = JSON.stringify(theme, undefined, 4);

writeFileSync(
	`${process.cwd()}/themes/${theme.name.replace(' ', '-')}-color-theme.json`,
	themeJson,
	{
		encoding: 'utf8',
	}
);
