import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './ContactForm.module.css';

import * as Yup from 'yup';

// Типы для данных формы

interface FormValues {
    name: string;
    email: string;
    message: string;
}

// Схема валидации Yup

const validationSchema = Yup.object({
    name: Yup.string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .required("Введите имя"),
    email: Yup.string()
    .email("Некорректный формат email")
    .required("Введите email"),
    message: Yup.string()
    .min(10, "Сообщение должно быть не менее 10 символов")
    .required("Введите сообщение")
})

function ContactForm(){
    const initialValues : FormValues = {
        name: "",
        email: "",
        message: "",
    };
    const handleSubmit = (values: FormValues) =>{
        console.log(" Отправленные данные", values);
        alert(`Сообщение отправлено, ${values.name}`)
    };
    return(

        <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>
            Форма обратной связи
            </h2>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            <Form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Имя</label>
                <Field id="name" name="name" placeholder="Введите имя" className={styles.input} />
                <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Введите email" className={styles.input} />
                <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Сообщение</label>
                <Field as="textarea" id="message" name="message" placeholder="Введите сообщение" className={styles.input} />
                <ErrorMessage name="message" component="div" className={styles.error} />
            </div>
            <button type="submit" className={styles.submitBtn}>Отправить</button>
            </Form>
            </Formik>
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
  href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/reactStart/ContactForm"
>
  Посмотреть код этой страницы на GitHub
</a>
        </div>
    )
}
export default ContactForm