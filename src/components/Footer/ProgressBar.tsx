import { useTodos } from "../../store/useTodoStore";

export default function ProgressBar() {
  const todos = useTodos();
  const completionPercentage = todos.length > 0 
    ? Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100)
    : 0;
  return (
    <div className="flex items-center gap-5 absolute left-2 bottom-11">
      <span className="tracking-wider font-second text-black dark:text-white">
        {todos.filter((todo) => todo.completed === true).length}/{todos.length}
      </span>
      <div className="w-[50vw] h-3 ring-1 ring-gray-300/80 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-400/50 dark:bg-indigo-500/80 rounded-full"
          style={{ width: `${completionPercentage}%`, transition: 'all .8s' }}
        ></div>
      </div>
    </div>
  )
}
