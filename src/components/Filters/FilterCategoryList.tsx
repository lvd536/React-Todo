import { useShowFilters } from '../../store/useFilterStore'
import FilterCategory from './FilterCategory'

export default function FilterCategoryList() {
    const showFilters = useShowFilters()
      return (
      <div className={`flex items-center justify-between absolute top-20 w-full flex-col overflow-hidden gap-2 bg-indigo-500 rounded-xs ${showFilters ? 'h-0' : 'p-2 h-full'} transition-height duration-500`}>
              <FilterCategory filterType='all'/>
              <FilterCategory filterType='completed'/>
              <FilterCategory filterType='active'/>
      </div>
    )
}
