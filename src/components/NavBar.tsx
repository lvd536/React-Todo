import Filters from "./Filters/Filters";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-15 items-center justify-between mt-10">
        <h1 className="text-2xl font-main text-black dark:text-white">
          TODO LIST
        </h1>
        <ThemeToggle />
      </div>
      <div className="flex w-full gap-5 items-center justify-between">
        <SearchBar></SearchBar>
        <Filters></Filters>
      </div>
    </div>
  );
}
