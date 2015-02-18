Feature: Card level affected by action points
To prepare for restrictions on how many times abilities can be used
As a User
I need be able to tell how changing my action points on a card alter the level of that card

	Scenario: Adding action points
		Given I created a card
		When I increase the action point total by 1
		Then the card should have a level of 1

	Scenario: Removing action points
		Given I created a card
			And I increased the action point total by 1
		When I decrease the action point total by 1
		Then the card should have a level of 0
