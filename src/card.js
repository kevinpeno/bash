export default class Card {
	constructor() {
		this.abilities = new Map()
		this.actions = {
			"total": 0
		}
	}

	get level() {
		const abilityLevel = [].reduce.call(
			this.abilities,
			(total, ability) => total + ability.level,
			0
		)

		return abilityLevel + this.actions.total
	}
}
