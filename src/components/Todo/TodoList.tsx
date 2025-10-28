import { useFilter, useSearchValue, useTodos, type ITodo } from "../../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodos();
  const searchValue = useSearchValue();
  const filterValue = useFilter();
  
  const getFilteredTodos = (todos: ITodo[], searchValue: string, filterValue: "all" | "completed" | "active") => {
    const filteredBySearchTodos = todos.filter((todo) => searchValue === '' ? true : todo.title.includes(searchValue))
    return filteredBySearchTodos.filter((todo) => filterValue === 'all' ? true : filterValue === 'completed' ? todo.completed : !todo.completed)
  }

  const filteredTodos = getFilteredTodos(todos, searchValue, filterValue);

  return (
    <div className="flex w-full flex-col gap-5 pt-10">
        {
          filteredTodos.map((todo, index) => (
            <TodoItem todo={todo} key={index}/>
          ))
        }
    </div>
  )
}