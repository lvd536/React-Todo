import FilterButton from "./FilterButton"
import FilterCategoryList from "./FilterCategoryList"

export default function Filters() {
  return (
    <div className="flex relative flex-col h-27 items-center justify-center w-5/12 md:w-2/12 xl:w:1/12">
        <FilterButton></FilterButton>
        <FilterCategoryList/>
    </div>
  )
}
