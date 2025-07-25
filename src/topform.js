import { useContext, useState } from "react";
import { TaskContext } from "./context";

const Topform = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useContext(TaskContext);

  const handleTaskAdd = () => {
    if (input.trim() === "") return;
    setTask([...task, { text: input.trim(), done: false }]);
    setInput("");
  };

  return (
    <div className="text-center py-10 bg-gradient-to-r from-indigo-400 to-blue-500 text-white shadow-md rounded-b-3xl">
      <h2 className="text-3xl font-bold mb-4 drop-shadow">✨ Welcome to TodoApp ✨</h2>
      <div className="flex justify-center items-center gap-3 px-4 flex-wrap">
        <input
          type="text"
          placeholder="Write your tasks..."
          className="px-4 py-2 rounded-xl w-72 max-w-full focus:outline-none text-gray-800 shadow-inner"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-blue-100 transition"
          onClick={handleTaskAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Topform;
