module Test.Card where

import Prelude
import Card (getLevel, emptyCard)
import Test.Card.Trait (traitSpec)
import Test.Spec (Spec, describe, it)
import Test.Spec.Assertions (shouldEqual)

cardSpec :: forall r. Spec r Unit
cardSpec =
	describe "Card" do
		basicSpec
		traitSpec

basicSpec :: forall r. Spec r Unit
basicSpec =
	describe "Basic" do
		it "has a level equal to the level of all abilities" do
			getLevel emptyCard
				`shouldEqual` 0
