import { useEffect, useState } from "react";
import { setSearchValue, useSearchValue } from "../../store/useSearchStore";

export default function SearchBar() {
  const [search, setSearch] = useState<string>(useSearchValue());
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(search.toLowerCase());
  }
  useEffect(() => {
    if (search === '') setSearchValue('');
  }, [search])
  return (
    <>
        <form className="font-second flex items-center w-full h-4 justify-between gap-5" onSubmit={handleSubmit}>
          <input type="search" name="searchBar" id="searchBar" className="w-full h-full ring-indigo-500 dark:ring-white ring-1 rounded-xs p-4 text-xs text-gray-500" value={search} onChange={handleChange}/>
          <button type="submit" className="bg-indigo-500 rounded-xs w-34 h-9">Search</button>
        </form>
    </>
  );
}
