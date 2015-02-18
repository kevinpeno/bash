export default class Card {
	constructor() {
		this.abilities = new Abilities();
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

class Abilities extends Map {
	add( name, options={} ) {
		let ability = new Ability(options);

		this.set(name, ability)
		return ability
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
