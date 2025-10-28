import { toggleShowFilters, useFilter, useShowFilters } from "../../store/useFilterStore"

export default function FilterButton() {
    const currentFilter = useFilter()
    const showFilters = useShowFilters()
    const handleClick = () => {
        toggleShowFilters()
    }
    return (
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
  )
}
