import CreateButton from "./components/CreateButton";
import NavBar from "./components/NavBar";
import CreationModal from "./components/Modals/CreationModal";
import DetailsModal from "./components/Modals/DetailsModal";
import EditModal from "./components/Modals/EditModal";
import TodoList from "./components/Todo/TodoList";
import { useIsModalOpen, useModalType } from "./store/useModalStore";
import { useActiveTodo } from "./store/useTodoStore";

export default function App() {
  const isModalOpen = useIsModalOpen();
  const modalType = useModalType();
  const activeTodo = useActiveTodo();
  return (
    <div className="container relative mx-auto flex flex-col items-center h-screen">
      <NavBar/>
      <CreateButton/>
      <TodoList/>
      {isModalOpen && modalType === 0 && activeTodo && <CreationModal/>}
      {isModalOpen && modalType === 1 && activeTodo && <EditModal/>}
      {isModalOpen && modalType === 2 && activeTodo && <DetailsModal/>}
    </div>
  );
}