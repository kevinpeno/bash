module Card where

import Card.Trait (Trait, accLevel)
import Data.Foldable (foldl)

type Card = {
	traits :: Array Trait
}

emptyCard :: Card
emptyCard = {
	traits: []
}

getLevel :: Card -> Int
getLevel card = foldl accLevel 0 card.traits
