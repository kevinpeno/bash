module Test.Card.Trait where

import Prelude
import Card.Trait (emptyTrait, accLevel)
import Test.Spec (Spec, describe, it)
import Test.Spec.Assertions (shouldEqual)

traitSpec :: forall r. Spec r Unit
traitSpec =
	describe "Traits" $
		it "can return a value equal to current level plus provided value" do
			accLevel 1 emptyTrait
				`shouldEqual` 1

