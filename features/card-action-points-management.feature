Feature: Managing action points
To prepare for restrictions on how many times abilities can be used
As a User
I need to have a method to manage action points on a card

	Scenario: Adding action points
		Given I created a card
		When I increase the action point total by 1
		Then the card should have an action point total of 1

	Scenario: Removing action points
		Given I created a card
			And I increased the action point total by 1
		When I decrease the action point total by 1
		Then the card should have an action point total of 0
