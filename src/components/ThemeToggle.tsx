import { useEffect } from "react";
import Moon from "../assets/Moon";
import Sun from "../assets/Sun";
import { toggleTheme, useTheme } from "../store/useThemeStore";

export default function ThemeToggle() {
  const theme = useTheme();

  useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);
  
  return (
    <div className="flex relative items-center justify-between w-20 h-10 bg-indigo-500 rounded-full py-1 px-2" onClick={toggleTheme}>
      <Moon/>
      <Sun/>
      <div className={`absolute h-full w-10 ${theme === 'dark' ? 'left-0' : 'left-1/2'} top-0 bg-black/50 rounded-full transition-all duration-300`}></div>
    </div>
  )
}
