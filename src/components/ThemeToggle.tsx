import Moon from "../assets/Moon";
import Sun from "../assets/Sun";

export default function ThemeToggle() {
  return (
    <div className="flex relative items-center justify-between w-20 h-10 bg-indigo-500 rounded-full py-1 px-2">
      <Moon/>
      <Sun/>
      <div className="absolute h-full w-10 left-0 top-0 bg-white rounded-full"></div>
    </div>
  )
}
