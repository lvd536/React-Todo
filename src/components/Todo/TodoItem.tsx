import Bars from "../../assets/Bars";
import Edit from "../../assets/Edit";
import Remove from "../../assets/Remove";
import { toggleTodo, type ITodo } from "../../store/useTodoStore";

export default function TodoItem({todo}: {todo: ITodo}) {
  return (
    <div className="flex items-center justify-between gap-10" key={todo.id}>
      <div className="flex gap-10 items-center">
        <input type="checkbox" name="isCompleted" id={todo.id.toString()} className="appearance-none w-5 h-5 ring-1 ring-indigo-500 rounded-xs checked:bg-indigo-500 transition-colors duration-200" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
      <span className="font-main text-xl text-black dark:text-white">{todo.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <Bars todo={todo}/>
        <Edit todo={todo}/>
        <Remove id={todo.id}/>
      </div>
    </div>
  );
}
