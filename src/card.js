export default class Card {
	constructor() {
		this.abilities = new Map()
	}

	get level() {
		const abilitiesAsArray = [...this.abilities.values()]

		return abilitiesAsArray.reduce((total, ability) => {
			return total + ability.level
		}, 0)
	}
}
