# Документация проекта

Это шаблон React-проекта с использованием Redux Toolkit, React Router, Material UI и Tailwind CSS. Проект настроен для быстрой разработки веб-приложений и мобильных интерфейсов.

## Структура проекта

```
src/
├── app/                # Конфигурация Redux Store
│   ├── store.ts        # Настройка Store и Middlewares
│   └── hooks.ts        # Типизированные хуки (useAppDispatch, useAppSelector)
├── features/           # Функциональные модули (Slices и компоненты)
│   ├── auth/           # Авторизация (Login, authSlice)
│   ├── theme/          # Управление темой (themeSlice)
│   └── language/       # Управление языком (languageSlice)
├── navbar/             # Компоненты навигации (Navbar, Layout)
├── footer/             # Компонент подвала (Footer)
├── images/             # Изображения и ассеты
├── App.tsx             # Основной компонент с маршрутизацией
└── main.tsx            # Точка входа приложения
```

## Основные возможности

### 1. Redux Toolkit (RTK)
Проект использует RTK для управления состоянием.
- **Store**: Находится в `src/app/store.ts`.
- **Slices**: Каждый feature имеет свой slice (например, `authSlice`, `themeSlice`).

### 2. Темизация (Dark/Light Mode)
- Управление темой реализовано через `themeSlice`.
- Переключение темы доступно в Navbar.
- Используется Tailwind CSS класс `dark` для стилизации темной темы.

### 3. Мультиязычность
- Управление языком реализовано через `languageSlice`.
- Текущий язык хранится в Redux store.
- Пример использования в `Footer.tsx`.

### 4. Авторизация
- Реализован базовый флоу авторизации в `authSlice`.
- Страница входа `Login.tsx` использует Material UI.

## Как создавать новые компоненты

1.  Создайте новую папку в `src/features/` (например, `src/features/dashboard`).
2.  Создайте компонент (например, `Dashboard.tsx`).
3.  Если нужен Redux, создайте `dashboardSlice.ts` и добавьте его в `store.ts`.
4.  Добавьте маршрут в `App.tsx`.

## Стек технологий

- **React 19**
- **Vite**
- **Redux Toolkit**
- **React Router DOM**
- **Material UI (MUI)**
- **Tailwind CSS**
- **TypeScript**

## Команды

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка проекта
- `npm run lint` - Проверка кода (ESLint)
