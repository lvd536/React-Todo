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
    activeTodo: ITodo,
    addTodo: (todo: ITodo) => void,
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void,
    editTodo: (editedTodo: ITodo) => void,
    setActiveTodo: (todo: ITodo) => void
}

const todoStore: StateCreator<ITodoStore, [["zustand/immer", never], ["zustand/persist", unknown]]> = (set) => ({
    todos: [],
    activeTodo: {id: -1, title: '', description: '', completed: false},
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
    },
    editTodo: (editedTodo: ITodo) => {
        set((s: ITodoStore) => {
            const todo = s.todos.find(t => t.id === editedTodo.id)
            if (todo) {
                todo.title = editedTodo.title
                todo.description = editedTodo.description
            }
        })
    },
    setActiveTodo: (todo: ITodo) => {
        set((s: ITodoStore) => {
            s.activeTodo = todo
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
export const useActiveTodo = () => useTodoStore((s: ITodoStore) => s.activeTodo);
export const setActiveTodo = (todo: ITodo) => useTodoStore.getState().setActiveTodo(todo);
export const addTodo = (todo: ITodo) => useTodoStore.getState().addTodo(todo);
export const removeTodo = (id: number) => useTodoStore.getState().removeTodo(id);
export const toggleTodo = (id: number) => useTodoStore.getState().toggleTodo(id);
export const editTodo = (editedTodo: ITodo) => useTodoStore.getState().editTodo(editedTodo);