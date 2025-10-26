import Plus from "../assets/Plus";
import { toggleModal } from "../store/useModalStore";

export default function CreateButton() {
  return (
    <button type="button" className="font-main absolute right-2 bottom-8 bg-indigo-500 rounded-full p-3" onClick={toggleModal}>
        <Plus/>
    </button>
  )
}
