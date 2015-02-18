Feature: Restrict abilities by action point avilability
To allow for restrictions how many times abilities can be used
As a System
I need to have a method to associate cost with using abilities

	Scenario: Using abilities
		Given I created a card
			And I added the ability to "jump" to the card
			And I increased the action point total by 1
		When I use the "jump" ability
		Then the card should have 0 available action points

	Scenario: Using abilities without available points
		Given I created a card
			And I added the ability to "jump" to the card
		When I use the "jump" ability
		Then an error should occur