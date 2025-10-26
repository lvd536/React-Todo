import type { ITodo } from "../../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList({todos} : {todos: ITodo[]}) {
  return (
    <div className="flex w-full flex-col gap-5 pt-15">
        {
          todos.map((todo, index) => (
            <TodoItem todo={todo} key={index}/>
          ))
        }
    </div>
  )
}