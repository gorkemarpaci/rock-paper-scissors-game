"use client";

import Image from "next/image";
import RulesImage from "../assets/image-rules.svg";
import CloseIcon from "../assets/icon-close.svg";
import { useGame } from "../contexts/GameProvider";
import { Modal } from "antd";

export const RulesModal = () => {
  const { rulesModalOpen, setRulesModalOpen } = useGame();

  const handleCloseModal = () => setRulesModalOpen(false);

  return (
    <Modal
      open={rulesModalOpen}
      centered
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      closeIcon={null}
      footer={null}
    >
      <div className="flex flex-col justify-start items-center">
        <span className="text-center font-barlow font-semibold bg-transparent text-lg text-blue-900">
          RULES
        </span>
        <Image className="my-4" src={RulesImage} alt="rules" />
        <Image
          onClick={handleCloseModal}
          className="mt-3 cursor-pointer"
          src={CloseIcon}
          alt="close"
        />
      </div>
    </Modal>
  );
};
