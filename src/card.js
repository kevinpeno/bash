"use strict"

const defaults = {
	"abilities": new Map()
}

const props = new WeakMap()

class Card {
	constructor( options ) {
		props.set(this, Object.assign(defaults, options))

		this.abilities = this.abilities
	}

	get level() {
		const abilitiesAsArray = Array.from(this.abilities.values())

		return abilitiesAsArray.reduce((total, ability) => {
			return total + ability.level
		}, 0)
	}

	get abilities() {
		return props.get(this).abilities
	}

	set abilities(abilities) {
		if ( abilities instanceof Map ) {
			const oldProps = props.get(this)

			props.set(this, Object.assign(oldProps, { abilities }))
		}
		else {
			throw new TypeError("abilities must be a Map")
		}
	}
}

module.exports = Card
