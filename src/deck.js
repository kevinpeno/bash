export var __useDefault = true
var uuid = require('uuid');

class Deck extends Map {
	constructor(it) {
		super(it)
		this.id = uuid();
	}
}

export default {
	create: function() {
		return new Deck()
	}
}