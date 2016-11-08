/* global require */

"use strict"

const test = require("blue-tape")
const Card = require("../src/card")
const Ability = require("../src/ability")

test("Card has a level", (t) => {
	const card = new Card()

	t.equal(card.level, 0)
	t.end()
})

test("Ability has a level", (t) => {
	const ability = new Ability()

	t.equal(ability.level, 0)
	t.end()
})

test("Ability level can be set when initialized", (t) => {
	const ability = new Ability({ "level": 1 })

	t.equal(ability.level, 1)
	t.end()
})

test("Ability level can be set after initialized", (t) => {
	const ability = new Ability()

	ability.level = 1

	t.equal(ability.level, 1)
	t.end()
})

test("I can set an ability on a card", (t) => {
	const card = new Card()
	const ability = new Ability()

	card.abilities.set("jump", ability)

	t.equal(card.abilities.size, 1)
	t.end()
})

test("I can set multiple abilities on a card", (t) => {
	const card = new Card()
	const abilities = new Map()
	const ability = new Ability()

	abilities.set("jump", ability)
	abilities.set("skip", ability)

	card.abilities = abilities

	t.equal(card.abilities.size, 2)
	t.end()
})

test("When set, card abilities must be a Map", (t) => {
	const card = new Card()

	try {
		card.abilities = "not a map"
		t.fail("Card should not accept anything except Map for setting abilities")
	}
	catch (e) {
		if (e instanceof TypeError) {
			t.pass("Card threw TypeError when given something other than Map")
		}
		else {
			t.fail("Card should throw a TypeError if not given a map")
		}
	}

	t.end()
})

test("I can set the level for an ability on init", (t) => {
	const level = 1
	const ability = new Ability({ level })

	t.equal(ability.level, level)
	t.end()
})

test("Card has a level equal to the level of all abilities", (t) => {
	const level = 1
	const card = new Card()
	const ability = new Ability({ level })

	card.abilities.set("jump", ability)

	t.equal(card.level, ability.level)
	t.end()
})
