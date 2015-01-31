Feature: Deck level is the sum of all card levels
To prepare for level restrictions on a deck
As a User
I need be able to tell how changing my card levels within the deck alter the level of that deck

	Scenario: Add a card
		Given I created a deck
			And I created a card
		When I add the card to the deck
		Then the deck should have a level equal to the level of all cards

	Scenario: Remove a card
		Given I created a deck
			And I created a card
			And I added the card to the deck
		When I remove the card from the deck
		Then the deck should have a level equal to the level of all cards
