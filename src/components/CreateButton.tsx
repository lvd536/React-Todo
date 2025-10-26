import Plus from "../assets/Plus";
import { setModalType, toggleModal } from "../store/useModalStore";

export default function CreateButton() {
  const handleClick = () => {
    setModalType(0);
    toggleModal();
  };
  return (
    <button
      type="button"
      className="font-main absolute right-2 bottom-8 bg-indigo-500 rounded-full p-3"
      onClick={handleClick}
    >
      <Plus />
    </button>
  );
}
