export var __useDefault = true;

class Card {
	constructor(name) {
		if( !name )
			throw new Error("a name is required")

		this.name = name;
	}
}

export default {
	create: function(name) {
		return new Card(name)
	}
}