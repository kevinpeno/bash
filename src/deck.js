"use strict"

class Deck extends Array {
	// Adding this in breaks parent initialization if cards is undefined
	// commenting out until needed since the super call is implied
	// constructor(cards) {
	// 	super(cards)
	// }

	// Simulate Map for similar props everywhere
	get size() {
		return this.length
	}

	get level() {
		return this.reduce((total, card) => {
			return total + card.level
		}, 0)
	}

	/**
	* Adds a card to the deck and returns its offset within it
	**/
	add(card) {
		return this.push(card) - 1
	}

	/**
	* Removes the card specified by the ID and returns the card
	**/
	delete(id) {
		return this.splice(id, 1)[0]
	}
}

module.exports = Deck
