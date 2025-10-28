import { toggleModal } from "../../store/useModalStore";
import { useActiveTodo } from "../../store/useTodoStore";

export default function DetailsModal() {
  const activeTodo = useActiveTodo();
  const handleClick: () => void = () => {
    toggleModal();
  };

  return (
    <div className="flex font-second fixed items-center justify-center w-screen h-screen bg-gray-500/30 z-2">
      <div className="flex text-black dark:text-white relative flex-col items-center sm:w-3/6 bg-white dark:bg-black ring-white dark:rind-black ring-1 rounded-xl gap-5 py-5 px-10 animate-modal">
        <span className="flex items-center justify-center absolute w-6 h-6 top-5 right-5 bg-indigo-500 rounded-xs p-2"onClick={handleClick}>✖</span>
        <span className="font-main pt-5">TODO: {activeTodo.title} details</span>
        <span className="flex flex-col items-center justify-center gap-3">
            <span className="font-main">Description</span>
            <span className="font-main wrap-anywhere">{activeTodo.description}</span>
        </span>
      </div>
    </div>
  );
}
