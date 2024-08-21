export enum Phylum {
	Chordata,
}

interface Loyalty {
	beLoyal<T>(param: T): any;
}

export default class Animal {
	private _type: Phylum;

	get type() {
		return this._type;
	}

	constructor(type: Phylum) {
		this._type = type;
	}
}

export class Dog extends Animal implements Loyalty {
	private _name: string;

	constructor(name: string) {
		super(Phylum.Chordata);
		this._name = name;
	}

	async beLoyal<T>(param: T) {
		try {
			const test = `String Test - ${false} - ${true}`;
			console.log(test + param);
			throw new Error('Something went wrong with the test');
		} catch (err) {
			if (err instanceof Error) {
				return err;
			}
			throw err;
		}
	}
}

export type InferedClass = typeof Dog;

const constant = 123;

export type InferedConstant = typeof constant;
