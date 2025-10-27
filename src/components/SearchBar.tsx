export default function SearchBar() {
  return (
    <>
        <form className="font-second flex items-center w-full h-4 justify-between gap-5 mt-6" action="">
          <input type="search" name="" id="" className="w-full h-full ring-indigo-500 dark:ring-white ring-1 rounded-xs p-4 text-xs text-gray-500"/>
          <button type="submit" className="bg-indigo-500 rounded-xs w-34 h-9">Search</button>
        </form>
    </>
  );
}
