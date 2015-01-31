Feature: Managing action points
To prepare for restrictions on how many times abilities can be used
As a User
I need to have a method to manage action points on a card

	Scenario: Adding action points
		Given I have a card
		When I upgrade my action point total by 1
		Then the card should contain an action point total of 1

	Scenario: Removing action points
		Given I have a card
			And I upgraded my action point total by 1
		When I downgrade my action point total by 1
		Then the card should contain an action point total of 1
