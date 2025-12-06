import type { JSX } from "react";
import styles from "./CardSecurityCheck.module.css"; // Предполагаем, что у вас есть этот файл стилей
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik"; // Corrected import path

// Типы для данных формы
interface FormValues {
  cardNumberPart1: string;
  cardNumberPart2: string;
  cardNumberPart3: string;
  cardNumberPart4: string; // Добавлено, так как на изображении 3 блока, но стандартно 4
  cvc2: string;
}

// Вспомогательная схема валидации для части номера карты
const cardNumberPartSchema = Yup.string()
  .length(4, "Должно быть 4 цифры")
  .matches(/^\d+$/, "Только цифры")
  .required("Обязательное поле");

// Схема валидации Yup для всей формы
const validationSchema = Yup.object({
  cardNumberPart1: cardNumberPartSchema,
  cardNumberPart2: cardNumberPartSchema,
  cardNumberPart3: cardNumberPartSchema,
  // Если нужно 4 части, как в большинстве карт:
  cardNumberPart4: cardNumberPartSchema, // Если карта имеет 4 части номера, как обычно
  cvc2: Yup.string()
    .length(3, "Должно быть 3 цифры") // Стандарт CVC2 - 3 цифры
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),
});

export default function CardSecurityCheck(): JSX.Element {
  const initialValues: FormValues = {
    cardNumberPart1: "",
    cardNumberPart2: "",
    cardNumberPart3: "", 
    cardNumberPart4: "", 
    cvc2: "",
  };

  const handleSubmit = (values: FormValues) => {

    const fullCardNumber = `${values.cardNumberPart1}${values.cardNumberPart2}${values.cardNumberPart3}${values.cardNumberPart4}`; // Объединяем части
    console.log("Отправленные данные (демо):", {
      fullCardNumber,
      cvc2: values.cvc2,
    });
    alert(`Проверка завершена!  для карты: **** **** **** ${values.cardNumberPart4.slice(-4)}\n Ваши данные теперь у нас 😂🥹💸💸💸💸`);
    // Здесь должна быть логика отправки на безопасный бэкенд или платежную систему
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>ПРОВЕРКА БЕЗОПАСНОСТИ</h1>
        <p className={styles.description}>
          Узнайте, есть ли ваша карта в базе данных хакеров!
          <br />
          Введите данные, чтобы проверить.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img src="data:image/jpeg;base64,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" alt="" />
        
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          {/* Ввод номера карты */}
          <div className={styles.formGroup}>
            <label htmlFor="cardNumberPart1" className={styles.label}>
              Номер карты:
            </label>
            <div className={styles.cardNumberFields}>
              <Field
                id="cardNumberPart1"
                name="cardNumberPart1"
                type="tel" // Используем tel для цифровой клавиатуры на мобильных
                maxLength={4}
                placeholder="1111"
                className={styles.cardInput}
              />
              <span className={styles.dash}>-</span>
              <Field
                id="cardNumberPart2"
                name="cardNumberPart2"
                type="tel"
                maxLength={4}
                placeholder="2222"
                className={styles.cardInput}
              />
              <span className={styles.dash}>-</span>
              <Field
                id="cardNumberPart3"
                name="cardNumberPart3"
                type="tel"
                maxLength={4}
                placeholder="3333"
                className={styles.cardInput}
              />
              {/* Если нужно 4 части: */}
              <span className={styles.dash}>-</span>
              <Field
                id="cardNumberPart4"
                name="cardNumberPart4"
                type="tel"
                maxLength={4}
                placeholder="4444"
                className={styles.cardInput}
              />
            </div>
            {/* Сообщения об ошибках для каждой части карты */}
            <ErrorMessage
              name="cardNumberPart1"
              component="div"
              className={styles.error}
            />
            <ErrorMessage
              name="cardNumberPart2"
              component="div"
              className={styles.error}
            />
            <ErrorMessage
              name="cardNumberPart3"
              component="div"
              className={styles.error}
            />
            {/* Если нужно 4 части: */}
            <ErrorMessage
              name="cardNumberPart4"
              component="div"
              className={styles.error}
            />
          </div>

          {/* Ввод CVC2 */}
          <div className={styles.formGroup}>
            <label htmlFor="cvc2" className={styles.label}>
              CVC2:
            </label>
            <Field
              id="cvc2"
              name="cvc2"
              type="tel" // Используем tel для цифровой клавиатуры
              maxLength={3} // Стандарт CVC2 - 3 цифры
              placeholder="123"
              className={`${styles.cardInput} ${styles.cvcInput}`} // Дополнительный класс для CVC2, если нужен
            />
            <ErrorMessage
              name="cvc2"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Проверить!
          </button>
        </Form>
      </Formik>
      
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
  href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/reactStart/CardSecurityCheck"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  );
}