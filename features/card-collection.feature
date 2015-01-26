Feature: Card collection
In order to create a collection of cards
As a System
I need to have a way to manage that collection

	Scenario: Creating a card
		When I create a new card
		Then a unique card should exist

	Scenario: Saving a card
		Given I have a card
		When I save the card
		Then I should be able to access the card later with those changes applied

	Scenario: Setting the name of the card
		Given I have a card
		When I set the name of the card to "Test Character"
		Then the name of the card should be "Test Character"

	Scenario: Creating a reusable deck of cards
		Given I have some cards that meet some strategic goal
		When I create a deck with those cards
		Then I will have a unique deck to access later

	Scenario: Naming a reusable deck of cards
		Given I have some cards that meet some strategic goal
			And I create a deck with those cards
		When I set the name of the deck to "Test deck"
		Then the name should equal to "Test deck"

	Scenario: Adding a card to an existing deck
		Given I have some cards that meet some strategic goal
			And I create a deck with those cards
			And I have a card
		When I add the card to the deck
		Then it will be available as part of the deck in the future

	Scenario: Removing a card from an existing deck
		Given I have some cards that meet some strategic goal
			And I create a deck with those cards
			And I have a card I want to remove
		When I remove that card
		Then it will not be available as part of the deck in the future

	Scenario: Saving a deck
		Given I have some cards that meet some strategic goal
			And I create a deck with those cards
		When I save the deck
		Then I should be able to access the deck later with those changes applied
