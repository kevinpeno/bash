Feature: Action points
To allow for restrictions how often abilities can be used
And to add the appearance of a supply line requirement
As a System
I need to have a method to associate cost with using abilities

	Scenario: Adding action points
		Given I have a card
		When I use a point to increase my action point total
		Then the card should contain an action point total increased by one

	Scenario: Removing action points
		Given I have a card
		When I use a point to increase my action point total
		Then the card should contain an action point total increased by one

	Scenario: Using abilities
		Given I have a card
		And it has an ability
		And it has at least one action point
		When I use the ability
		Then the card's action points should be reduced by one

	Scenario: Deck cost of action points
		Given I have some cards that meet some strategic goal
			And I save them as a deck
			And each card has an action point
		When I check the total cost of the deck
		Then it should equal the total number of action points in the deck