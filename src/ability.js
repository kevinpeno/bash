const defaultOptions = {
	"level": 0
}

const props = new WeakMap()

export default class Ability {
	constructor( options ) {
		props.set(this, Object.assign(defaultOptions, options))
	}

	get level() {
		return props.get(this).level
	}

	set level( value ) {
		const level = parseInt( value, 10 )
		const oldProps = props.get(this)

		props.set(this, Object.assign(oldProps, { level }))
	}
}

module.exports = Ability
