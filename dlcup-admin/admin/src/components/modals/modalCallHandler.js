import FullTimeModal from "./fullTimeModal";
import StartGameModal from "./startGameModal";

export default function ModalCallHandler(activeModal) {
  return activeModal.state === "FT" ? (
    <FullTimeModal {...activeModal} />
  ) : (
    <StartGameModal {...activeModal} />
  );
}
