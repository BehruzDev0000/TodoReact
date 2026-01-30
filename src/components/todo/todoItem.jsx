import { useContext, useState } from "react";
import Button from "./button";
import { Context } from "../../context/Context";
import Modal from "./modal";

const TodoItem = ({ item }) => {
  const { toggleTodo, editTodo, deleteTodo } = useContext(Context);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [editTitle, setEditTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const openEditModal = () => {
    setEditTitle(item.title);
    setCompleted(item.isComplated);
    setEditModal(true);
  };

  const saveEdit = (event) => {
    event.preventDefault();
    editTodo(item.id, editTitle, completed);
    setEditModal(false);
  };

  const confirmDelete = () => {
    deleteTodo(item.id);
    setDeleteModal(false);
  };

  return (
    <>
      <li className="flex items-center justify-between bg-white rounded-xl shadow-md px-6 py-5 mb-3 transition-all duration-200 hover:shadow-lg hover:scale-[1.01]">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={item.isComplated}
            onChange={() => toggleTodo(item.id)}
            className="w-5 h-5 accent-blue-500 cursor-pointer"
          />

          <p
            className={`text-[20px] font-semibold ${
              item.isComplated ? "text-gray-400 line-through" : "text-gray-800"
            }`}
          >
            {item.title}
          </p>
        </div>

        <div className="flex gap-2">
          <Button onClick={openEditModal} extraStyle="!text-white">
            Edit
          </Button>

          <Button
            onClick={() => setDeleteModal(true)}
            extraStyle="!bg-red-100 !text-red-600 hover:!bg-red-200"
          >
            Delete
          </Button>
        </div>
      </li>

      <Modal showModal={editModal} setShowModal={setEditModal}>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Edit Todo</h2>

            <button
              onClick={() => setEditModal(false)}
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
            >
              ✕
            </button>
          </div>

          <form onSubmit={saveEdit}>
            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700">
                Todo title
              </label>
              <input
                type="text"
                placeholder="Edit todo..."
                value={editTitle}
                onChange={(event) => setEditTitle(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-gray-200 p-4">
              <span className="text-sm text-gray-700">Completed</span>

              <button
                type="button"
                onClick={() => setCompleted((previous) => !previous)}
                className={`relative h-6 w-11 rounded-full transition ${
                  completed ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
                    completed ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setEditModal(false)}
                className="rounded-xl px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal showModal={deleteModal} setShowModal={setDeleteModal}>
        <div className="w-full">
          <h2 className="text-xl font-semibold text-gray-900">Delete Todo</h2>

          <p className="mt-2 text-sm text-gray-500">
            Are you sure you want to delete this todo? This action can’t be undone.
          </p>

          <div className="mt-6 flex items-center justify-end gap-2">
            <button
              onClick={() => setDeleteModal(false)}
              className="rounded-xl px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancel
            </button>

            <button
              onClick={confirmDelete}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TodoItem;
