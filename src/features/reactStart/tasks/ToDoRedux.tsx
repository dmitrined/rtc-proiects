import type { JSX } from "react";
import Tasks from "./Tasks";
import TaskCreation from "./TaskCreation";
import styles from "./ToDoRedux.module.css";


export default function ToDoRedux(): JSX.Element{
  return (
    <div className={styles.container}>
      <Tasks/>
      <TaskCreation/>

             {/* Кнопка для GitHub кода */}
      <a
        style={{
          display: "inline-block",
          padding: "10px 20px",
          textDecoration: "none",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          color: "white",
          backgroundColor: "#24292e",
          border: "2px solid #24292e",
          borderRadius: "6px",
          marginTop: "15px",
        }}
        target="_blank"
        href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/reactStart/tasks"
      >
        Посмотреть код этой страницы на GitHub
      </a>
    </div>
  )
}


