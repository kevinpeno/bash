let privates = new WeakMap

export default class Card {
	constructor() {
		privates.set(
			this,
			{
				abilities: new Map(),
				actions: {
					total: 0
				}
			}
		)
	}

	get abilities() {
		return privates.get(this).abilities
	}

	get actions() {
		return privates.get(this).actions
	}

	get level() {
		let level = 0;

		for( let [k, v] of this.abilities ) {
			level += v.level
		}

		level += this.actions.total

		return level
	}
}

export class Ability {
	constructor() {
		this.level = 1
	}
}
