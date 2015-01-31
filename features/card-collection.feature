Feature: Card collection
In order to create a collection of cards
As a User
I need to manage that collection

	Scenario: Setting the name of the card
		Given I created a card
		When I name the card "Epic Awesome Card"
		Then the name of the card should set to "Epic Awesome Card"

	Scenario: Naming a deck of cards
		Given I created a deck
		When I set the name of the deck to "Undefeatable Deck"
		Then the name of the deck should be set to "Undefeatable Deck"

	Scenario: Adding a card to an existing deck
		Given I created a deck
			And I created a card
		When I add the card to the deck
		Then the card should be included in the deck

	Scenario: Removing a card from an existing deck
		Given I created a deck
			And I created a card
			And I added the card to the deck
		When I remove the card from the deck
		Then the card should no longer be included in the deck
