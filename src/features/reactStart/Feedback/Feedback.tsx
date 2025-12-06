import { useState, type JSX } from "react";
import style from "./Feedback.module.css";
import imgFeedback from "./img/feedback.jpg";

export default function Feedback(): JSX.Element {
  const [like, setLike] = useState<number>(0);

  const [dislike, setDislike] = useState<number>(0);

  const [containerColor, setContainerColor] = useState<string>("");

  function hadleLike(): void {
    setLike(like + 1);
  }

  function handleDislike(): void {
    setDislike(dislike + 1);
  }

  function handleResset(): void {
    setLike(0);
    setDislike(0);
  }

  function handleChangeColor(color: string): void {
    setContainerColor(color);
  }

  return (
    <div>
      <img src={imgFeedback} alt="Feedback" />
      <div
        className={`${style.container} ${style.conterClass}`}
        style={{ backgroundColor: containerColor }}
      >
        <span style = {{color: "white"} }>{like}</span>
        <button className={style.btn} type="button" onClick={hadleLike}>
          👍
        </button>

        <button className={style.btn} type="button" onClick={handleDislike}>
          👎
        </button>

        <span style = {{color: "white"} }>{dislike}</span>

        <button className={style.btn} type="button" onClick={handleResset}>
          🗑️
        </button>
      </div>

      <div className={style.btn_color_change}>
        <button
          type="button"
          onClick={() => handleChangeColor("red")}
          style={{ backgroundColor: "red" }}>
          Red
        </button>
        <button
          type="button"
          onClick={() => handleChangeColor("green")}
          style={{ backgroundColor: "green" }}>
          Green
        </button>
        <button
          type="button"
          onClick={() => handleChangeColor("blue")}
          style={{ backgroundColor: "blue" }}>
          Blue
        </button>
      </div>
      {/* Кнопка для GitHub кода */}
      <a
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    textDecoration: 'none', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#24292e', 
    border: '2px solid #24292e',
    borderRadius: '6px',
    marginTop: '15px' 
  }}
  target="_blank"
  href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/reactStart/Feedback"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  );
}
