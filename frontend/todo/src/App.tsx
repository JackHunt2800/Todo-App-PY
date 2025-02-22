import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTodos } from "./services/todoService";
import './App.css'

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try{
      const { data } = await getTodos();
      setTasks(data);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => { fetchTasks(); }, [])

  return (
    <>
    <div className="app">
      <h1>To-Do Tasks</h1>
      <TaskForm refreshTasks={fetchTasks} />
      <TaskList tasks={tasks} refreshTasks={fetchTasks} />
    </div>
    </>
  )
}

export default App
