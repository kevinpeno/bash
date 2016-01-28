"use strict"

const defaults = {
	"level": 0
}

const props = new WeakMap()

class Ability {
	constructor( options ) {
		props.set(this, Object.assign(defaults, options))
	}

	get level() {
		return props.get(this).level
	}

	set level( value ) {
		const level = Number.parseInt( value, 10 )
		const oldProps = props.get(this)

		props.set(this, Object.assign(oldProps, { level }))
	}
}

module.exports = Ability
