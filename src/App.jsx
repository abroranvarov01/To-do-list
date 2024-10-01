import React from "react";
import { Card } from "./components/card/card";
import { Form } from "./components/form/form";

function App() {
  const [count, setData] = React.useState([]);
  const clearList = () => {
    setData([]);
  };
  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `Time: ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <h1 className="title">TO DO LIST</h1>
          <div className="top_wrap">
            <div>
              <p>{getCurrentDate()}</p>
              <p>{count.length} tasks</p>
            </div>
            <div>
              <p>{getCurrentTime()}</p>
              <button onClick={clearList} className="Clear_btn">
                Clear List
              </button>
            </div>
          </div>
          <ul className="task_list">
            {count.map((item) => (
              <Card
                setData={setData}
                key={item.id}
                task={item.task}
                time={item.time}
                id={item.id}
              />
            ))}
          </ul>
          <Form setData={setData} />
        </div>
      </div>
    </>
  );
}

export default App;
