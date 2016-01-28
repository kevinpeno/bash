"use strict"

const defaults = {
	"level": 0
}

const props = new WeakMap()

class Ability {
	constructor( options ) {
		props.set(this, Object.assign({}, defaults, options))
	}

	get level() {
		return props.get(this).level
	}

	set level( value ) {
		props.get(this).level = Number.parseInt( value, 10 )

		return value
	}
}

module.exports = Ability
