import CreateButton from "./components/CreateButton";
import NavBar from "./components/NavBar";
import Modal from "./components/Todo/Modal";
import TodoList from "./components/Todo/TodoList";
import { useIsModalOpen } from "./store/useModalStore";
import { useTodos } from "./store/useTodoStore";

export default function App() {
  const isModalOpen = useIsModalOpen();
  const todos = useTodos();
  return (
    <div className="container relative mx-auto flex flex-col items-center h-screen">
      <NavBar/>
      <CreateButton/>
      {isModalOpen && <Modal/>}
      <TodoList todos={todos}/>
    </div>
  );
}