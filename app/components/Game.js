"use client";

import { useGame } from "../contexts/GameProvider";
import OptionsBoard from "./OptionsBoard";
import ResultBoard from "./ResultBoard";

export default function Game() {
  const { userChoice } = useGame();
  return userChoice ? <ResultBoard /> : <OptionsBoard />;
}
