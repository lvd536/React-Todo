import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface ITodo {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

interface ITodoStore {
    todos: ITodo[],
    addTodo: (todo: ITodo) => void,
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void,
}

const todoStore: StateCreator<ITodoStore, [["zustand/immer", never], ["zustand/persist", unknown]]> = (set) => ({
    todos: [],
    addTodo: (todo: ITodo) => {
                set((s: ITodoStore) => {
                    s.todos.push(todo)
        })
    },
    toggleTodo: (id: number) => {
        set((s: ITodoStore) => {
            const todo = s.todos.find(t => t.id === id)
            if (todo) {
                todo.completed = !todo.completed
            }
        })
    },
    removeTodo: (id: number) => {
        set((s: ITodoStore) => {
            s.todos = s.todos.filter(t => t.id !== id)
        })
    }
});

const useTodoStore = create<ITodoStore>()(
  immer(
    persist(todoStore, {
        name: "todo-storage",
        storage: createJSONStorage(() => localStorage),
        partialize: (s: ITodoStore) => ({ todos: s.todos })
    })
  )
);

export const useTodos = () => useTodoStore((s: ITodoStore) => s.todos);
export const addTodo = (todo: ITodo) => useTodoStore.getState().addTodo(todo);
export const removeTodo = (id: number) => useTodoStore.getState().removeTodo(id);
export const toggleTodo = (id: number) => useTodoStore.getState().toggleTodo(id);