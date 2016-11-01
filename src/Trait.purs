module Card.Trait where

import Prelude((+))

type Trait = {
	level :: Int
}

emptyTrait :: Trait
emptyTrait = {
	level: 0
}

accLevel :: Int -> Trait -> Int
accLevel acc trait = acc + trait.level
