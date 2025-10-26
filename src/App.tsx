import CreateButton from "./components/CreateButton";
import NavBar from "./components/NavBar";
import Modal from "./components/Todo Modal/Modal";
import { useIsModalOpen } from "./store/useModalStore";

export default function App() {
  const isModalOpen = useIsModalOpen();
  return (
    <div className="container relative mx-auto flex flex-col items-center h-screen">
      <NavBar/>
      <CreateButton/>
      {isModalOpen && <Modal/>}
    </div>
  );
}