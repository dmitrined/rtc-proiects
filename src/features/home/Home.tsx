import type { JSX } from "react";
import { useAppSelector } from "../../app/hooks";

export default function Home(): JSX.Element {
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

  const content = {
    ru: {
      welcome: "Добро пожаловать!",
      description: "Это сайт, где я обучаюсь",
      react: "React",
      and: "и находятся мои",
      projects: "проекты",
      explore: "Исследуйте мои работы и следите за прогрессом!",
      loginPrompt: "Пожалуйста, залогиньтесь, чтобы посмотреть проекты"
    },
    en: {
      welcome: "Welcome!",
      description: "This is a site where I learn",
      react: "React",
      and: "and my",
      projects: "projects",
      explore: "Explore my work and follow my progress!",
      loginPrompt: "Please log in to view projects"
    },
    de: {
      welcome: "Willkommen!",
      description: "Dies ist eine Website, auf der ich",
      react: "React",
      and: "lerne und meine",
      projects: "Projekte",
      explore: "Erkunden Sie meine Arbeit und verfolgen Sie meinen Fortschritt!",
      loginPrompt: "Bitte melden Sie sich an, um Projekte anzuzeigen"
    },
  };

  const t = content[currentLanguage];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 p-6 text-center overflow-hidden transition-all duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 leading-tight animate-fade-in">
          {t.welcome}
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-4 font-light">
          {t.description}{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {t.react}
          </span>{" "}
          {t.and}{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            {t.projects}
          </span>
        </p>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 mb-12 font-light">
          {t.explore}
        </p>

        {/* Glassmorphism card */}
        <div className="inline-block backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 py-4 px-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
          <p className="text-lg font-semibold bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
            {t.loginPrompt}
          </p>
        </div>
      </div>
    </div>
  );
}