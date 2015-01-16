export var __useDefault = true
var uuid = require('uuid');

class Card {
	constructor(name) {
		if( !name )
			throw new Error("a name is required")

		this.name = name;
		this.id = uuid();
		this.toughness = 1;
		this.supplies = 1;
		this.abilities = [];
	}
}

export default {
	create: function(name) {
		return new Card(name)
	}
}