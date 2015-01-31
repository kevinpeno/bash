Feature: Card level affected by ability levels
To prepare for level restrictions on a card
As a User
I need be able to tell how changing abilities on a card alter the level of that card

	Scenario: Add an ability to a card
		Given I created a card
		When I add the ability to "jump" to the card
		Then the card should have a level of 1

	Scenario: Upgrade an ability on a card
		Given I created a card
			And I added the ability to "jump" to the card
		When I upgrade the "jump" ability by 1 level
		Then the card should have a level of 2

	Scenario: Downgrade an ability on a card that has more than one level
		Given I created a card
			And I added the ability to "jump" to the card
			And I upgraded the "jump" ability by 1 level
		When I downgrade the ability to "jump" by 1 level
		Then the card should have a level of 1

	Scenario: Downgrade an ability on a card that has one level
		Given I created a card
			And I added the ability to "jump" to the card
		When I downgrade the ability to "jump" by 1 level
		Then the card should have a level of 0

	Scenario: Remove last ability from a card
		Given I created a card
			And I added the ability to "jump" to the card
		When I remove the ability to "jump" from the card
		Then the card should have a level of 0

	Scenario: Remove an ability from a card when more than one is attached
		Given I created a card
			And I added the ability to "jump" to the card
			And I added the ability to "sneak" to the card
		When I remove the ability to "jump" from the card
		Then the card should have a level of 1
