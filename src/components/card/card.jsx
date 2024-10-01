import React, { useState } from "react";
import style from "./card.module.css";

export const Card = ({ setData, task, time, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const del = () => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const edit = () => {
    setIsEditing(true);
  };

  const save = () => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: newTask } : item))
    );
    setIsEditing(false);
  };

  return (
    <li className={style.task_list_item}>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className={style.task_input}
        />
      ) : (
        <span className={style.task_name}>{task}</span>
      )}
      <span className={style.task_time}>{time}</span>
      {isEditing ? (
        <button onClick={save} className={style.save}></button>
      ) : (
        <button onClick={edit} className={style.edit}></button>
      )}
      <button onClick={del} className={style.delete}></button>
    </li>
  );
};
