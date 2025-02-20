import { useState } from "react";

//todolist component
function TodoList() {
    //state untuk menyimpan list todo
    const [tasks, setTask] = useState([]);
    //state untuk menyimpan input user
    const [newTask, setNewTask] = useState("");

    //function untuk menambahkan task baru
    const addTask = (e) => {
        e.preventDefault();
        if(newTask === "") return;
        setTask([...tasks, newTask]);
        setNewTask("");
    };

    const removeTask = (index) => {
        setTask(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-4">Todo List</h2>
          <form onSubmit={addTask} className="flex mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 p-2 border rounded-l-md outline-none"
              placeholder="Tambahkan tugas..."
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Add</button>
          </form>
          <ul>
            {tasks.map((tasks, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded-md">
                <span>{tasks}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TodoList;