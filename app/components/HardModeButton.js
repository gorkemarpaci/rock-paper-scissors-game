"use client";

import React from "react";
import { useGame } from "../contexts/GameProvider";
import { Switch } from "antd";

export const HardModeButton = () => {
  const { hardMode, setHardMode, loading } = useGame();
  return (
    <div className="px-4 py-2 mb-4 sm:mb-0 flex justify-center items-center border border-solid border-white text-center font-barlow font-normal bg-transparent text-lg text-white rounded-lg">
      <span className="mr-2">HARD MODE</span>
      <Switch
        style={{ background: !hardMode && "grey", fontWeight: "bold" }}
        disabled={loading}
        unCheckedChildren="OFF"
        checkedChildren="ON"
        onClick={setHardMode}
      />
    </div>
  );
};
