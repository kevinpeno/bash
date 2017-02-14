/* global module */
"use strict"

const defaults = {
	"level": 0
}

const props = new WeakMap()

class Trait {
	constructor( options ) {
		props.set(this, Object.assign({}, defaults, options))
	}

	get key() {
		return props.get(this).key
	}

	get level() {
		return props.get(this).level
	}
}

module.exports = Trait
