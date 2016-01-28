var assert = require('assert')
var Card = require('../../src/card')
var CardAbility = require('../../src/ability')

module.exports = function() {
	this.Given(/^I created a card$/, function (next) {
		this.card = new Card()
		next()
	})

	this.Given(/^I added the ability to "([^"]*)" to the card$/, function (name, next) {
		this.card.abilities.set(name, new CardAbility())
		next()
	})

	this.Given(/^I upgraded the "([^"]*)" ability by (\d+) level$/, function (name, amount, next) {
		var ability = this.card.abilities.get(name)
		ability.level = ability.level + parseInt(amount, 10)
		next()
	})

	this.Given(/^I increased the action point total by (\d+)$/, function (amount, next) {
		this.card.actions.total += parseInt(amount,10)
		next()
	})

	this.When(/^I name the card "([^"]*)"$/, function (name, next) {
		this.card.name = name
		next()
	})

	this.When(/^I add the ability to "([^"]*)" to the card$/, function (name, next) {
		this.card.abilities.set(name, new CardAbility())
		next()
	})

	this.When(/^I upgrade the "([^"]*)" ability by (\d+) level$/, function (name, amount, next) {
		var ability = this.card.abilities.get(name)
		ability.level = ability.level + parseInt(amount, 10)
		next()
	})

	this.When(/^I downgrade the ability to "([^"]*)" by (\d+) level$/, function (name, amount, next) {
		try {
			var ability = this.card.abilities.get(name)
			ability.level = ability.level - parseInt(amount, 10)
			next()
		}
		catch(e) {
			if(e instanceof RangeError) {
				this.card.abilities.delete(name)
				next()
			}
			else {
				throw e
			}
		}
	})

	this.When(/^I remove the ability to "([^"]*)" from the card$/, function (name, next) {
		this.card.abilities.delete(name)
		next()
	})

	this.When(/^I increase the action point total by (\d+)$/, function (amount, next) {
		this.card.actions.total += parseInt(amount,10)
		next()
	})

	this.When(/^I decrease the action point total by (\d+)$/, function (amount, next) {
		this.card.actions.total -= parseInt(amount,10)
		next()
	})

	this.When(/^I use the "([^"]*)" ability$/, function (name, next) {
		next.pending()
	})

	this.Then(/^the name of the card should set to "([^"]*)"$/, function (name, next) {
		assert.strictEqual(this.card.name, name)
		next()
	})

	this.Then(/^the "([^"]*)" ability should have a level of (\d+)$/, function (name, amount, next) {
		assert.equal(
			this.card.abilities.get(name).level,
			parseInt(amount,10)
		)
		next()
	})

	this.Then(/^the ability to "([^"]*)" should be attached to the card$/, function (name, next) {
		assert.ok(
			this.card.abilities.has(name)
		)
		next()
	})

	this.Then(/^the ability to "([^"]*)" should no longer be attached to the card$/, function (name, next) {
		assert.ok(
			!this.card.abilities.has(name)
		)
		next()
	})

	this.Then(/^the card should have a level of (\d+)$/, function (amount, next) {
		assert.equal(
			this.card.level,
			parseInt(amount,10)
		)
		next()
	})

	this.Then(/^the card should have an action point total of (\d+)$/, function (amount, next) {
		assert.equal(
			this.card.actions.total,
			parseInt(amount,10)
		)
		next()
	})

	this.Then(/^the card should have (\d+) available action points$/, function (amount, next) {
		assert.equal(
			this.card.actions.total,
			parseInt(amount,10)
		)
		next()
	})

	this.Then(/^an error should occur$/, function (next) {
		next.pending()
	})
}
