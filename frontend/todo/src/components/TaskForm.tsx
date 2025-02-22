import React, { useState } from "react";
import "./TaskForm.css";
import { createTodo } from "../services/todoService";

interface TaskFormProps {
  refreshTasks: () => void;
}

const TaskForm = ({ refreshTasks }:TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTodo({
        title,
        description,
      });
      refreshTasks();
      setTitle("");
      setDescription("");
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        className="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button className="button" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
