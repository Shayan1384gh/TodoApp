import { useContext } from "react";
import { TaskContext } from "./context";

const TodoApp = () => {
  const [task, setTask] = useContext(TaskContext);

  const RemoveHandler = (index) => {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  };

  const SetDoneHandler = (index) => {
    const updatedTask = [...task];
    updatedTask[index].done = !updatedTask[index].done;
    setTask(updatedTask);
  };

  return (
    <ul className="space-y-4 max-w-md mx-auto mt-8">
      {task.map((taskItem, index) => (
        <li
          key={index}
          className={`flex justify-between items-center p-4 rounded-xl shadow-md transition duration-300 ${
            taskItem.done
              ? "bg-green-100 line-through text-gray-500"
              : "bg-white hover:bg-blue-50"
          }`}
        >
          <span className="text-lg font-medium">{taskItem.text}</span>

          <div className="flex items-center space-x-3 text-xl">
            <button
              onClick={() => SetDoneHandler(index)}
              className="hover:scale-110 transition-transform duration-200 text-green-600"
              title="انجام شد"
            >
              ✅
            </button>
            <button
              onClick={() => RemoveHandler(index)}
              className="hover:scale-110 transition-transform duration-200 text-red-500"
              title="حذف"
            >
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoApp;
