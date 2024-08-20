import chroma from 'chroma-js';

export default class Color {
	400: string;
	500: string;
	600: string;
	alpha: {
		400: string;
		500: string;
		600: string;
	};

	constructor(hex: string, props?: { brighten?: number; darken?: number }) {
		this[400] = chroma(hex).brighten(props?.brighten).hex();
		this[500] = hex;
		this[600] = chroma(hex).darken(props?.darken).hex();
		this.alpha = {
			400: chroma(hex).brighten(0.75).alpha(0.25).hex(),
			500: chroma(hex).brighten(0.75).alpha(0.5).hex(),
			600: chroma(hex).brighten(0.75).alpha(0.75).hex(),
		};
	}
}
