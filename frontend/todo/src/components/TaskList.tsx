import {useEffect,useState} from "react";
import axios from "axios";
import  "./TaskList.css";
import "./TaskCard.css";
import { getTodos,deleteTodo } from "../services/todoService";

interface TaskListProps {
  tasks: Task[];
  refreshTasks: () => void;
}
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
const TaskList = ({ tasks, refreshTasks }:TaskListProps) => {

  const completeTask = async (id:number) => {
    try{
      await deleteTodo(id);
      refreshTasks();
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="taskContainer">
      {!tasks?(tasks?.map((task:unknown) => (
        <div key={task?.id} className="card">
          <div className="title">{task?.title}</div>
          <div className="description">{task?.description}</div>
          <button className="doneButton" onClick={() => completeTask(task.id)}>
            Done
          </button>
        </div>
      ))):(<div>No tasks</div>)}
    </div>
  );
};

export default TaskList;
