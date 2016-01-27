"use strict"

let defaultOptions = {
	"level": 1
}

class Ability {
	constructor( options ) {
		options = Object.assign(defaultOptions, options)

		this.level = options.level
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

module.exports = Ability
