Feature: Create a card
	Each card should have:
	* a unique identifier
	* a user-identified name
	* a toughness value
	* a supplies value
	* a list of abilities
	* a total point value accesible that is the sum of ability points and toughness

	Futher:
	* toughness and supplies must be at least one

	Scenario: Creating a card without a name
		When I try to create a card without a name
		Then I should see the error "a name is required"

	Scenario: Creating a card with a name
		Given I created a card with the name of "Test Character"
		When I access the card's properties
		Then the card should have a unique identifier assigned
			And a name equal to "Test Character"
			And an toughness value equal to 0
			And an supplies value equal to 0
			And an empty set of abilities

	Scenario: Setting and toughness value to less than 0
		Given I created a card with the name of "Test Character"
		When I set the toughness value to 0
		Then I should see the error "toughness and supplies values must be no less than 1"

	Scenario: Setting and supplies value to less than 0
		Given I created a card with the name of "Test Character"
		When I set the supplies value to -1
		Then I should see the error "toughness and supplies values must be no less than 1"
