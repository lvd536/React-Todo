import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <div className="flex w-full gap-15 items-center justify-between mt-10">
        <h1 className="text-2xl font-main">TODO LIST</h1>
        <ThemeToggle/>
    </div>
  )
}
