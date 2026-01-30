import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const TodoForm = () => {
  const { createTodo } = useContext(Context);
  const [title, setTitle] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="sm:w-[50%] w-[600px] bg-white rounded-2xl shadow-xl p-6 mx-auto">
        <form onSubmit={addTodo} autoComplete="off" className="flex gap-3">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder:text-[20px] placeholder:font-medium"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-1 px-10 text-[25px] py-4 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 active:scale-95 transition"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
