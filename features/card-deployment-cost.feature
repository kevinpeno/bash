Feature: Deployment cost
To allow for restrictions on points allocated to a match
As a System
I need to control the cost of cards

	Scenario: Adding an ability
		Given I have a card
		When I add an ability
		Then the total cost of the card should be increased by one

	Scenario: Upgrading an ability
		Given I have a card
			And it has an ability
		When I upgrade that ability by a point
		Then the total cost of the card should be increased by one

	Scenario: Downgrade an ability
		Given I have a card
			And it has an ability
			And I've upgraded that ability by a point
		When I downgrade that ability by a point
		Then the total cost of the card should be decreased by one

	Scenario: Removing an ability
		Given I have a card
			And it has an ability
		When I remove that ability
		Then the total cost of the card should be decreased by one

	Scenario: Deck cost of abilities
		Given I have some cards that meet some strategic goal
			And I save them as a deck
			And each card has an ability
		When I check the total cost of the deck
		Then it should equal the total number of abilities in the deck
