require("6to5/register");
var assert = require('assert')

module.exports = function(){
	this.Given(/^I created a deck$/, function (next) {
		var Deck = require('../../src/deck');
		this.deck = new Deck()
		next()
	});

	this.When(/^I set the name of the deck to "([^"]*)"$/, function (name, next) {
		this.deck.name = name;
		next()
	});

	this.Then(/^the name of the deck should be set to "([^"]*)"$/, function (name, next) {
		assert.strictEqual(this.deck.name, name)
		next()
	});

	this.When(/^I add the card to the deck$/, function (next) {
		this.deck.add(this.card)
		next()
	});

	this.Then(/^the card should be included in the deck$/, function (next) {
		assert.ok(
			this.deck.has(this.card)
		)
		next()
	});

	this.Given(/^I added the card to the deck$/, function (next) {
		this.deck.add(this.card)
		next()
	});

	this.When(/^I remove the card from the deck$/, function (next) {
		this.deck.delete(this.card)
		next()
	});

	this.Then(/^the card should no longer be included in the deck$/, function (next) {
		assert.ok(
			!this.deck.has(this.card)
		)
		next()
	});

	this.Then(/^the deck should have a level equal to the level of all cards$/, function (next) {
		var cardLevel = 0;

		this.deck.forEach(function(card){
			cardLevel += card.level
		})

		assert.equal(
			this.deck.level,
			cardLevel
		)
		next();
	});
}