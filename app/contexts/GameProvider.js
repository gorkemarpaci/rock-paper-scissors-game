"use client";

import { createContext, useContext, useState } from "react";

const GameContext = createContext({});

export default function GameProvider({ children }) {
  const [loading, setLoading] = useState(0);
  const [score, setScore] = useState(0);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");
  const [roundEnded, setRoundEnded] = useState(false);
  const [resultText, setResultText] = useState("");
  const [hardMode, setHardMode] = useState(false);

  return (
    <GameContext.Provider
      value={{
        loading,
        setLoading,
        score,
        setScore,
        rulesModalOpen,
        setRulesModalOpen,
        userChoice,
        setUserChoice,
        houseChoice,
        setHouseChoice,
        roundEnded,
        setRoundEnded,
        resultText,
        setResultText,
        hardMode,
        setHardMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
