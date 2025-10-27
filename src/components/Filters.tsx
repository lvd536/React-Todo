import { useState } from "react"
import { setFilterValue, useFilter } from "../store/useTodoStore"

export default function Filters() {
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const currentFilter = useFilter()
  const handleClick = () => {
    setShowFilters(!showFilters)
  }
  const setFilter = (filter: "all" | "completed" | "active") => {
    setFilterValue(filter)
  }
  return (
    <div className="flex relative flex-col h-27 items-center justify-center w-5/12 md:w-2/12 xl:w:1/12">
        <button className="font-second flex items-center justify-between px-3 h-9 w-full bg-indigo-500 rounded-xs" onClick={handleClick}>
          <span>{currentFilter[0].toUpperCase() + currentFilter.slice(1)}</span>
          <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg" className={`scale-125 transition-transform duration-400 ${showFilters && 'rotate-z-90'}`}>
            <path
              d="M3.5 3.5L0.5 0.5"
              stroke="#F7F7F7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 0.5L3.5 3.5"
              stroke="#F7F7F7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={`flex items-center justify-between absolute top-20 w-full flex-col overflow-hidden gap-2 bg-indigo-500 rounded-xs ${showFilters === false ? 'h-0' : 'p-2 h-full'} transition-height duration-500`}>
            <span className={`font-main transition-colors duration-400 ${currentFilter === 'all' ? 'text-white' : 'text-black'}`} onClick={() => setFilter("all")}>All</span>
            <span className={`font-main transition-colors duration-400 ${currentFilter === 'completed' ? 'text-white' : 'text-black'}`} onClick={() => setFilter("completed")}>Completed</span>
            <span className={`font-main transition-colors duration-400 ${currentFilter === 'active' ? 'text-white' : 'text-black'}`} onClick={() => setFilter("active")}>Active</span>
        </div>
    </div>
  )
}
