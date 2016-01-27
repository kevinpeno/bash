export default class Deck extends Set {
	constructor(cards) {
		super(cards)
	}

	get level() {
		return [].reduce.call(this, (total, card) => {
			return total + card.level
		}, 0)
	}
}

module.exports = Deck
