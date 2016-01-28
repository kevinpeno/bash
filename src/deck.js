export default class Deck extends Array {
	constructor(cards) {
		super(cards)
	}

	get level() {
		return this.reduce((total, card) => {
			return total + card.level
		}, 0)
	}

	// Simulate Set
	add(card) {
		this.push(card)

		return this
	}

	// Simulate Map for similar props everywhere
	get size() {
		return this.length
	}
}

module.exports = Deck
