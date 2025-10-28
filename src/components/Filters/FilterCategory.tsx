import { setFilterValue, useFilter } from "../../store/useFilterStore"

export default function FilterCategory({filterType}: {filterType: "all" | "completed" | "active"}) {
  const currentFilter = useFilter()
  return (
    <span className={`font-main transition-colors duration-400 ${currentFilter === filterType ? 'text-white' : 'text-black'}`} onClick={() => setFilterValue(filterType)}>{filterType[0].toUpperCase() + filterType.slice(1)}</span>
  )
}
