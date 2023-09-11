import Image from "next/image";
import { SELECT_OPTIONS, WEAPONS } from "./constants";
import PaperIcon from "../assets/icon-paper.svg";
import ScissorsIcon from "../assets/icon-scissors.svg";
import RockIcon from "../assets/icon-rock.svg";

export const renderOptions = (
  optionType = "",
  additionalClassnames = "",
  callback = () => null
) => {
  switch (optionType) {
    case SELECT_OPTIONS.PAPER:
      return (
        <div
          onClick={() => callback(SELECT_OPTIONS.PAPER)}
          className={`shadow-buttonBottomShadow p-6 cursor-pointer scale-75 sm:scale-100 hover:scale-110 transition ease-in-out duration-300 rounded-full bg-gradient-to-b from-paper2 to-paper1 ${additionalClassnames}`}
        >
          <div className="shadow-buttonTopShadow py-7 px-8 rounded-full bg-white">
            <Image src={PaperIcon} alt="paper-icon" />
          </div>
        </div>
      );
    case SELECT_OPTIONS.SCISSORS:
      return (
        <div
          onClick={() => callback(SELECT_OPTIONS.SCISSORS)}
          className={`shadow-buttonBottomShadow p-6 cursor-pointer scale-75 sm:scale-100 hover:scale-110 transition ease-in-out duration-300 rounded-full bg-gradient-to-b from-scissors2 to-scissors1 ${additionalClassnames}`}
        >
          <div className="shadow-buttonTopShadow py-7 px-8 rounded-full bg-white">
            <Image src={ScissorsIcon} alt="scissors-icon" />
          </div>
        </div>
      );
    case SELECT_OPTIONS.ROCK:
      return (
        <div
          onClick={() => callback(SELECT_OPTIONS.ROCK)}
          className={`shadow-buttonBottomShadow p-6 cursor-pointer scale-75 sm:scale-100 hover:scale-110 transition ease-in-out duration-300 rounded-full bg-gradient-to-b from-rock2 to-rock1 ${additionalClassnames}`}
        >
          <div className="shadow-buttonTopShadow p-8 rounded-full bg-white">
            <Image src={RockIcon} alt="rock-icon" />
          </div>
        </div>
      );
    default:
      return;
  }
};

export const runHouseSelection = (
  userChoice = "",
  hardMode = false,
  setHouseChoice = () => null,
  setRoundEnded = () => null,
  setLoading = () => null
) => {
  setLoading(true);
  const timerID = setInterval(() => {
    const index = Math.floor(
      Math.random() * Object.keys(SELECT_OPTIONS).length
    );
    setHouseChoice((prev) =>
      prev === Object.values(SELECT_OPTIONS)[index]
        ? Object.values(SELECT_OPTIONS)[
            (index + 1) % Object.values(SELECT_OPTIONS).length
          ]
        : Object.values(SELECT_OPTIONS)[index]
    );
  }, 500);
  setTimeout(() => {
    if (hardMode) {
      setHouseChoice(
        Math.floor(Math.random() * 2)
          ? WEAPONS[userChoice]?.weakTo
          : SELECT_OPTIONS[userChoice]
      );
    }
    clearInterval(timerID);
    setRoundEnded(true);
    setLoading(false);
  }, 5000);
};
