Feature: Rules
In order to describe the functionality of my game
As a Game Designer
I need a way to define rules and attach them to game constructs

	Scenario: Rules should have a way to be triggered
		Given I create a rule
		When I attach an empty trigger to it
		Then the result should be successful

	Scenario: Rules should be triggered against targets
		Given I create a rule
		When I add an empty trigger to it
			And I trigger it on a target
		Then the result should be successful

	Scenario: Rules should have a way to fail on trigger
		Given I create a rule
		When I define a trigger that will fail
			And I trigger it
		Then then an exception should be thrown
