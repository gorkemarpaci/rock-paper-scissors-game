"use client";

import Image from "next/image";
import BgTriangle from "../assets/bg-triangle.svg";
import { useGame } from "../contexts/GameProvider";
import { SELECT_OPTIONS } from "./constants";
import { renderOptions } from "./utils";

export default function OptionsBoard() {
  const { setUserChoice } = useGame();

  return (
    <div className="relative mt-32 w-auto h-auto flex flex-col justify-center items-center">
      <div>
        <Image src={BgTriangle} alt="bg-triangle" />
      </div>
      <div className="w-full absolute -top-16">
        {renderOptions(
          SELECT_OPTIONS.PAPER,
          "absolute -left-12",
          setUserChoice
        )}
        {renderOptions(
          SELECT_OPTIONS.SCISSORS,
          "absolute -right-12",
          setUserChoice
        )}
      </div>
      {renderOptions(SELECT_OPTIONS.ROCK, "absolute -bottom-8", setUserChoice)}
    </div>
  );
}
