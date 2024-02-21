"use client";

import React from "react";
import { useGame } from "../contexts/GameProvider";
import { HardModeButton } from "./HardModeButton";

const Footer = () => {
  const { setRulesModalOpen } = useGame();

  return (
    <div className="w-full px-8 mb-4 sm:mb-0 grow flex flex-col sm:flex-row items-center sm:items-end justify-end sm:justify-between">
      <HardModeButton />
      <button
        onClick={() => setRulesModalOpen(true)}
        className="px-8 py-2 border border-solid border-white text-center font-barlow font-normal bg-transparent text-lg text-white rounded-lg"
        type="button"
      >
        RULES
      </button>
    </div>
  );
};

export default Footer;
