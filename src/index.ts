import { writeFileSync } from 'fs';
import { Nightdream } from './theme';
import Theme from './utils/Theme';

const saveTheme = (theme: Theme) => {
	const themeJson = JSON.stringify(theme.build(), undefined, 4);

	writeFileSync(`${process.cwd()}/themes/${theme.getName()}`, themeJson, {
		encoding: 'utf8',
	});
};

saveTheme(Nightdream);
