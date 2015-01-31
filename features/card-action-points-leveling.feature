Feature: Card level affected by action points
To prepare for restrictions on how many times abilities can be used
As a User
I need be able to tell how changing my action points on a card alter the level of that card

	Scenario: Adding action points
		Given I have a card
		When I upgrade my action point total by 1
		Then the card should have a level of 1

	Scenario: Removing action points
		Given I have a card
			And I upgraded my action point total by 1
		When I downgrade my action point total by 1
		Then the card should have a level of 1
