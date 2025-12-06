import { useState, type JSX } from "react"; // Импорт хука состояния React
import { Form, Formik, Field, ErrorMessage } from "formik"; // Импорт компонентов Formik
import * as Yup from "yup"; // Импорт библиотеки валидации
import styles from "./TodoList.module.css"; // Импорт CSS-модуля

// Определение пользовательского типа для задачи
type Todo = {
  id: number; // Уникальный числовой идентификатор
  text: string; // Текстовое описание задачи
  completed: boolean; // Логический флаг статуса выполнения
};

// Начальные значения для формы
const initialValues = { text: "" };

// Схема валидации с помощью Yup
const validationSchema = Yup.object({
  text: Yup.string() // Значение должно быть строкой
    .trim() // Автоматическое обрезание пробелов
    .min(3, "Минимум 3 символа") // Минимальная длина
    .max(50, "Максимум 50 символов") // Максимальная длина
    .required("Введите задачу"), // Обязательное поле
});

// Создание функционального компонента
export default function TodoList(): JSX.Element {
  // Инициализация состояния задач (пустой массив)
  const [todos, setTodos] = useState<Todo[]>([]);

  // Функция переключения статуса выполнения
  const toggleTodo = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        // Находим задачу по ID и инвертируем "completed"
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Функция удаления задачи
  const deleteTodo = (id: number): void => {
    // Фильтруем массив, исключая задачу с совпавшим ID
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Логика обработки отправки формы (передается в Formik)
  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    // Создание нового объекта задачи
    const newTodo: Todo = {
      id: Date.now(), // Уникальный ID в милисекундах
      text: values.text.trim(), // Текст задачи
      completed: false, // Статус выполнения false
    };

    // Обновление состояния: добавление новой задачи
    setTodos((prev) => [...prev, newTodo]);

    resetForm(); // Сброс формы
  };

  // Основная структура компонента
  return (
    <div className={styles.wrapper}>
      {/* Заголовок приложения */}
      <h1 className={styles.title}>Todo List</h1>

      {/* 1. Оборачиваем форму в компонент Formik */}
      <Formik
        initialValues={initialValues} // Передаем начальные значения
        validationSchema={validationSchema} // Передаем схему валидации
        onSubmit={handleSubmit} // Передаем обработчик отправки
      >
        {/* 2. Используем компонент Form вместо <form> */}
        <Form className={styles.form}>
          {/* 3. Используем компонент Field вместо <input> */}
          <Field
            type="text" // Тип "text"
            name="text" // Имя поля
            placeholder="Введите задачу..." // Плейсхолдер
            className={styles.input} // Стиль для поля ввода
          />

          {/* 4. Используем компонент ErrorMessage для отображения ошибок */}
          {/* Formik сам проверяет touched и errors */}
          <ErrorMessage
            name="text" // Имя поля, для которого показываем ошибку
            component="p" // Обернуть ошибку в тег <p>
            className={styles.error} // Стиль для ошибки
          />

          <button type="submit" className={styles.addButton}>
            Добавить {/* Текст "Добавить" */}
          </button>
        </Form>
      </Formik>

      {/* Список задач */}
      <ul className={styles.list}>
        {/* Рендеринг отдельных задач */}
        {todos.map((todo) => (
          <li key={todo.id} className={styles.listItem}>
            {/* Элемент задачи (текст) */}
            <span
              onClick={() => toggleTodo(todo.id)} // Обработчик клика для переключения статуса
              // Динамическое применение классов для завершенных задач
              className={`${styles.todoText} ${
                todo.completed ? styles.completed : ""
              }`}
            >
              {todo.text} {/* Отображение текста задачи */}
            </span>

            {/* Кнопка удаления задачи */}
            <button
              type="button" // Тип "button"
              onClick={() => deleteTodo(todo.id)} // Обработчик клика для удаления
              className={styles.deleteButton} // Стиль для кнопки
            >
              ✕ {/* Символ "Х" */}
            </button>
          </li>
        ))}
      </ul>

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
        href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/reactStart/TodoList"
      >
        Посмотреть код этой страницы на GitHub
      </a>
    </div>
  );
}
