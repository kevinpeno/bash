export default class Deck extends Set {
	constructor(...args) {
		super(...args)
	}

	get level() {
		let level = 0

		for( let card of this ) {
			level += card.level
		}

		return level
	}
}


export var __forcingDefault // Makes sure .default is required for some reason
