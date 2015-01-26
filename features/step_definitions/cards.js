var System = require('systemjs')
var assert = require('assert')

module.exports = function(){
	this.When(/^I create a new card$/, function (next){
		var world = this

		System.import('./src/card').then(function(Card){
			world.card = Card.create()
			next()
		})
		.catch(function(err){
			next.fail(err)
		})
	})

	this.Then(/^a unique card should exist$/, function (next){
		var uuidgex = /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i

		assert.ok(
			uuidgex.test(this.card.id),
			"unique id is not a valid UUID v4 identifier"
		)
		next()
	})

	this.Given(/^I have a card$/, function (next){
		var world = this

		System.import('./src/card').then(function(Card){
			world.card = Card.create()
			next()
		})
		.catch(function(err){
			next.fail(err)
		})
	})

	this.When(/^I save the card$/, function (next){
		// @todo need to come back to saving things. Not necessary for right now
		next.pending()
	})

	this.Then(/^I should be able to access the card later with those changes applied$/, function (next){
		// @todo need to come back to saving things. Not necessary for right now
		next.pending()
	})

	this.When(/^I set the name of the card to "([^"]*)"$/, function (name, next){
		this.card.name = name;
		next()
	})

	this.Then(/^the name of the card should be "([^"]*)"$/, function (name, next){
		assert.strictEqual(this.card.name, name)
		next()
	})

	this.Given(/^I have some cards that meet some strategic goal$/, function (next){
		var world = this

		System.import('./src/card').then(function(Card){
			world.cards = [Card.create(), Card.create()]
			next()
		})
		.catch(function(err){
			next.fail(err)
		})
	})

	this.When(/^I create a deck with those cards$/, function (next){
		var world = this

		System.import('./src/deck').then(function(Deck){
			world.deck = Deck.create()

			world.cards.forEach(function(card){
				world.deck.set(card.id, card)
			})

			next()
		})
		.catch(function(err){
			next.fail(err)
		})
	});

	this.Then(/^I will have a unique deck to access later$/, function (next){
		var uuidgex = /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i

		assert.ok(
			uuidgex.test(this.deck.id),
			"unique id is not a valid UUID v4 identifier"
		)
		next()
	})

	this.When(/^I set the name of the deck to "([^"]*)"$/, function (name, next){
		this.deck.name = name;
		next()
	})

	this.Then(/^the name should equal to "([^"]*)"$/, function (name, next){
		assert.strictEqual(this.deck.name, name)
		next()
	})

	this.When(/^I add the card to the deck$/, function (next){
		this.deck.set(this.card.id, this.card)
		next()
	})

	this.Then(/^it will be available as part of the deck in the future$/, function (next){
		assert.ok(
			this.deck.get(this.card.id),
			'could not find card that was added to deck'
		)
		next()
	})

	this.Given(/^I have a card I want to remove$/, function (next) {
		this.card = this.deck.values().next().value
		next()
	});

	this.When(/^I remove that card$/, function (next) {
		this.deck.delete(this.card.id)
		next()
	});

	this.Then(/^it will not be available as part of the deck in the future$/, function (next){
		assert.ok(
			!this.deck.get(this.card.id),
			'found card that was removed from deck'
		)
		next()
	})


	this.When(/^I save the deck$/, function (next){
		// @todo need to come back to saving things. Not necessary for right now
		next.pending()
	})

	this.Then(/^I should be able to access the deck later with those changes applied$/, function (next){
		// Write code here that turns the phrase above into concrete actions
		next.pending();
	});
}