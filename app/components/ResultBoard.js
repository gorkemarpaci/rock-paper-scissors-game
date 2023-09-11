"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useGame } from "../contexts/GameProvider";
import { TEXTS } from "./constants";
import { renderOptions, runHouseSelection } from "./utils";
import WinnerDecision from "./WinnerDecision";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function ResultBoard() {
  const {
    userChoice,
    houseChoice,
    setHouseChoice,
    roundEnded,
    setRoundEnded,
    setLoading,
    hardMode,
    loading,
  } = useGame();

  const runHouseSelectionCallback = useCallback(
    () =>
      runHouseSelection(
        userChoice,
        hardMode,
        setHouseChoice,
        setRoundEnded,
        setLoading
      ),
    [userChoice, hardMode, setHouseChoice, setRoundEnded, setLoading]
  );

  const userSelection = useMemo(
    () => renderOptions(userChoice, "pointer-events-none"),
    [userChoice]
  );

  const houseSelection = useMemo(
    () => renderOptions(houseChoice, "pointer-events-none"),
    [houseChoice]
  );

  useEffect(() => {
    runHouseSelectionCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const antSpinIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="w-full lg:w-2/5 mt-16 flex flex-col justify-start items-center">
      <div className="w-full flex flex-row justify-between items-end sm:items-start">
        <div className="min-h-selectedItemHeight min-w-selectedItemWidth flex flex-col-reverse sm:flex-col justify-between items-center shrink-0 grow-0 font-barlow font-bold tracking-widest text-base text-white">
          <span className="sm:mb-8  whitespace-nowrap text-ellipsis">
            {TEXTS.YOU_PICKED}
          </span>
          {userSelection}
        </div>
        <div className="min-h-selectedItemHeight min-w-selectedItemWidth flex flex-col-reverse sm:flex-col justify-between items-center shrink-0 grow-0 font-barlow font-bold tracking-widest text-base text-white">
          <span className="relative sm:mb-8 whitespace-nowrap text-ellipsis">
            {loading ? (
              <>
                <span className="mr-2">{TEXTS.HOUSE_PICKING}</span>
                <Spin className="absolute -right-6" indicator={antSpinIcon} />
              </>
            ) : (
              TEXTS.HOUSE_PICKED
            )}
          </span>
          {houseSelection}
        </div>
      </div>
      {roundEnded && <WinnerDecision />}
    </div>
  );
}
