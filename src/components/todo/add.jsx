import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import Button from "./button";

const AddTodo = () => {
  const { createTodo } = useContext(Context);
  const [title, setTitle] = useState("");

  const submitTodo = (event) => {
    event.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={submitTodo}
      className="w-full max-w-[800px] mx-auto px-4 mt-6"
    >
      <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-2xl shadow-md p-4">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Write a todo..."
          className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <Button extraStyle="sm:w-[140px] w-full">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddTodo;
