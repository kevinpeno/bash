export var __useDefault = true
var uuid = require('uuid');

class Card {
	constructor() {
		this.id = uuid();
	}
}

export default {
	create: function() {
		return new Card()
	}
}