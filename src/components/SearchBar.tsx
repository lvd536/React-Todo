import Search from "../assets/Search";

export default function SearchBar() {
  return (
    <>
      <div className="font-second flex w-11/12 h-4 items-center justify-between ring-indigo-500 dark:ring-white ring-1 rounded-xs p-4 text-xs text-gray-500">
        <input type="search" name="" id="" className="w-12/12 h-6"/>
        <Search />
      </div>
    </>
  );
}
