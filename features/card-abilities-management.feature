Feature: Card abilities
To allow for a customized strategy for a card
As a User
I need to manage a card's unique capabilities

	Scenario: Adding an ability
		Given I created a card
		When I add the ability to "jump" to the card
		Then the ability to "jump" should be attached to the card
			And the "jump" ability should have a level of 1

	Scenario: Upgrading an ability
		Given I created a card
			And I added the ability to "jump" to the card
		When I upgrade the "jump" ability by 1 level
		Then the "jump" ability should have a level of 2

	Scenario: Downgrade ability that has more than one level
		Given I created a card
			And I added the ability to "jump" to the card
			And I upgraded the "jump" ability by 1 level
		When I downgrade the ability to "jump" by 1 level
		Then the "jump" ability should have a level of 1

	Scenario: Downgrade ability that has one level
		Given I created a card
			And I added the ability to "jump" to the card
		When I downgrade the ability to "jump" by 1 level
		Then the ability to "jump" should no longer be attached to the card

	Scenario: Removing an ability
		Given I created a card
			And I added the ability to "jump" to the card
		When I remove the ability to "jump" from the card
		Then the ability to "jump" should no longer be attached to the card
