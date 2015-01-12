Feature: Create a card
	Each card should have:
	* a unique identifier
	* a user-identified name
	* an attack value
	* a defense value
	* a movement value
	* a total point value accesible that is the sum of attack, defense, and movement values

	Futher:
	* attack, defense, and movement values should not be less than 0

	Scenario: Creating a card without a name
		When I try to create a card without a name
		Then I should see the error "a name is required"

	Scenario: Creating a card with a name
		Given I created a card with the name of "Test Character"
		When I access the card
		Then the card should have a unique identifier assigned
			And a name equal to "Test Character"
			And an attack value equal to "0"
			And an defense value equal to "0"
			And an movement value equal to "0"

	Scenario: Setting and attack value to less than 0
		Given I created a card with the name of "Test Character"
		When I set the attack value to -1
		Then I should see the error "attack, defense, and movement values must be no less than 0"

	Scenario: Setting and defense value to less than 0
		Given I created a card with the name of "Test Character"
		When I set the defense value to -1
		Then I should see the error "attack, defense, and movement values must be no less than 0"

	Scenario: Setting and movement value to less than 0
		Given I created a card with the name of "Test Character"
		When I set the movement value to -1
		Then I should see the error "attack, defense, and movement values must be no less than 0"
