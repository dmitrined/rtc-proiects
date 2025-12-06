import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import styles from "./ToDoRedux.module.css";

interface Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export default function Tasks(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks) as Task[];
  const dispatch = useDispatch();

  function handleChangeStatus(id: string): void {
    dispatch({ type: "tasks/changeStatus", payload: id });
  }

  function handleRemoveTask(id: string): void {
    dispatch({ type: "tasks/remove", payload: id });
  }

  return (
    <div className={styles.tasksSection}>
      <h1>ToDo</h1>
      <ul className={styles.taskList}>
        {tasks.map((task: Task) => (
          <li
            key={task.id}
            // Используем classNames для условного добавления класса 'done'
            className={`${styles.taskItem} ${task.isDone ? styles.done : ''}`}
          >
            {/* Блок управления слева (Checkbox) */}
            <div className={(styles.iconButton, styles.checkboxIcon)}>
              {task.isDone ? (
                <CheckBoxIcon onClick={() => handleChangeStatus(task.id)} />
              ) : (
                <CheckBoxOutlineBlankIcon
                  onClick={() => handleChangeStatus(task.id)}
                />
              )}
            </div>

            {/* Контент задачи (Заголовок и Описание) */}
            <div className={styles.taskContent}>
              <b className={styles.title}>{task.title}</b>
              <span className={styles.description}>{task.description}</span>
            </div>

            {/* Блок управления справа (Delete) */}
            <div className={(styles.iconButton, styles.deleteIcon)}>
              <DeleteIcon onClick={() => handleRemoveTask(task.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}