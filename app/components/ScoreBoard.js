"use client";

import { TEXTS } from "./constants";
import { useGame } from "../contexts/GameProvider";

export default function ScoreBoard() {
  const { score } = useGame();
  return (
    <div className="h-full min-w-scoreBoardWidth font-barlow p-4 bg-white rounded-xl flex flex-col justify-between items-center">
      <span className="text-scoreText tracking-widest text-md">
        {TEXTS.SCORE}
      </span>
      <span className="text-darkText text-6xl">{score || 0}</span>
    </div>
  );
}
