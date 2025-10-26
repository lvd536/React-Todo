import CreateButton from "./components/CreateButton";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="container relative mx-auto flex flex-col items-center h-screen">
      <NavBar/>
      <CreateButton/>
    </div>
  );
}