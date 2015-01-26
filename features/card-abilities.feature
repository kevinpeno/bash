Feature: Card abilities
To allow for a customized strategy for a card
As a System
I need to manage a card's capabilities

	Scenario: Adding abilities
		Given I have a card
		When I add an ability
		Then the ability should be added to the list of abilities

	Scenario: Upgrading abilities
		Given I have a card
		And it has an ability
		When I upgrade that ability by 1 point
		Then the ability should appear to have 2 points in the list of abilities

	Scenario: Downgrade abilities
		Given I have a card
		And it has an ability
		And I've upgraded that ability by 1 point
		When I downgrade that ability by 1 point
		Then the ability should appear to have 1 point in the list of abilities

	Scenario: Removing abilities
		Given I have a card
		And it has an ability
		When I remove that ability
		Then the ability should not be in the list of abilities
