import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../src/app/store";
import { addIngredient, reset } from "./sandwichSlice";
import styles from "./SandwichRedux.module.css";

export default function SandwichRedux(): JSX.Element {
  // Получаем массив ингредиентов из Redux Store
  const ingredients = useSelector((state: RootState) => state.sandwiches?.ingredients || []);
  const dispatch = useDispatch();


  // --- Форматирование для текстового поля ---
  // Объединяем массив ингредиентов в строку
  const sandwichText = "Sandwich: " + ingredients.join(' ');


  // --- Функции для dispatch (отправки действий) ---

  function handleAddIngredient(ingredient: string): void {
    // Отправляем действие для добавления ингредиента
    dispatch(addIngredient(ingredient));
  }

  function handleReset(): void {
    // Отправляем действие для сброса
    dispatch(reset());
  }

  return (
    <div className={styles.container} >
      <h2>Sandwich (Redux)</h2>


      <input
        type="text"
        value={sandwichText}

        className={styles.sandwichInput}
      />

      <div className={styles.btnContainer}>
        {/* Кнопки для добавления ингредиентов */}
        <button
          type="button"
          onClick={() => handleAddIngredient("🍞")}
          className={styles.btn}
        >
          🍞
        </button>
        <button
          type="button"
          onClick={() => handleAddIngredient("🥩")}
          className={styles.btn}
        >
          🥩
        </button>
        <button
          type="button"
          onClick={() => handleAddIngredient("🧀")}
          className={styles.btn}
        >
          🧀
        </button>

        <button
          type="button"
          onClick={handleReset}
          className={styles.btn}
        >
          Reset
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
        href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/reactStart/sandwichRedux"
      >
        Посмотреть код этой страницы на GitHub
      </a>
    </div>
  );
}
