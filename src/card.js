/* global module */
"use strict"

const defaults = {
	"traits": []
}

const props = new WeakMap()

class Card {
	constructor( options ) {
		props.set(this, Object.assign({}, defaults, options))
	}

	get traits() {
		return props.get(this).traits
	}

	get level() {
		return this.traits.reduce((total, trait) => {
			return total + trait.level
		}, 0)
	}

	addTrait(trait) {
		const oldProps = props.get(this)
		const traits = [ ...oldProps.traits, trait ]
		const newProps = Object.assign({}, oldProps, {traits})

		return new Card(newProps)
	}

	getTrait(key) {
		return this.traits.find((trait) => trait.key === key)
	}

	getTraitLevel(key) {
		return this.traits
			.filter((trait) => trait.key === key)
			.reduce(((acc, trait) => acc + trait.level), 0)
	}
}

module.exports = Card
