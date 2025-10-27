import { useEffect, useState } from "react";
import { setSearchValue } from "../store/useTodoStore";

export default function SearchBar() {
  const [search, setSearch] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(search.toLowerCase());
  }
  useEffect(() => {
    console.log(search)
    if (search === '') setSearchValue('');
  }, [search])
  return (
    <>
        <form className="font-second flex items-center w-full h-4 justify-between gap-5 mt-6" action="" onSubmit={handleSubmit}>
          <input type="search" name="" id="" className="w-full h-full ring-indigo-500 dark:ring-white ring-1 rounded-xs p-4 text-xs text-gray-500" value={search} onChange={handleChange}/>
          <button type="submit" className="bg-indigo-500 rounded-xs w-34 h-9">Search</button>
        </form>
    </>
  );
}
