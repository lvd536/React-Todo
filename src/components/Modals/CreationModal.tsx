import { useState } from "react";
import { toggleModal } from "../../store/useModalStore";
import { addTodo, type ITodo } from "../../store/useTodoStore";

interface FormData {
  name: string;
  description: string;
}

export default function CreationModal() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const todo: ITodo = {
        title: formData.name,
        description: formData.description,
        id: Date.now(),
        completed: false,
    };
    addTodo(todo)
  };

  const handleClick: () => void = () => {
    toggleModal();
  };

  return (
    <div className="flex font-second fixed items-center justify-center w-screen h-screen bg-gray-500/30 z-2">
      <form
        className="flex text-black dark:text-white relative flex-col items-center justify-center w-5/6 sm:w-1/2 h-4/6 bg-white dark:bg-black ring-white dark:rind-black ring-1 rounded-xl gap-5 px-10 animate-modal"
        onSubmit={handleSubmit}
      >
        <h1 className="font-main text-2xl">NEW NOTE</h1>
        <label htmlFor="todoName">Name</label>
        <input
          className="ring-1 dark:ring-white ring-indigo-500 w-full rounded-md p-2"
          type="text"
          name="name"
          id="todoName"
          minLength={3}
          maxLength={16}
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="todoDescription">Description</label>
        <textarea
          className="ring-1 dark:ring-white ring-indigo-500 w-full rounded-md max-h-50 p-2"
          name="description"
          id="todoDescription"
          maxLength={100}
          value={formData.description}
          onChange={handleChange}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-5 pt-10">
          <button
            className="flex font-main items-center justify-center p-4 w-28 h-10 ring-1 ring-indigo-500 rounded-md text-indigo-500"
            onClick={handleClick}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex font-main items-center justify-center p-4 w-28 h-10 bg-indigo-500 text-white rounded-md"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
