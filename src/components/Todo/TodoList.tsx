import detectiveLight from "../../assets/detectiveLight.svg"
import detectiveDark from "../../assets/detectiveDark.svg"
import { useFilter } from "../../store/useFilterStore";
import { useSearchValue } from "../../store/useSearchStore";
import { useTodos, type ITodo } from "../../store/useTodoStore";
import TodoItem from "./TodoItem";
import { useTheme } from "../../store/useThemeStore";

export default function TodoList() {
  const todos = useTodos();
  const searchValue = useSearchValue();
  const filterValue = useFilter();
  const theme = useTheme();

  const getFilteredTodos = (todos: ITodo[], searchValue: string, filterValue: "all" | "completed" | "active") => {
    const filteredBySearchTodos = todos.filter((todo) => searchValue === '' ? true : todo.title.includes(searchValue))
    return filteredBySearchTodos.filter((todo) => filterValue === 'all' ? true : filterValue === 'completed' ? todo.completed : !todo.completed)
  }

  const filteredTodos = getFilteredTodos(todos, searchValue, filterValue);

  const emptyTodosElement = () => { 
    return (
      <div className="flex flex-col items-center justify-center gap-5">
        <img src={theme === 'light' ? detectiveLight : detectiveDark} alt="empty todos" className='w-110 h-110' />
        <span className="font-main text-black text-2xl dark:text-white">Empty...</span>
      </div>
    )
  };
  

  return (
    <div className="flex w-full flex-col gap-5 pt-10">
        {
          filteredTodos.length === 0 ? emptyTodosElement() :
          filteredTodos.map((todo, index) => (
            <TodoItem todo={todo} key={index}/>
          ))
        }
    </div>
  )
}