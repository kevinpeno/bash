module Test.Main where

import Prelude
import Control.Monad.Eff (Eff)
import Node.Process (PROCESS)
import Control.Monad.Eff.Console (CONSOLE)
import Test.Spec (describe)
import Test.Spec.Reporter.Console (consoleReporter)
import Test.Spec.Runner (run)

import Test.Card (cardSpec)

main :: forall t1.Eff( process :: PROCESS, console :: CONSOLE | t1) Unit
main = run [consoleReporter] do
	describe "Bash" do
		cardSpec
