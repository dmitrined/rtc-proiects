import ProfileCard from "../ProfileCard/ProfileCard";
import { musk, trump, bezos } from "../profiles"; // Импорт данных профилей
import styles from "./Homework02.module.css"; // Импорт стилей

export default function Homework02() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homework 02</h1>
      <div className={styles.profileList}>
        <ProfileCard profile={musk} />
        <ProfileCard profile={trump} />
        <ProfileCard profile={bezos} />
      </div>
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
        href="https://github.com/dmitrined/reactAit/tree/main/my-redux-app/src/components/HW/HW2x"
      >
        Посмотреть код этой страницы на GitHub
      </a>
    </div>
  );
}
