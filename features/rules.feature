Feature: Rules
In order to describe the functionality of my game
As a Game Designer
I need a way to define rules and attach them to game constructs

	Scenario: Rules should create game actions
		Given I have a game
			And I have a rule named "Attack"
		When I apply the rule to the game
		Then the game should have an action called "Attack"

	Scenario: Rules should listen to game actions
		Given I have a game
			And I have a rule named "Attack"
			And I applied the rule to the game
		When the game action for "Attack" is triggered
		Then the "Attack" rule should resolve

	Scenario: Rules may have a target
		Given I have a game
			And I have a rule named "Attack"
			And the rule requires a target
			And I attached the rule to the game
			And I have a target
		When the game action for "Attack" is triggered
		Then the "Attack" rule should resolve

	Scenario: Rules may have more than one target
		Given I have a game
			And I have a rule named "Attack"
			And the rule requires a target
			And I attached the rule to the game
			And I have a multiple targets
		When the game action for "Attack" is triggered
		Then the "Attack" rule should resolve
