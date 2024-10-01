import React from "react";
import style from "./form.module.css";

export const Form = ({ setData }) => {
  const [value, setValue] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, { task: value, id: Date.now() }]);
    setValue("");
  };
  return (
    <form onSubmit={submit} className={style.form}>
      <input
        onChange={(e) => setValue(e.target.value)}
        className={style.input}
        type="text"
        id="new-task"
        placeholder="Add a Todo"
        value={value}
      />
      <button type="submit" className={style.add}>
        Add
      </button>
    </form>
  );
};
