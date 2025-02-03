import React, { useState } from "react";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";

const TodoList = () => {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [popup, setPopup] = useState(false);
  const [editId, setEditId] = useState(null);

  const addPop = () => {
    setPopup((prev) => !prev);
  };

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
    setPopup(false);
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, text) => {
    setEditId(id);
    setTask(text);
    setPopup(true);
  };

  const saveTask = () => {
    if (task.trim() === "") return;
    setTasks(tasks.map((t) => (t.id === editId ? { ...t, text: task } : t)));
    setTask("");
    setEditId(null);
    setPopup(false);
  };

  return (
    <>
      <section>
        <div className="bg-slate-400 min-h-screen flex justify-center items-center w-full text-slate-800 border-2">
          <div className="bg-pink-400 w-2/4 flex flex-col rounded items-center">
            <p className="font-bold text-3xl">TO DO LIST</p>
            <button
              className="bg-pink-950 p-2 rounded mt-4 text-white"
              onClick={addPop}
            >
              Add Task
            </button>
            <div className="m-5 p-3 rounded grid grid-cols-2 gap-6 items-center">
              {tasks.map((t) => (
                <div
                  key={t.id}
                  className="flex flex-row bg-pink-800 p-4 rounded space-x-2 items-center"
                >
                  <p
                    className="font-serif text-white text-center  bg-pink-600 p-2 rounded w-36"
                    style={{
                      textDecoration: t.completed ? "line-through" : "",
                    }}
                  >
                    {t.text}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <button
                      className="bg-pink-950 p-2 rounded text-white"
                      onClick={() => deleteTask(t.id)}
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="bg-pink-950 p-2 rounded text-white"
                      onClick={() => doneTask(t.id)}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="bg-pink-950 p-2 rounded text-white"
                      onClick={() => editTask(t.id, t.text)}
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {popup && (
              <>
                <div className="bg-pink-300 p-5 w-2/4  flex flex-col rounded items-center z-50 my-2">
                  <input
                    type="text"
                    className="p-2 rounded"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <button className="bg-pink-800 rounded p-1 px-2 m-2 text-white" onClick={editId !== null ? saveTask : addTask}>
                  {editId !== null ? "Edit" : "Add"}
                </button>
                </div>
                
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
