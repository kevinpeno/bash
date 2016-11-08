/* global module */
"use strict"

const defaults = {
	"abilities": new Map()
}

const props = new WeakMap()

class Card {
	constructor() {
		props.set(this, Object.assign({}, defaults))
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
			props.get(this).abilities = abilities
			return abilities
		}
		else {
			throw new TypeError("abilities must be a Map")
		}
	}
}

module.exports = Card
