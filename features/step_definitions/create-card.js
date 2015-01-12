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
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.When(/^I access the card$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.Then(/^the card should have a unique identifier assigned$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.Then(/^a name equal to "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.Then(/^an attack value equal to "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.Then(/^an defense value equal to "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.Then(/^an movement value equal to "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.When(/^I set the attack value to \-(\d+)$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.When(/^I set the defense value to \-(\d+)$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})

	this.When(/^I set the movement value to \-(\d+)$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending()
	})
}