"use client";

import React, { useEffect } from "react";
import { useGame } from "../contexts/GameProvider";
import { TEXTS, WEAPONS } from "./constants";

const WinnerDecision = () => {
  const {
    setScore,
    userChoice,
    setUserChoice,
    houseChoice,
    resultText,
    setResultText,
    setRoundEnded,
  } = useGame();

  useEffect(() => {
    if (userChoice === houseChoice) {
      setResultText(TEXTS.DRAW);
    } else if (WEAPONS[userChoice].strongTo === houseChoice) {
      setResultText(TEXTS.YOU_WON);
      setScore((prev) => prev + 1);
    } else {
      setResultText(TEXTS.HOUSE_WON);
      setScore((prev) => prev - 1);
    }
  }, [setScore, userChoice, houseChoice, setResultText]);

  const handlePlayAgain = () => {
    setRoundEnded(false);
    setResultText("");
    setUserChoice("");
  };

  return (
    <span className="mt-16 flex flex-col justify-start items-center font-barlow font-bold tracking-widest text-5xl text-white text-center">
      {resultText}
      <button
        onClick={handlePlayAgain}
        className="mt-4 w-full py-4 text-center font-barlow font-semibold bg-white text-xl text-blue-900 rounded-lg"
        type="button"
      >
        PLAY AGAIN
      </button>
    </span>
  );
};

export default WinnerDecision;
