import CreateButton from "./components/CreateButton";
import NavBar from "./components/NavBar";
import CreationModal from "./components/Todo/Modals/CreationModal";
import DetailsModal from "./components/Todo/Modals/DetailsModal";
import EditModal from "./components/Todo/Modals/EditModal";
import TodoList from "./components/Todo/TodoList";
import { useIsModalOpen, useModalType } from "./store/useModalStore";
import { useActiveTodo, useTodos } from "./store/useTodoStore";

export default function App() {
  const isModalOpen = useIsModalOpen();
  const modalType = useModalType();
  const todos = useTodos();
  const activeTodo = useActiveTodo();
  return (
    <div className="container relative mx-auto flex flex-col items-center h-screen">
      <NavBar/>
      <CreateButton/>
      <TodoList todos={todos}/>
      {isModalOpen && modalType === 0 && activeTodo && <CreationModal/>}
      {isModalOpen && modalType === 1 && activeTodo && <EditModal/>}
      {isModalOpen && modalType === 2 && activeTodo && <DetailsModal/>}
    </div>
  );
}