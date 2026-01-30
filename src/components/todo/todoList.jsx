import { useContext } from "react";
import { Context } from "../../context/Context";
import TodoItem from "./todoItem";
import TodoForm from "./todoForm";

const Todos = () => {
  const { todos } = useContext(Context);

  return (
      <>
      <TodoForm />

      <div className="w-[50%] mx-auto mt-6 space-y-3">
        {todos.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-6 text-center text-gray-500">
            No todos yet. Add one 👆
          </div>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} item={todo} />)
        )}
      </div>
      </>
  );
};

export default Todos;
