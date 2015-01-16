var System = require('systemjs')

module.exports = function(){
	this.When(/^I try to create a card without a name$/, function (callback) {
		var world = this

		System.import('./src/card').then(function(Card){
			try {
				Card.create()
				callback.fail("empty name didn't trigger failure")
			} catch(e) {
				world.error = e.message
				callback()
			}
		})
		.catch(function(err){
			callback.fail(err)
		})
	})

	this.Then(/^I should see the error "([^"]*)"$/, function (arg1, callback) {
		if( this.error == arg1)
			callback()
		else
			callback.fail("message doesn't match expectation")
	})

	this.Given(/^I created a card with the name of "([^"]*)"$/, function (arg1, callback) {
		System.import('./src/card').then(function(Card){
			try {
				this.card = Card.create(arg1);
				callback()
			} catch(e) {
				callback.fail(e.message)
			}
		})
		.catch(function(err){
			callback.fail(err)
		})
	})

	this.When(/^I access the card's properties$/, function (callback) {
		callback();
	});

	this.Then(/^the card should have a unique identifier assigned$/, function (callback) {
		if( !card.id )
			callback.fail("Card doesn't have a unique id")
		else
			callback()
	});

	this.Then(/^a name equal to "([^"]*)"$/, function (arg1, callback) {
		if( card.name !== arg1)
			callback.fail('Card name is ' + card.name + ' when it should equal ' + arg1)
		else
			callback()
	});

	this.Then(/^an toughness value equal to (\d+)$/, function (arg1, callback) {
		if( card.toughness !== 1)
			callback.fail('Card toughness does not default to 1')
		else
			callback()
	});

	this.Then(/^an supplies value equal to (\d+)$/, function (arg1, callback) {
		if( card.supplies !== 1)
			callback.fail('Card supplies does not default to 1')
		else
			callback()
	});

	this.Then(/^an empty set of abilities$/, function (callback) {
		if( !(card.abilities instanceof Array) )
			callback.fail('Card needs to have an empty abilities property')
		else
			callback()
	});

	this.When(/^I set the toughness value to (\d+)$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^I set the supplies value to \-(\d+)$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});
}