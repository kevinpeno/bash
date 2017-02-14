/* global require */
"use strict"

const test = require("blue-tape")
const Card = require("../src/card")
const Trait = require("../src/trait")

test("Card has a level", (t) => {
	const card = new Card()

	t.equal(card.level, 0)
	t.end()
})

test("Card can add traits on a card on init", (t) => {
	const traits = [
		new Trait(),
		new Trait()
	]

	const card = new Card({ traits })

	t.equal(card.traits.length, 2)
	t.end()
})

test("Card can add a trait on a card after init", (t) => {
	const trait = new Trait()

	const card = new Card()
	const newCard = card.addTrait( trait )

	t.equal(newCard.traits.length, 1)
	t.end()
})

test("Card has a level equal to all trait levels", (t) => {
	const level = 1
	const traits = [
		new Trait({level}),
		new Trait({level})
	]

	const card = new Card({traits})

	t.equal(card.level, level * traits.length)
	t.end()
})

test("Card can get an attached trait by key", (t) => {
	const options = {
		"key": "test"
	}
	const traits = [
		new Trait(options)
	]
	const card = new Card({traits})
	const trait = card.getTrait("test")

	t.equal(trait.key, "test")
	t.end()
})

test("Card can get a level equal to all attached traits with the same key", (t) => {
	const options = {
		"key": "test",
		"level": 1
	}

	const traits = [
		new Trait(options),
		new Trait(options)
	]

	const card = new Card({traits})

	t.equal(card.getTraitLevel("test"), options.level * 2)
	t.end()
})
