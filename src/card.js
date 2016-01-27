"use strict"

class Card {
	constructor() {
		this.abilities = new Map();
		this.actions = {
			total: 0
		}
	}

	get level() {
		let abilityLevel = [].reduce.call(this.abilities, (total, ability) => {
			console.log(ability)
			return total + ability.level
		}, 0)

		return abilityLevel + this.actions.total
	}
}

module.exports = Card
