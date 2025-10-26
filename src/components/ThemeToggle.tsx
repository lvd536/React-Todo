import Moon from "../assets/Moon";
import Sun from "../assets/Sun";

export default function ThemeToggle() {
  return (
    <div className="flex relative justify-between w-18 h-full bg-indigo-500 rounded-full p-1">
      <Moon/>
      <Sun/>
      <div className="absolute h-full w-8 left-0 top-0 bg-white rounded-full"></div>
    </div>
  )
}
