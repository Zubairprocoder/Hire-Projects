import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "./Nabar";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showFinished, setshowFinished] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };
  // Handle Add
  const handleAdd = () => {
    const trimmedTodo = todo.trim().toLowerCase();
    if (!trimmedTodo) {
      toast.error("⚠️ Please enter a task before adding!");
      return;
    }

    // Duplicate check (case-insensitive)
    const isDuplicate = todos.some((t) => t.todo.toLowerCase() === trimmedTodo);
    if (isDuplicate) {
      toast.error("⚠️ Your duplicate value");
      return;
    }

    const newTodos = [
      ...todos,
      { id: uuidv4(), todo: trimmedTodo, isCompleted: false },
    ];
    setTodos(newTodos);
    setTodo("");
    saveToLS(newTodos);
    toast.success("🟢 Todo added successfully!");
  };

  // Handle Edit
  const handleEdit = (id) => {
    const t = todos.find((item) => item.id === id);
    if (t) {
      setTodo(t.todo);
      setSelectedId(id);
    }
  };

  // Save edited
  const handleSaveEdit = () => {
    if (!todo.trim()) {
      toast.error("⚠️ Please enter a task before adding!");
      return;
    }

    const trimmedTodo = todo.trim().toLowerCase();

    // Duplicate check
    const isDuplicate = todos.some(
      (t) => t.todo.toLowerCase() === trimmedTodo && t.id !== selectedId
    );
    if (isDuplicate) {
      toast.error("⚠️ Your duplicate value");
      return;
    }

    const newTodos = todos.map((t) =>
      t.id === selectedId ? { ...t, todo: trimmedTodo } : t
    );
    setTodos(newTodos);
    setTodo("");
    setSelectedId(null);
    saveToLS(newTodos);
    toast.info("✏️ Todo updated!");
  };

  // Handle Delete
  const handleDelete = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
    toast.success("🗑️ Todo deleted!");
    if (selectedId === id) setSelectedId(null);
  };

  // Handle Toggle Complete
  const handleToggleCompleted = (id) => {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(newTodos);
    saveToLS(newTodos);
    toast.success("✅ Task marked as completed");
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (selectedId) handleSaveEdit();
        else handleAdd();
      }

      if (e.ctrlKey && e.key.toLowerCase() === "d" && selectedId) {
        e.preventDefault();
        handleDelete(selectedId);
      }

      if (e.ctrlKey && e.key.toLowerCase() === "e" && selectedId) {
        e.preventDefault();
        handleEdit(selectedId);
      }

      if (e.ctrlKey && e.key.toLowerCase() === "m" && selectedId) {
        e.preventDefault();
        handleToggleCompleted(selectedId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, todo, todos]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4 ">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-700 mb-6">
            Todo App 🚀
          </h1>
          {/* Input */}
          <div className="flex mb-4  max-w-xl flex-col sm:flex-row gap-4 sm:gap-0 ">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              onClick={selectedId ? handleSaveEdit : handleAdd}
              className="bg-purple-500 disabled:bg-info text-white px-4 py-2  rounded-r-md hover:bg-purple-600 transition-colors cursor-pointer "
            >
              {selectedId ? "Save Edit" : "Save Task"}
            </button>
          </div>
          <input
            onChange={toggleFinished}
            className="cursor-pointer m-2   "
            type="checkbox"
            name=""
            id=""
            checked={showFinished}
          />{" "}
          Show Finished
          <h2 className="text-2xl font-bold m-3">Your Todos</h2>
          {/* Todos */}
          <div className="flex flex-col w-full max-w-xl space-y-3">
            {todos.length === 0 && (
              <p className="text-center text-blue-500 text-lg font-medium">
                No tasks yet!
              </p>
            )}
            <div className="todos flex flex-col space-y-6 ">
              {todos.map(
                (item) =>
                  (showFinished || !item.isCompleted) && (
                    <div
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-lg ${
                        selectedId === item.id ? "bg-yellow-200" : "bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={item.isCompleted}
                          onChange={() => handleToggleCompleted(item.id)}
                          className="cursor-pointer text-lg "
                        />
                        <span
                          className={`${
                            item.isCompleted
                              ? "line-through text-black-400"
                              : ""
                          }font-medium mb-1 `}
                        >
                          {item.todo}
                        </span>
                      </div>

                      <div className="flex gap-5">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="text-blue-500 hover:text-blue-700 text-2xl cursor-pointer"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="colored"
        />
      </main>
    </>
  );
}

export default App;
