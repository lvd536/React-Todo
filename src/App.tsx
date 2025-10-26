import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl font-main">TODO LIST</h1>
      <NavBar/>
    </div>
  );
}