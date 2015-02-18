export default class Card {
	constructor() {
		this.abilities = new Map();
		this.actions = {
			total: 0
		}
	}

	get level() {
		let level = 0;

		for( let [name, value] of this.abilities ) {
			level += value.level
		}

		level += this.actions.total

		return level
	}
}

export class Ability {
	constructor( options={} ) {
		this.level = options.level || 1
	}

	set level( value ) {
		let level = parseInt( value, 10 )

		if( level < 1 )
			throw new RangeError('Level cannot be less than 1')
		else
			this._level = level
	}

	get level() {
		return this._level
	}
}
