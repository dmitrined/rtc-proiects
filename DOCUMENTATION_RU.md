# Документация проекта

Это учебный React-проект с использованием Redux Toolkit, React Router, Material UI и Tailwind CSS. Проект содержит множество практических примеров и упражнений для изучения React и Redux.

## Структура проекта

```
src/
├── app/                    # Конфигурация Redux Store
│   ├── store.ts            # Настройка Store, Middlewares и Redux Persist
│   └── hooks.ts            # Типизированные хуки (useAppDispatch, useAppSelector)
├── features/               # Функциональные модули
│   ├── auth/               # Авторизация (Login, authSlice)
│   ├── theme/              # Управление темой (themeSlice)
│   ├── language/           # Управление языком (languageSlice)
│   ├── counter/            # Счетчик (counterSlice)
│   ├── productsApp/        # Приложение магазина (products, cart)
│   ├── users/              # Список пользователей (RTK Query)
│   ├── weather/            # Погодное приложение (RTK Query + slice)
│   ├── cryptoWallet/       # Крипто-кошелек (RTK Query)
│   └── reactStart/         # Учебные упражнения React
│       ├── Alcohol/        # Проверка возраста
│       ├── Anecdotes/      # Анекдоты
│       ├── CardProfil/     # Профиль карточки
│       ├── CardSecurityCheck/ # Проверка безопасности карты
│       ├── ContactForm/    # Форма контактов
│       ├── dishes/         # Приложение блюд (Redux)
│       ├── DogsImage/      # Изображения собак
│       ├── Feedback/       # Форма обратной связи
│       ├── Films/Movies/   # Приложение фильмов (Redux)
│       ├── sandwichRedux/  # Конструктор сэндвичей (Redux)
│       ├── tasks/          # TODO приложение (Redux)
│       └── TodoList/       # Простой TODO список
├── navbar/                 # Компоненты навигации
│   ├── NavBar.tsx          # Навигационная панель
│   ├── LayOut.tsx          # Общий layout
│   └── ProtectedRoute/     # Защищенные маршруты
├── footer/                 # Компонент подвала
├── images/                 # Изображения и ассеты
├── App.tsx                 # Основной компонент с маршрутизацией
└── main.tsx                # Точка входа приложения
```

## Основные возможности

### 1. Redux Toolkit (RTK)
Проект использует RTK для управления состоянием:
- **Store**: Находится в `src/app/store.ts`
- **Slices**: Каждый feature имеет свой slice
- **RTK Query**: Используется для API запросов (users, weather, crypto)
- **Redux Persist**: Сохранение состояния в localStorage (auth, theme, language, counter, weatherState, tasks)

### 2. Темизация (Dark/Light Mode)
- Управление темой через `themeSlice`
- Переключение темы в Navbar
- Tailwind CSS класс `dark` для темной темы
- Состояние темы сохраняется в localStorage

### 3. Мультиязычность
- Управление языком через `languageSlice`
- Текущий язык хранится в Redux store
- Состояние языка сохраняется в localStorage

### 4. Авторизация
- Базовый флоу авторизации через `authSlice`
- Страница входа с Material UI
- Защищенные маршруты через `ProtectedRoute`
- Состояние авторизации сохраняется в localStorage

### 5. RTK Query APIs
Проект использует RTK Query для работы с API:
- **weatherApi**: Получение данных о погоде
- **usersApi**: Управление пользователями
- **cryptoApi**: Данные криптовалют

## Приложения и упражнения

### Основные приложения
- **Products App** (`/productsList`) - Магазин с корзиной
- **Counter** (`/counter`) - Счетчик с Redux
- **Users List** (`/usersList`) - Список пользователей (RTK Query)
- **Weather App** (`/weatherApp`) - Погодное приложение
- **Crypto Wallet** (`/cryptoWallet`) - Крипто-кошелек

### React Start упражнения
- **Alcohol** (`/alcohol`) - Проверка возраста для покупки алкоголя
- **Anecdotes** (`/anecdotes`) - Приложение с анекдотами
- **Card Profile** (`/cardProfile`) - Профиль пользователя
- **Card Security Check** (`/cardSecurityCheck`) - Проверка безопасности карты
- **Contact Form** (`/contactForm`) - Форма обратной связи (Formik + Yup)
- **Dish App** (`/dishApp`) - Приложение блюд с Redux
- **Dogs Image** (`/dogsImage`) - Галерея изображений собак
- **Feedback** (`/feedback`) - Форма отзывов
- **Movies** (`/movies`) - Приложение фильмов с Redux
- **Sandwich Redux** (`/sandwichRedux`) - Конструктор сэндвичей
- **ToDo Redux** (`/toDoRedux`) - TODO список с Redux
- **Todo List** (`/todoList`) - Простой TODO список

## Как создавать новые компоненты

1. Создайте новую папку в `src/features/` (например, `src/features/dashboard`)
2. Создайте компонент (например, `Dashboard.tsx`)
3. Если нужен Redux:
   - Создайте `dashboardSlice.ts`
   - Добавьте reducer в `store.ts`
   - При необходимости добавьте в whitelist для persist
4. Добавьте маршрут в `App.tsx`
5. При необходимости добавьте ссылку в `NavBar.tsx`

## Стек технологий

### Основные библиотеки
- **React 19.2.0** - UI библиотека
- **Vite 7.2.4** - Сборщик и dev-сервер
- **TypeScript 5.9.3** - Типизация
- **React Router DOM 7.9.6** - Маршрутизация

### State Management
- **Redux Toolkit 2.10.1** - Управление состоянием
- **React Redux 9.2.0** - React bindings для Redux
- **Redux Persist 6.0.0** - Сохранение состояния

### UI и стилизация
- **Material UI 7.3.5** - UI компоненты
- **Tailwind CSS 4.1.17** - Utility-first CSS
- **Emotion** - CSS-in-JS для MUI
- **Heroicons** - Иконки

### Формы и валидация
- **Formik 2.4.9** - Управление формами
- **Yup 1.7.1** - Валидация схем

### Утилиты
- **uid 2.0.2** - Генерация уникальных ID

## Команды

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка проекта для продакшена
- `npm run lint` - Проверка кода (ESLint)
- `npm run preview` - Предпросмотр production сборки

## Redux Persist

Проект использует Redux Persist для сохранения состояния в localStorage:

**Сохраняемые slices:**
- `auth` - Состояние авторизации
- `theme` - Выбранная тема
- `language` - Выбранный язык
- `counter` - Значение счетчика
- `weatherState` - Состояние погодного приложения
- `tasks` - Список задач

**Не сохраняемые slices:**
- `products`, `cart` - Данные магазина
- `dishes`, `movies`, `sandwiches` - Учебные приложения
- RTK Query кэши - Данные API запросов

## Защищенные маршруты

Большинство маршрутов защищены компонентом `ProtectedRoute` и требуют авторизации. Для доступа необходимо войти через страницу `/login`.
