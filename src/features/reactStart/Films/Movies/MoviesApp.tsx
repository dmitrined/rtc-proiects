import type { JSX } from "react";
import MovieCreation from "./MovieCreation";
import Movies from "./Movies";


export default function MoviesApp(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
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
        href="https://github.com/dmitrined/reactAit/tree/main/my-redux-app/src/components/Lecture/L11/Movies"
      >
        Посмотреть код этой страницы на GitHub
      </a>
        <MovieCreation />
        <Movies />
    </div>
  )
}