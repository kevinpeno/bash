/* global require */
"use strict"

const test = require("blue-tape")
const Trait = require("../src/trait")

test("Trait has a key", (t) => {
	const key = "test"
	const trait = new Trait({ key })

	t.equal(trait.key, "test")
	t.end()
})

test("Trait has a level", (t) => {
	const trait = new Trait()

	t.equal(trait.level, 0)
	t.end()
})

test("Trait level can be set when initialized", (t) => {
	const level = 1
	const trait = new Trait({ level })

	t.equal(trait.level, 1)
	t.end()
})
