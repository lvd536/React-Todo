import { useFilter, useSearchValue, useTodos } from "../../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodos();
  const searchValue = useSearchValue();
  const filterValue = useFilter();
  const filteredBySearchTodos = todos.filter((todo) => searchValue === '' ? true : todo.title.includes(searchValue))
  const filteredByFilterTodos = filteredBySearchTodos.filter((todo) => filterValue === 'all' ? true : filterValue === 'completed' ? todo.completed : !todo.completed)
  return (
    <div className="flex w-full flex-col gap-5 pt-10">
        {
          filteredByFilterTodos.map((todo, index) => (
            <TodoItem todo={todo} key={index}/>
          ))
        }
    </div>
  )
}