Name:
Health:
Supplies:
Abilities:
-

Ability list:
- Attack
-- Ability to attack other units; 1 attack point means 1 damage to another unit
- Range
-- Ability to attack at distance; 1 range point means attacking a unit 1 space away; requires at least 1 attack point
- Defense
-- Ability to defend attacks; Deflect 1 attack point of damage per defense point
- Move
-- Ability to mvoe around the board; 1 space of movement per movement point per turn


Card
	hit points
		life of card
		triggers
			take damage
		attributes
			health
	action points
		capability of card to do things
		triggers
			take action
		attributes
			action points
	attack
		power to do damage or assault location
		action
			do damage
		attributes
			power
			range
			area of effect
	defense
		action
			prevent damage
		attributes
			power
			range
			area of effect
	move
		ability to move around
		action
			move
		attributes
			range
	identify
		ability to identify other cards
		action
			identify
		attributes
			power


Card "A"
	Capability "Hit points"
		rule
			"increase level"
				when "during card building"
				order of precedence "immediate"
				trigger
					"increase base hp"
			"take damage"
				when "during game turn"
				order of precedence "last"
				trigger
					"reduce current hp"
		attribute
			"hp"

	Capability "Attack"
		rule
			"increase level"
				when "during card building"
				order of precedence "immediate"
				trigger
					"increase power"
			"do damage to X"
				when "during game turn"
				order of precedence "last"
				trigger
					"reduce health"
		attribute
			"power"
			"range"



Given I have Card "A"
	And Card "A" has a base attack of 2
And I have a Card "B"
	And Card "B" has a base health of 3
When Card "A" attacks Card "B"
Then Card "B" should have a current health of 1


Basic attack action stack if target has "Defense" and "Health":
	1. "User A" targets "Card X1" with "Card A1" from "Card X2"
	2. "Card A1" verifies "Card X1" is withing "Attack Range"
	3. "Card A1" triggers "do damage" on "Card X1" for "Attack Power (a)"
	4. "Card X1" reduces "a" by "Defense (d)"
	5. "Card X1" reduces "Current Health" by "(a - d)"
	6. If "Card X1" has "Current Health" that is less than "1", destroy it
	7. If "Card X1" is destroyed, and is a container, destroy all cards it contains

Rule
	Defines a particular functionality of the game

Action
	A rule that is triggered by some form of user interaction

	ex. Move, Attack, Defend

Ruleset
	Defines a combination of rules and/or actions that are designed to work together

Capability
	Term to describe a ruleset being applied to a card

==========================================================================
Attack [target, Card] ->
	modify damage (Card)(damage)
	modify damage (target)(damage)
	validate damage (damage)
	take damage (target)(damage)

Attack [target, Card] ->
	modify damage (Card)(damage)
	take damage (target)(damage)
		modify damage (damage)
		apply damage (damage)

Card->Attack(target)
	target->take damage( this->get damage() )

Card->trigger( 'Attack', target ) {
	target->trigger( 'take damage', this->get damage() )
}
==========================================================================
Format:
	Event Name [...targets](...arguments) {
		//describe change to arguments
	}

Definitions:
	...targets = callback should only trigger on Event Name when targets are equal to definition
	<- = describes setting event to be listened for
	-> = describes event being triggered

/**
	User initiated event definitions
**/

Attack (victum, aggressor) {
	damage: 0
	-> set damage [aggressor]( damage )
	-> set health [victum]( damage )
}

Target (victum, aggressor) {
	<- Attack [target, aggressor] {
		<- set damage [aggressor](damage) {
			damage + X
		}
	}
}

Defend (target) {
	health: 0
	-> set health [target](data.health) {
		health + X
	}
	<- End of Turn {
		<- Defend[target] {
			<- set health [target](data.health) {
				health - X
			}
		}
		-> Defend(target)
	}
}

End of Turn {
	-> any ()
}

/**
	Object Definitions
**/

AttackingTarget {
	<- Attack [victum, aggressor] {
		<- set damage [aggressor]( damage ) {
			damage + X
		}
	}
}

DefendingTarget {
	<- Defend [target] {
		<- set health [target](health) {
			health + X
		}
	}
}

/**
	Example flow
**/

UserD
	-> Defend [DefendingTarget]
		-> Defend (DefendingTarget)
			health: 0
			-> set health [DefendingTarget](health)
				DefendingTarget -> health + X
			health: 0 + 1X

UserA
	-> Target [DefendingTarget, AttackingTarget]
	-> Attack [DefendingTarget, AttackingTarget]
		-> Attack (DefendingTarget, AttackingTarget)
			damage: 0
			-> set damage [AttackingTarget](damage)
					Target -> damage + X
					AttackingTarget -> damage + X
			damage: 0 + 2X
			-> set health [DefendingTarget](damage)
					DefendingTarget -> health - X

Game
	-> End of Turn
		-> End of Turn ()
			-> Defend(DefendingTarget)
				health: 0
				-> set health [DefendingTarget](health)
					DefendingTarget -> health - X
				health: -1X

========================================================================

